/**
 * Task Management System for Cosmic Portals
 * Handles task creation, assignment, tracking, and collaboration
 */

import { supabase } from './supabase/client';

// =====================================
// TYPESCRIPT INTERFACES
// =====================================

export interface Task {
  id: string;
  organization_id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  assigned_to?: string;
  created_by: string;
  due_date?: string;
  completed_at?: string;
  metadata: Record<string, any>;
  created_at: string;
  updated_at: string;
  
  // Joined data
  assigned_user?: {
    id: string;
    name: string;
    email: string;
  };
  creator?: {
    id: string;
    name: string;
    email: string;
  };
  notes_count?: number;
  attachments_count?: number;
}

export interface TaskNote {
  id: string;
  task_id: string;
  user_id: string;
  content: string;
  note_type: TaskNoteType;
  metadata: Record<string, any>;
  created_at: string;
  
  // Joined data
  user?: {
    id: string;
    name: string;
    email: string;
  };
}

export interface TaskAttachment {
  id: string;
  task_id: string;
  uploaded_by: string;
  file_name: string;
  file_url: string;
  file_size?: number;
  file_type?: string;
  metadata: Record<string, any>;
  created_at: string;
  
  // Joined data
  uploader?: {
    id: string;
    name: string;
    email: string;
  };
}

export interface TaskTemplate {
  id: string;
  organization_id: string;
  name: string;
  description?: string;
  template_data: TaskTemplateData[];
  category: TaskTemplateCategory;
  is_public: boolean;
  created_by: string;
  created_at: string;
  updated_at: string;
  
  // Joined data
  creator?: {
    id: string;
    name: string;
    email: string;
  };
}

export interface TaskTemplateData {
  title: string;
  description?: string;
  priority: TaskPriority;
  due_date_offset?: number; // Days from creation
}

// =====================================
// ENUMS
// =====================================

export type TaskStatus = 'to_do' | 'in_progress' | 'on_hold' | 'completed' | 'cancelled';
export type TaskPriority = 'low' | 'medium' | 'high' | 'urgent';
export type TaskNoteType = 'comment' | 'status_change' | 'assignment_change' | 'system';
export type TaskTemplateCategory = 'event_planning' | 'business_operations' | 'custom';

// =====================================
// TASK SERVICE CLASS
// =====================================

export class TaskService {
  private supabase = supabase;

  /**
   * Create a new task
   */
  async createTask(data: {
    organization_id: string;
    title: string;
    description?: string;
    priority?: TaskPriority;
    assigned_to?: string;
    created_by: string;
    due_date?: string;
    metadata?: Record<string, any>;
  }): Promise<Task> {
    const { data: task, error } = await this.supabase
      .from('tasks')
      .insert({
        organization_id: data.organization_id,
        title: data.title,
        description: data.description,
        priority: data.priority || 'medium',
        assigned_to: data.assigned_to,
        created_by: data.created_by,
        due_date: data.due_date,
        metadata: data.metadata || {},
      })
      .select(`
        *,
        assigned_user:assigned_to(id, name, email),
        creator:created_by(id, name, email)
      `)
      .single();

    if (error) throw error;
    return task;
  }

  /**
   * Get all tasks for an organization
   */
  async getOrganizationTasks(organizationId: string): Promise<Task[]> {
    const { data, error } = await this.supabase
      .from('tasks')
      .select(`
        *,
        assigned_user:assigned_to(id, name, email),
        creator:created_by(id, name, email)
      `)
      .eq('organization_id', organizationId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  }

  /**
   * Get tasks assigned to a specific user
   */
  async getUserAssignedTasks(userId: string): Promise<Task[]> {
    const { data, error } = await this.supabase
      .from('tasks')
      .select(`
        *,
        assigned_user:assigned_to(id, name, email),
        creator:created_by(id, name, email)
      `)
      .eq('assigned_to', userId)
      .order('due_date', { ascending: true, nullsLast: true });

    if (error) throw error;
    return data || [];
  }

  /**
   * Get tasks created by a specific user
   */
  async getUserCreatedTasks(userId: string): Promise<Task[]> {
    const { data, error } = await this.supabase
      .from('tasks')
      .select(`
        *,
        assigned_user:assigned_to(id, name, email),
        creator:created_by(id, name, email)
      `)
      .eq('created_by', userId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  }

  /**
   * Get a single task by ID
   */
  async getTask(taskId: string): Promise<Task> {
    const { data, error } = await this.supabase
      .from('tasks')
      .select(`
        *,
        assigned_user:assigned_to(id, name, email),
        creator:created_by(id, name, email)
      `)
      .eq('id', taskId)
      .single();

    if (error) throw error;
    return data;
  }

  /**
   * Update a task
   */
  async updateTask(taskId: string, updates: {
    title?: string;
    description?: string;
    status?: TaskStatus;
    priority?: TaskPriority;
    assigned_to?: string;
    due_date?: string;
    metadata?: Record<string, any>;
  }): Promise<Task> {
    const updateData: any = { ...updates };
    
    // Set completed_at if status is being changed to completed
    if (updates.status === 'completed') {
      updateData.completed_at = new Date().toISOString();
    } else if (updates.status && updates.status !== 'completed') {
      updateData.completed_at = null;
    }

    const { data, error } = await this.supabase
      .from('tasks')
      .update(updateData)
      .eq('id', taskId)
      .select(`
        *,
        assigned_user:assigned_to(id, name, email),
        creator:created_by(id, name, email)
      `)
      .single();

    if (error) throw error;
    return data;
  }

  /**
   * Delete a task
   */
  async deleteTask(taskId: string): Promise<void> {
    const { error } = await this.supabase
      .from('tasks')
      .delete()
      .eq('id', taskId);

    if (error) throw error;
  }

  /**
   * Assign a task to a user
   */
  async assignTask(taskId: string, userId: string): Promise<Task> {
    return this.updateTask(taskId, { assigned_to: userId });
  }

  /**
   * Add a note to a task
   */
  async addTaskNote(data: {
    task_id: string;
    user_id: string;
    content: string;
    note_type?: TaskNoteType;
    metadata?: Record<string, any>;
  }): Promise<TaskNote> {
    const { data: note, error } = await this.supabase
      .from('task_notes')
      .insert({
        task_id: data.task_id,
        user_id: data.user_id,
        content: data.content,
        note_type: data.note_type || 'comment',
        metadata: data.metadata || {},
      })
      .select(`
        *,
        user:user_id(id, name, email)
      `)
      .single();

    if (error) throw error;
    return note;
  }

  /**
   * Get notes for a task
   */
  async getTaskNotes(taskId: string): Promise<TaskNote[]> {
    const { data, error } = await this.supabase
      .from('task_notes')
      .select(`
        *,
        user:user_id(id, name, email)
      `)
      .eq('task_id', taskId)
      .order('created_at', { ascending: true });

    if (error) throw error;
    return data || [];
  }

  /**
   * Get task templates for an organization
   */
  async getTaskTemplates(organizationId: string): Promise<TaskTemplate[]> {
    const { data, error } = await this.supabase
      .from('task_templates')
      .select(`
        *,
        creator:created_by(id, name, email)
      `)
      .or(`organization_id.eq.${organizationId},is_public.eq.true`)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  }

  /**
   * Create tasks from a template
   */
  async createTasksFromTemplate(
    templateId: string,
    organizationId: string,
    createdBy: string,
    assignedTo?: string
  ): Promise<Task[]> {
    // Get the template
    const { data: template, error: templateError } = await this.supabase
      .from('task_templates')
      .select('template_data')
      .eq('id', templateId)
      .single();

    if (templateError) throw templateError;
    if (!template) throw new Error('Template not found');

    // Create tasks from template data
    const tasks = template.template_data.map((taskData: TaskTemplateData) => ({
      organization_id: organizationId,
      title: taskData.title,
      description: taskData.description,
      priority: taskData.priority,
      assigned_to: assignedTo,
      created_by: createdBy,
      due_date: taskData.due_date_offset 
        ? new Date(Date.now() + taskData.due_date_offset * 24 * 60 * 60 * 1000).toISOString()
        : undefined,
    }));

    const { data, error } = await this.supabase
      .from('tasks')
      .insert(tasks)
      .select(`
        *,
        assigned_user:assigned_to(id, name, email),
        creator:created_by(id, name, email)
      `);

    if (error) throw error;
    return data || [];
  }

  /**
   * Get task statistics for dashboard
   */
  async getTaskStats(organizationId: string): Promise<{
    total: number;
    to_do: number;
    in_progress: number;
    completed: number;
    overdue: number;
  }> {
    const { data, error } = await this.supabase
      .from('tasks')
      .select('status, due_date')
      .eq('organization_id', organizationId)
      .neq('status', 'cancelled');

    if (error) throw error;

    const now = new Date();
    const stats = {
      total: data?.length || 0,
      to_do: 0,
      in_progress: 0,
      completed: 0,
      overdue: 0,
    };

    data?.forEach(task => {
      stats[task.status as keyof typeof stats]++;
      
      if (task.due_date && task.status !== 'completed' && new Date(task.due_date) < now) {
        stats.overdue++;
      }
    });

    return stats;
  }
}

// =====================================
// HELPER FUNCTIONS
// =====================================

export function getTaskStatusColor(status: TaskStatus): string {
  switch (status) {
    case 'to_do': return 'bg-gray-100 text-gray-800';
    case 'in_progress': return 'bg-blue-100 text-blue-800';
    case 'on_hold': return 'bg-yellow-100 text-yellow-800';
    case 'completed': return 'bg-green-100 text-green-800';
    case 'cancelled': return 'bg-red-100 text-red-800';
    default: return 'bg-gray-100 text-gray-800';
  }
}

export function getTaskPriorityColor(priority: TaskPriority): string {
  switch (priority) {
    case 'low': return 'bg-gray-100 text-gray-800';
    case 'medium': return 'bg-blue-100 text-blue-800';
    case 'high': return 'bg-orange-100 text-orange-800';
    case 'urgent': return 'bg-red-100 text-red-800';
    default: return 'bg-gray-100 text-gray-800';
  }
}

export function formatTaskDueDate(dueDate: string): string {
  const date = new Date(dueDate);
  const now = new Date();
  const diffTime = date.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 0) return `Overdue (${Math.abs(diffDays)} days)`;
  if (diffDays === 0) return 'Due today';
  if (diffDays === 1) return 'Due tomorrow';
  if (diffDays <= 7) return `Due in ${diffDays} days`;
  
  return date.toLocaleDateString();
}

export function isTaskOverdue(dueDate: string, status: TaskStatus): boolean {
  if (status === 'completed') return false;
  return new Date(dueDate) < new Date();
}
