import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

export { createClient };
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Server-side client with service role key (for admin operations)
// Only available on server side
export const supabaseAdmin =
  typeof window === 'undefined'
    ? createClient(supabaseUrl, process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder-service-key', {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      })
    : null;

// Database types for Cosmic Portals
export interface Database {
  public: {
    Tables: {
      organizations: {
        Row: {
          id: string;
          name: string;
          slug: string;
          plan_type: string;
          subscription_status: string;
          created_at: string;
          updated_at: string;
          settings: Record<string, unknown>;
          white_label_config: Record<string, unknown>;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          plan_type?: string;
          subscription_status?: string;
          created_at?: string;
          updated_at?: string;
          settings?: Record<string, unknown>;
          white_label_config?: Record<string, unknown>;
        };
        Update: {
          id?: string;
          name?: string;
          slug?: string;
          plan_type?: string;
          subscription_status?: string;
          created_at?: string;
          updated_at?: string;
          settings?: Record<string, unknown>;
          white_label_config?: Record<string, unknown>;
        };
      };
      users: {
        Row: {
          id: string;
          clerk_id: string;
          organization_id: string;
          email: string;
          first_name: string | null;
          last_name: string | null;
          role: string;
          status: string;
          invited_by: string | null;
          invited_at: string | null;
          last_login: string | null;
          permissions: Record<string, unknown>;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          clerk_id: string;
          organization_id: string;
          email: string;
          first_name?: string | null;
          last_name?: string | null;
          role?: string;
          status?: string;
          invited_by?: string | null;
          invited_at?: string | null;
          last_login?: string | null;
          permissions?: Record<string, unknown>;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          clerk_id?: string;
          organization_id?: string;
          email?: string;
          first_name?: string | null;
          last_name?: string | null;
          role?: string;
          status?: string;
          invited_by?: string | null;
          invited_at?: string | null;
          last_login?: string | null;
          permissions?: Record<string, unknown>;
          created_at?: string;
          updated_at?: string;
        };
      };
      events: {
        Row: {
          id: string;
          organization_id: string;
          name: string;
          description: string | null;
          event_type: string;
          start_date: string | null;
          end_date: string | null;
          location: string | null;
          status: string;
          settings: Record<string, unknown>;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          organization_id: string;
          name: string;
          description?: string | null;
          event_type: string;
          start_date?: string | null;
          end_date?: string | null;
          location?: string | null;
          status?: string;
          settings?: Record<string, unknown>;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          organization_id?: string;
          name?: string;
          description?: string | null;
          event_type?: string;
          start_date?: string | null;
          end_date?: string | null;
          location?: string | null;
          status?: string;
          settings?: Record<string, unknown>;
          created_at?: string;
          updated_at?: string;
        };
      };
      nfc_devices: {
        Row: {
          id: string;
          organization_id: string;
          device_id: string;
          device_type: string;
          status: string;
          last_scan: string | null;
          scan_count: number;
          metadata: Record<string, unknown>;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          organization_id: string;
          device_id: string;
          device_type: string;
          status?: string;
          last_scan?: string | null;
          scan_count?: number;
          metadata?: Record<string, unknown>;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          organization_id?: string;
          device_id?: string;
          device_type?: string;
          status?: string;
          last_scan?: string | null;
          scan_count?: number;
          metadata?: Record<string, unknown>;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
}
