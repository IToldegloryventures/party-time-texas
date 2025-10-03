'use client';

import { useState, useEffect } from 'react';

interface PageComponent {
  id: string;
  type: 'hero' | 'text' | 'contact' | 'social' | 'image' | 'button' | 'divider';
  data: Record<string, unknown>;
  position: number;
}

interface DragDropBuilderProps {
  initialPage?: Record<string, unknown>;
  organizationId: string;
  userId: string;
}

const DragDropBuilder = ({ initialPage }: DragDropBuilderProps) => {
  const [components, setComponents] = useState<PageComponent[]>([]);
  const [selectedComponent, setSelectedComponent] = useState<string | null>(
    null
  );
  const [draggedComponent, setDraggedComponent] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  // Component templates
  const componentTemplates = [
    {
      type: 'hero',
      name: 'Hero Section',
      icon: '🎯',
      description: 'Main banner with title and subtitle',
    },
    {
      type: 'text',
      name: 'Text Block',
      icon: '📝',
      description: 'Rich text content',
    },
    {
      type: 'contact',
      name: 'Contact Info',
      icon: '📞',
      description: 'Contact details and form',
    },
    {
      type: 'social',
      name: 'Social Links',
      icon: '🔗',
      description: 'Social media links',
    },
    {
      type: 'image',
      name: 'Image',
      icon: '🖼️',
      description: 'Image with caption',
    },
    {
      type: 'button',
      name: 'Button',
      icon: '🔘',
      description: 'Call-to-action button',
    },
    {
      type: 'divider',
      name: 'Divider',
      icon: '➖',
      description: 'Visual separator',
    },
  ];

  // Initialize components from page data
  useEffect(() => {
    if (initialPage?.content) {
      const initialComponents: PageComponent[] = [
        {
          id: 'hero-1',
          type: 'hero',
          position: 0,
          data: {
            title: initialPage.content.title || 'Welcome',
            subtitle: initialPage.content.subtitle || 'Your subtitle here',
            backgroundImage: '',
            textColor: '#ffffff',
          },
        },
        {
          id: 'text-1',
          type: 'text',
          position: 1,
          data: {
            content: initialPage.content.description || 'Your description here',
            fontSize: '16px',
            textAlign: 'center',
          },
        },
        {
          id: 'contact-1',
          type: 'contact',
          position: 2,
          data: {
            email: initialPage.content.contact?.email || '',
            phone: initialPage.content.contact?.phone || '',
            website: initialPage.content.contact?.website || '',
            showForm: false,
          },
        },
        {
          id: 'social-1',
          type: 'social',
          position: 3,
          data: {
            facebook: initialPage.content.social?.facebook || '',
            instagram: initialPage.content.social?.instagram || '',
            linkedin: initialPage.content.social?.linkedin || '',
            layout: 'horizontal',
          },
        },
      ];
      setComponents(initialComponents);
    }
  }, [initialPage]);

  const addComponent = (type: string) => {
    const newComponent: PageComponent = {
      id: `${type}-${Date.now()}`,
      type: type as any,
      position: components.length,
      data: getDefaultData(type),
    };
    setComponents([...components, newComponent]);
  };

  const getDefaultData = (type: string) => {
    switch (type) {
      case 'hero':
        return {
          title: 'Welcome',
          subtitle: 'Your subtitle here',
          backgroundImage: '',
          textColor: '#ffffff',
        };
      case 'text':
        return {
          content: 'Your text content here',
          fontSize: '16px',
          textAlign: 'center',
        };
      case 'contact':
        return {
          email: '',
          phone: '',
          website: '',
          showForm: false,
        };
      case 'social':
        return {
          facebook: '',
          instagram: '',
          linkedin: '',
          layout: 'horizontal',
        };
      case 'image':
        return {
          src: '',
          alt: 'Image',
          caption: '',
          width: '100%',
        };
      case 'button':
        return {
          text: 'Click Me',
          url: '',
          style: 'primary',
          size: 'medium',
        };
      case 'divider':
        return {
          style: 'line',
          color: '#cccccc',
          thickness: '1px',
        };
      default:
        return {};
    }
  };

  const updateComponent = (id: string, data: Record<string, unknown>) => {
    setComponents(
      components.map(comp =>
        comp.id === id ? { ...comp, data: { ...comp.data, ...data } } : comp
      )
    );
  };

  const deleteComponent = (id: string) => {
    setComponents(components.filter(comp => comp.id !== id));
    if (selectedComponent === id) {
      setSelectedComponent(null);
    }
  };

  const moveComponent = (fromIndex: number, toIndex: number) => {
    const newComponents = [...components];
    const [movedComponent] = newComponents.splice(fromIndex, 1);
    newComponents.splice(toIndex, 0, movedComponent);

    // Update positions
    const updatedComponents = newComponents.map((comp, index) => ({
      ...comp,
      position: index,
    }));

    setComponents(updatedComponents);
  };

  const handleDragStart = (e: React.DragEvent, componentId: string) => {
    setDraggedComponent(componentId);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent, targetIndex: number) => {
    e.preventDefault();
    if (!draggedComponent) return;

    const draggedIndex = components.findIndex(
      comp => comp.id === draggedComponent
    );
    if (draggedIndex !== -1 && draggedIndex !== targetIndex) {
      moveComponent(draggedIndex, targetIndex);
    }
    setDraggedComponent(null);
  };

  const savePage = async () => {
    try {
      setLoading(true);
      const pageContent = {
        ...initialPage?.content,
        components: components,
      };

      const response = await fetch(`/api/landing-pages/${initialPage?.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: pageContent,
          name: pageContent.name || 'Updated Landing Page',
        }),
      });

      if (response.ok) {
        alert('Page saved successfully!');
      } else {
        alert('Failed to save page');
      }
    } catch (error) {
      console.error('Error saving page:', error);
      alert('Error saving page');
    } finally {
      setLoading(false);
    }
  };

  const renderComponent = (component: PageComponent) => {
    const isSelected = selectedComponent === component.id;

    switch (component.type) {
      case 'hero':
        return (
          <div
            key={component.id}
            className={`relative p-8 text-center ${isSelected ? 'ring-2 ring-blue-500' : ''}`}
            style={{
              backgroundColor: component.data.backgroundImage
                ? 'transparent'
                : '#1a1a1a',
            }}
            onClick={() => setSelectedComponent(component.id)}
            draggable
            onDragStart={e => handleDragStart(e, component.id)}
            onDragOver={handleDragOver}
            onDrop={e => handleDrop(e, component.position)}
          >
            {component.data.backgroundImage && (
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${component.data.backgroundImage})`,
                }}
              />
            )}
            <div className="relative z-10">
              <h1
                className="mb-4 text-4xl font-bold"
                style={{ color: component.data.textColor }}
              >
                {component.data.title}
              </h1>
              <p
                className="text-xl"
                style={{ color: component.data.textColor }}
              >
                {component.data.subtitle}
              </p>
            </div>
            {isSelected && (
              <div className="absolute top-2 right-2 flex gap-2">
                <button
                  onClick={e => {
                    e.stopPropagation();
                    deleteComponent(component.id);
                  }}
                  className="rounded bg-red-600 px-2 py-1 text-xs text-white"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        );

      case 'text':
        return (
          <div
            key={component.id}
            className={`p-6 ${isSelected ? 'ring-2 ring-blue-500' : ''}`}
            onClick={() => setSelectedComponent(component.id)}
            draggable
            onDragStart={e => handleDragStart(e, component.id)}
            onDragOver={handleDragOver}
            onDrop={e => handleDrop(e, component.position)}
          >
            <p
              style={{
                fontSize: component.data.fontSize,
                textAlign: component.data.textAlign,
              }}
            >
              {component.data.content}
            </p>
            {isSelected && (
              <div className="absolute top-2 right-2 flex gap-2">
                <button
                  onClick={e => {
                    e.stopPropagation();
                    deleteComponent(component.id);
                  }}
                  className="rounded bg-red-600 px-2 py-1 text-xs text-white"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        );

      case 'contact':
        return (
          <div
            key={component.id}
            className={`p-6 ${isSelected ? 'ring-2 ring-blue-500' : ''}`}
            onClick={() => setSelectedComponent(component.id)}
            draggable
            onDragStart={e => handleDragStart(e, component.id)}
            onDragOver={handleDragOver}
            onDrop={e => handleDrop(e, component.position)}
          >
            <h3 className="mb-4 text-xl font-semibold text-white">
              Contact Information
            </h3>
            <div className="space-y-2">
              {component.data.email && (
                <p className="text-white/70">📧 {component.data.email}</p>
              )}
              {component.data.phone && (
                <p className="text-white/70">📞 {component.data.phone}</p>
              )}
              {component.data.website && (
                <p className="text-white/70">🌐 {component.data.website}</p>
              )}
            </div>
            {isSelected && (
              <div className="absolute top-2 right-2 flex gap-2">
                <button
                  onClick={e => {
                    e.stopPropagation();
                    deleteComponent(component.id);
                  }}
                  className="rounded bg-red-600 px-2 py-1 text-xs text-white"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        );

      case 'social':
        return (
          <div
            key={component.id}
            className={`p-6 ${isSelected ? 'ring-2 ring-blue-500' : ''}`}
            onClick={() => setSelectedComponent(component.id)}
            draggable
            onDragStart={e => handleDragStart(e, component.id)}
            onDragOver={handleDragOver}
            onDrop={e => handleDrop(e, component.position)}
          >
            <div
              className={`flex ${component.data.layout === 'vertical' ? 'flex-col' : 'flex-row'} gap-4`}
            >
              {component.data.facebook && (
                <a
                  href={component.data.facebook}
                  className="text-blue-400 hover:text-blue-300"
                >
                  Facebook
                </a>
              )}
              {component.data.instagram && (
                <a
                  href={component.data.instagram}
                  className="text-pink-400 hover:text-pink-300"
                >
                  Instagram
                </a>
              )}
              {component.data.linkedin && (
                <a
                  href={component.data.linkedin}
                  className="text-blue-600 hover:text-blue-500"
                >
                  LinkedIn
                </a>
              )}
            </div>
            {isSelected && (
              <div className="absolute top-2 right-2 flex gap-2">
                <button
                  onClick={e => {
                    e.stopPropagation();
                    deleteComponent(component.id);
                  }}
                  className="rounded bg-red-600 px-2 py-1 text-xs text-white"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        );

      case 'button':
        return (
          <div
            key={component.id}
            className={`p-6 text-center ${isSelected ? 'ring-2 ring-blue-500' : ''}`}
            onClick={() => setSelectedComponent(component.id)}
            draggable
            onDragStart={e => handleDragStart(e, component.id)}
            onDragOver={handleDragOver}
            onDrop={e => handleDrop(e, component.position)}
          >
            <button
              className={`rounded-lg px-6 py-3 font-medium ${
                component.data.style === 'primary'
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-600 text-white hover:bg-gray-700'
              }`}
            >
              {component.data.text}
            </button>
            {isSelected && (
              <div className="absolute top-2 right-2 flex gap-2">
                <button
                  onClick={e => {
                    e.stopPropagation();
                    deleteComponent(component.id);
                  }}
                  className="rounded bg-red-600 px-2 py-1 text-xs text-white"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        );

      case 'divider':
        return (
          <div
            key={component.id}
            className={`p-4 ${isSelected ? 'ring-2 ring-blue-500' : ''}`}
            onClick={() => setSelectedComponent(component.id)}
            draggable
            onDragStart={e => handleDragStart(e, component.id)}
            onDragOver={handleDragOver}
            onDrop={e => handleDrop(e, component.position)}
          >
            <hr
              style={{
                borderColor: component.data.color,
                borderWidth: component.data.thickness,
              }}
            />
            {isSelected && (
              <div className="absolute top-2 right-2 flex gap-2">
                <button
                  onClick={e => {
                    e.stopPropagation();
                    deleteComponent(component.id);
                  }}
                  className="rounded bg-red-600 px-2 py-1 text-xs text-white"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  const renderComponentEditor = () => {
    const component = components.find(comp => comp.id === selectedComponent);
    if (!component) return null;

    return (
      <div className="rounded-lg bg-gray-900 p-4">
        <h3 className="mb-4 font-semibold text-white">
          Edit {componentTemplates.find(t => t.type === component.type)?.name}
        </h3>

        {component.type === 'hero' && (
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm text-white/70">Title</label>
              <input
                type="text"
                value={component.data.title}
                onChange={e =>
                  updateComponent(component.id, { title: e.target.value })
                }
                className="w-full rounded border border-gray-600 bg-gray-800 p-2 text-white"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/70">
                Subtitle
              </label>
              <input
                type="text"
                value={component.data.subtitle}
                onChange={e =>
                  updateComponent(component.id, { subtitle: e.target.value })
                }
                className="w-full rounded border border-gray-600 bg-gray-800 p-2 text-white"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/70">
                Text Color
              </label>
              <input
                type="color"
                value={component.data.textColor}
                onChange={e =>
                  updateComponent(component.id, { textColor: e.target.value })
                }
                className="w-full rounded border border-gray-600 bg-gray-800 p-2 text-white"
              />
            </div>
          </div>
        )}

        {component.type === 'text' && (
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm text-white/70">
                Content
              </label>
              <textarea
                value={component.data.content}
                onChange={e =>
                  updateComponent(component.id, { content: e.target.value })
                }
                className="h-24 w-full rounded border border-gray-600 bg-gray-800 p-2 text-white"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/70">
                Font Size
              </label>
              <select
                value={component.data.fontSize}
                onChange={e =>
                  updateComponent(component.id, { fontSize: e.target.value })
                }
                className="w-full rounded border border-gray-600 bg-gray-800 p-2 text-white"
              >
                <option value="12px">Small</option>
                <option value="16px">Medium</option>
                <option value="20px">Large</option>
                <option value="24px">Extra Large</option>
              </select>
            </div>
          </div>
        )}

        {component.type === 'contact' && (
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm text-white/70">Email</label>
              <input
                type="email"
                value={component.data.email}
                onChange={e =>
                  updateComponent(component.id, { email: e.target.value })
                }
                className="w-full rounded border border-gray-600 bg-gray-800 p-2 text-white"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/70">Phone</label>
              <input
                type="tel"
                value={component.data.phone}
                onChange={e =>
                  updateComponent(component.id, { phone: e.target.value })
                }
                className="w-full rounded border border-gray-600 bg-gray-800 p-2 text-white"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/70">
                Website
              </label>
              <input
                type="url"
                value={component.data.website}
                onChange={e =>
                  updateComponent(component.id, { website: e.target.value })
                }
                className="w-full rounded border border-gray-600 bg-gray-800 p-2 text-white"
              />
            </div>
          </div>
        )}

        {component.type === 'social' && (
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm text-white/70">
                Facebook URL
              </label>
              <input
                type="url"
                value={component.data.facebook}
                onChange={e =>
                  updateComponent(component.id, { facebook: e.target.value })
                }
                className="w-full rounded border border-gray-600 bg-gray-800 p-2 text-white"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/70">
                Instagram URL
              </label>
              <input
                type="url"
                value={component.data.instagram}
                onChange={e =>
                  updateComponent(component.id, { instagram: e.target.value })
                }
                className="w-full rounded border border-gray-600 bg-gray-800 p-2 text-white"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/70">
                LinkedIn URL
              </label>
              <input
                type="url"
                value={component.data.linkedin}
                onChange={e =>
                  updateComponent(component.id, { linkedin: e.target.value })
                }
                className="w-full rounded border border-gray-600 bg-gray-800 p-2 text-white"
              />
            </div>
          </div>
        )}

        {component.type === 'button' && (
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm text-white/70">
                Button Text
              </label>
              <input
                type="text"
                value={component.data.text}
                onChange={e =>
                  updateComponent(component.id, { text: e.target.value })
                }
                className="w-full rounded border border-gray-600 bg-gray-800 p-2 text-white"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/70">URL</label>
              <input
                type="url"
                value={component.data.url}
                onChange={e =>
                  updateComponent(component.id, { url: e.target.value })
                }
                className="w-full rounded border border-gray-600 bg-gray-800 p-2 text-white"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/70">Style</label>
              <select
                value={component.data.style}
                onChange={e =>
                  updateComponent(component.id, { style: e.target.value })
                }
                className="w-full rounded border border-gray-600 bg-gray-800 p-2 text-white"
              >
                <option value="primary">Primary</option>
                <option value="secondary">Secondary</option>
              </select>
            </div>
          </div>
        )}
      </div>
    );
  };

  if (isPreviewMode) {
    return (
      <div className="min-h-screen bg-white">
        <div className="flex items-center justify-between bg-gray-800 p-4">
          <h1 className="font-semibold text-white">Preview Mode</h1>
          <button
            onClick={() => setIsPreviewMode(false)}
            className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Exit Preview
          </button>
        </div>
        <div className="mx-auto max-w-4xl">
          {components
            .sort((a, b) => a.position - b.position)
            .map(renderComponent)}
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-black">
      {/* Component Library */}
      <div className="w-80 overflow-y-auto bg-gray-900 p-4">
        <h2 className="mb-4 font-semibold text-white">Components</h2>
        <div className="space-y-2">
          {componentTemplates.map(template => (
            <button
              key={template.type}
              onClick={() => addComponent(template.type)}
              className="w-full rounded-lg bg-gray-800 p-3 text-left text-white hover:bg-gray-700"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{template.icon}</span>
                <div>
                  <div className="font-medium">{template.name}</div>
                  <div className="text-sm text-gray-400">
                    {template.description}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Builder Area */}
      <div className="flex flex-1 flex-col">
        {/* Toolbar */}
        <div className="flex items-center justify-between bg-gray-800 p-4">
          <h1 className="font-semibold text-white">Landing Page Builder</h1>
          <div className="flex gap-2">
            <button
              onClick={() => setIsPreviewMode(true)}
              className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
            >
              Preview
            </button>
            <button
              onClick={savePage}
              disabled={loading}
              className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? 'Saving...' : 'Save'}
            </button>
          </div>
        </div>

        {/* Canvas */}
        <div className="flex-1 overflow-y-auto bg-gray-100">
          <div className="mx-auto min-h-full max-w-4xl bg-white">
            {components.length === 0 ? (
              <div className="flex h-64 items-center justify-center text-gray-500">
                <div className="text-center">
                  <p className="mb-2 text-lg">No components yet</p>
                  <p className="text-sm">
                    Add components from the sidebar to get started
                  </p>
                </div>
              </div>
            ) : (
              components
                .sort((a, b) => a.position - b.position)
                .map(renderComponent)
            )}
          </div>
        </div>
      </div>

      {/* Component Editor */}
      <div className="w-80 overflow-y-auto bg-gray-900 p-4">
        {selectedComponent ? (
          renderComponentEditor()
        ) : (
          <div className="text-center text-gray-400">
            <p>Select a component to edit its properties</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DragDropBuilder;
