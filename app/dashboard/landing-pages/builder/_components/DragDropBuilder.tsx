'use client';

import { useState, useEffect } from 'react';

interface PageComponent {
  id: string;
  type: 'hero' | 'text' | 'contact' | 'social' | 'image' | 'button' | 'divider';
  data: {
    [key: string]: string | number | boolean | undefined;
  };
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

  // Page templates
  const pageTemplates = [
    {
      id: 'business-card',
      name: 'Business Card',
      description: 'Professional business card layout',
      icon: '💼',
      components: [
        {
          id: 'hero-1',
          type: 'hero',
          position: 0,
          data: {
            title: 'Your Name',
            subtitle: 'Professional Title',
            backgroundColor: '#1a1a1a',
            textColor: '#ffffff',
            titleFontSize: '4xl',
            subtitleFontSize: 'xl',
            padding: '48px',
          },
        },
        {
          id: 'contact-1',
          type: 'contact',
          position: 1,
          data: {
            email: 'your.email@example.com',
            phone: '(555) 123-4567',
            website: 'https://yourwebsite.com',
            showForm: false,
          },
        },
        {
          id: 'social-1',
          type: 'social',
          position: 2,
          data: {
            facebook: 'https://facebook.com/yourpage',
            instagram: 'https://instagram.com/yourpage',
            linkedin: 'https://linkedin.com/in/yourprofile',
            layout: 'horizontal',
          },
        },
      ],
    },
    {
      id: 'event-promotion',
      name: 'Event Promotion',
      description: 'Perfect for promoting events and gatherings',
      icon: '🎉',
      components: [
        {
          id: 'hero-1',
          type: 'hero',
          position: 0,
          data: {
            title: 'Join Our Event!',
            subtitle: 'An amazing experience awaits you',
            backgroundColor: '#4F46E5',
            textColor: '#ffffff',
            titleFontSize: '5xl',
            subtitleFontSize: '2xl',
            padding: '64px',
          },
        },
        {
          id: 'text-1',
          type: 'text',
          position: 1,
          data: {
            content: 'Don\'t miss out on this incredible opportunity to connect, learn, and have fun!',
            fontSize: '18px',
            textAlign: 'center',
            textColor: '#374151',
            backgroundColor: '#F9FAFB',
            padding: '32px',
          },
        },
        {
          id: 'button-1',
          type: 'button',
          position: 2,
          data: {
            text: 'Register Now',
            url: 'https://example.com/register',
            style: 'primary',
            size: 'large',
          },
        },
        {
          id: 'contact-1',
          type: 'contact',
          position: 3,
          data: {
            email: 'events@example.com',
            phone: '(555) 987-6543',
            website: 'https://example.com/events',
            showForm: false,
          },
        },
      ],
    },
    {
      id: 'restaurant-menu',
      name: 'Restaurant Menu',
      description: 'Showcase your restaurant and menu items',
      icon: '🍽️',
      components: [
        {
          id: 'hero-1',
          type: 'hero',
          position: 0,
          data: {
            title: 'Welcome to Our Restaurant',
            subtitle: 'Delicious food, great atmosphere',
            backgroundColor: '#DC2626',
            textColor: '#ffffff',
            titleFontSize: '4xl',
            subtitleFontSize: 'xl',
            padding: '48px',
          },
        },
        {
          id: 'image-1',
          type: 'image',
          position: 1,
          data: {
            src: '',
            alt: 'Restaurant Interior',
            caption: 'Our beautiful dining area',
            width: '100%',
          },
        },
        {
          id: 'text-1',
          type: 'text',
          position: 2,
          data: {
            content: 'Experience the finest cuisine in town. Our chefs use only the freshest ingredients to create memorable dining experiences.',
            fontSize: '16px',
            textAlign: 'center',
            textColor: '#374151',
            backgroundColor: '#FEF2F2',
            padding: '24px',
          },
        },
        {
          id: 'contact-1',
          type: 'contact',
          position: 3,
          data: {
            email: 'reservations@restaurant.com',
            phone: '(555) 123-4567',
            website: 'https://restaurant.com',
            showForm: false,
          },
        },
      ],
    },
    {
      id: 'portfolio-showcase',
      name: 'Portfolio Showcase',
      description: 'Perfect for showcasing your work and skills',
      icon: '🎨',
      components: [
        {
          id: 'hero-1',
          type: 'hero',
          position: 0,
          data: {
            title: 'Creative Portfolio',
            subtitle: 'Showcasing amazing work and talent',
            backgroundColor: '#7C3AED',
            textColor: '#ffffff',
            titleFontSize: '5xl',
            subtitleFontSize: 'xl',
            padding: '48px',
          },
        },
        {
          id: 'text-1',
          type: 'text',
          position: 1,
          data: {
            content: 'Welcome to my creative world. I specialize in bringing ideas to life through innovative design and thoughtful execution.',
            fontSize: '18px',
            textAlign: 'center',
            textColor: '#374151',
            backgroundColor: '#F3F4F6',
            padding: '32px',
          },
        },
        {
          id: 'image-1',
          type: 'image',
          position: 2,
          data: {
            src: '',
            alt: 'Portfolio Sample',
            caption: 'Featured Work',
            width: '75%',
          },
        },
        {
          id: 'button-1',
          type: 'button',
          position: 3,
          data: {
            text: 'View Full Portfolio',
            url: 'https://portfolio.com',
            style: 'primary',
            size: 'medium',
          },
        },
        {
          id: 'contact-1',
          type: 'contact',
          position: 4,
          data: {
            email: 'hello@portfolio.com',
            phone: '(555) 456-7890',
            website: 'https://portfolio.com',
            showForm: false,
          },
        },
      ],
    },
    {
      id: 'fitness-trainer',
      name: 'Fitness Trainer',
      description: 'Perfect for fitness professionals and gyms',
      icon: '💪',
      components: [
        {
          id: 'hero-1',
          type: 'hero',
          position: 0,
          data: {
            title: 'Transform Your Body',
            subtitle: 'Professional fitness training and guidance',
            backgroundColor: '#059669',
            textColor: '#ffffff',
            titleFontSize: '5xl',
            subtitleFontSize: 'xl',
            padding: '48px',
          },
        },
        {
          id: 'text-1',
          type: 'text',
          position: 1,
          data: {
            content: 'Ready to achieve your fitness goals? Let me help you build strength, endurance, and confidence through personalized training programs.',
            fontSize: '18px',
            textAlign: 'center',
            textColor: '#374151',
            backgroundColor: '#ECFDF5',
            padding: '32px',
          },
        },
        {
          id: 'button-1',
          type: 'button',
          position: 2,
          data: {
            text: 'Start Your Journey',
            url: 'https://fitness.com/book',
            style: 'primary',
            size: 'large',
          },
        },
        {
          id: 'contact-1',
          type: 'contact',
          position: 3,
          data: {
            email: 'trainer@fitness.com',
            phone: '(555) 789-0123',
            website: 'https://fitness.com',
            showForm: false,
          },
        },
        {
          id: 'social-1',
          type: 'social',
          position: 4,
          data: {
            facebook: 'https://facebook.com/fitness',
            instagram: 'https://instagram.com/fitness',
            linkedin: 'https://linkedin.com/in/trainer',
            layout: 'horizontal',
          },
        },
      ],
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
      type: type as string,
      position: components.length,
      data: getDefaultData(type),
    };
    setComponents([...components, newComponent]);
  };

  const getDefaultData = (type: string): { [key: string]: string | number | boolean | undefined } => {
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

  const updateComponent = (id: string, data: { [key: string]: string | number | boolean | undefined }) => {
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

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // For now, we'll use a simple base64 approach
    // In production, you'd want to upload to a cloud storage service
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (selectedComponent) {
        updateComponent(selectedComponent, { src: result });
      }
    };
    reader.readAsDataURL(file);
  };

  const loadTemplate = (templateId: string) => {
    const template = pageTemplates.find(t => t.id === templateId);
    if (template) {
      setComponents(template.components);
      setSelectedComponent(null);
    }
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
            className={`relative text-center ${isSelected ? 'ring-2 ring-blue-500' : ''}`}
            style={{
              backgroundColor: component.data.backgroundImage
                ? 'transparent'
                : component.data.backgroundColor || '#1a1a1a',
              padding: component.data.padding || '32px',
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
                className={`mb-4 font-bold text-${component.data.titleFontSize || '4xl'}`}
                style={{ color: component.data.textColor || '#ffffff' }}
              >
                {component.data.title}
              </h1>
              <p
                className={`text-${component.data.subtitleFontSize || 'xl'}`}
                style={{ color: component.data.textColor || '#ffffff' }}
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
            className={`${isSelected ? 'ring-2 ring-blue-500' : ''}`}
            style={{
              padding: component.data.padding || '16px',
              backgroundColor: component.data.backgroundColor || 'transparent',
            }}
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
                color: component.data.textColor || '#000000',
                margin: 0,
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

      case 'image':
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
            {component.data.src ? (
              <div className="space-y-2">
                <img
                  src={component.data.src}
                  alt={component.data.alt}
                  style={{ width: component.data.width }}
                  className="mx-auto rounded-lg"
                />
                {component.data.caption && (
                  <p className="text-sm text-gray-600">{component.data.caption}</p>
                )}
              </div>
            ) : (
              <div className="flex h-32 items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50">
                <div className="text-center">
                  <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="mt-2 text-sm text-gray-500">Click to upload image</p>
                </div>
              </div>
            )}
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
                borderColor: component.data.color as string || '#cccccc',
                borderWidth: component.data.thickness as string || '1px',
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
                value={component.data.title as string || ''}
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
                value={component.data.subtitle as string || ''}
                onChange={e =>
                  updateComponent(component.id, { subtitle: e.target.value })
                }
                className="w-full rounded border border-gray-600 bg-gray-800 p-2 text-white"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/70">
                Background Image URL
              </label>
              <input
                type="url"
                value={component.data.backgroundImage as string || ''}
                onChange={e =>
                  updateComponent(component.id, { backgroundImage: e.target.value })
                }
                placeholder="https://example.com/image.jpg"
                className="w-full rounded border border-gray-600 bg-gray-800 p-2 text-white"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/70">
                Background Color
              </label>
              <input
                type="color"
                value={(component.data.backgroundColor as string) || '#1a1a1a'}
                onChange={e =>
                  updateComponent(component.id, { backgroundColor: e.target.value })
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
                value={(component.data.textColor as string) || '#ffffff'}
                onChange={e =>
                  updateComponent(component.id, { textColor: e.target.value })
                }
                className="w-full rounded border border-gray-600 bg-gray-800 p-2 text-white"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/70">
                Title Font Size
              </label>
              <select
                value={(component.data.titleFontSize as string) || '4xl'}
                onChange={e =>
                  updateComponent(component.id, { titleFontSize: e.target.value })
                }
                className="w-full rounded border border-gray-600 bg-gray-800 p-2 text-white"
              >
                <option value="2xl">Small (2xl)</option>
                <option value="3xl">Medium (3xl)</option>
                <option value="4xl">Large (4xl)</option>
                <option value="5xl">Extra Large (5xl)</option>
                <option value="6xl">XXL (6xl)</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/70">
                Subtitle Font Size
              </label>
              <select
                value={(component.data.subtitleFontSize as string) || 'xl'}
                onChange={e =>
                  updateComponent(component.id, { subtitleFontSize: e.target.value })
                }
                className="w-full rounded border border-gray-600 bg-gray-800 p-2 text-white"
              >
                <option value="sm">Small (sm)</option>
                <option value="base">Medium (base)</option>
                <option value="lg">Large (lg)</option>
                <option value="xl">Extra Large (xl)</option>
                <option value="2xl">XXL (2xl)</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/70">
                Padding
              </label>
              <select
                value={(component.data.padding as string) || '32px'}
                onChange={e =>
                  updateComponent(component.id, { padding: e.target.value })
                }
                className="w-full rounded border border-gray-600 bg-gray-800 p-2 text-white"
              >
                <option value="16px">Small (16px)</option>
                <option value="24px">Medium (24px)</option>
                <option value="32px">Large (32px)</option>
                <option value="48px">Extra Large (48px)</option>
                <option value="64px">XXL (64px)</option>
                <option value="80px">XXXL (80px)</option>
              </select>
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
                value={component.data.content as string || ''}
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
                value={component.data.fontSize as string || '16px'}
                onChange={e =>
                  updateComponent(component.id, { fontSize: e.target.value })
                }
                className="w-full rounded border border-gray-600 bg-gray-800 p-2 text-white"
              >
                <option value="12px">Small (12px)</option>
                <option value="14px">Small+ (14px)</option>
                <option value="16px">Medium (16px)</option>
                <option value="18px">Medium+ (18px)</option>
                <option value="20px">Large (20px)</option>
                <option value="24px">Extra Large (24px)</option>
                <option value="28px">XXL (28px)</option>
                <option value="32px">XXXL (32px)</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/70">
                Text Alignment
              </label>
              <select
                value={component.data.textAlign as string || 'left'}
                onChange={e =>
                  updateComponent(component.id, { textAlign: e.target.value })
                }
                className="w-full rounded border border-gray-600 bg-gray-800 p-2 text-white"
              >
                <option value="left">Left</option>
                <option value="center">Center</option>
                <option value="right">Right</option>
                <option value="justify">Justify</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/70">
                Text Color
              </label>
              <input
                type="color"
                value={(component.data.textColor as string) || '#000000'}
                onChange={e =>
                  updateComponent(component.id, { textColor: e.target.value })
                }
                className="w-full rounded border border-gray-600 bg-gray-800 p-2 text-white"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/70">
                Background Color
              </label>
              <input
                type="color"
                value={(component.data.backgroundColor as string) || '#ffffff'}
                onChange={e =>
                  updateComponent(component.id, { backgroundColor: e.target.value })
                }
                className="w-full rounded border border-gray-600 bg-gray-800 p-2 text-white"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/70">
                Padding
              </label>
              <select
                value={(component.data.padding as string) || '16px'}
                onChange={e =>
                  updateComponent(component.id, { padding: e.target.value })
                }
                className="w-full rounded border border-gray-600 bg-gray-800 p-2 text-white"
              >
                <option value="8px">Small (8px)</option>
                <option value="16px">Medium (16px)</option>
                <option value="24px">Large (24px)</option>
                <option value="32px">Extra Large (32px)</option>
                <option value="48px">XXL (48px)</option>
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
                value={component.data.email as string || ''}
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
                value={component.data.phone as string || ''}
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
                value={component.data.website as string || ''}
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
                value={component.data.facebook as string || ''}
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
                value={component.data.instagram as string || ''}
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
                value={component.data.linkedin as string || ''}
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
                value={component.data.text as string || ''}
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
                value={component.data.url as string || ''}
                onChange={e =>
                  updateComponent(component.id, { url: e.target.value })
                }
                className="w-full rounded border border-gray-600 bg-gray-800 p-2 text-white"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/70">Style</label>
              <select
                value={component.data.style as string || 'primary'}
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

        {component.type === 'image' && (
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm text-white/70">
                Image Upload
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full rounded border border-gray-600 bg-gray-800 p-2 text-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-purple-600 file:text-white hover:file:bg-purple-700"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/70">
                Image URL (or paste URL)
              </label>
              <input
                type="url"
                value={component.data.src as string || ''}
                onChange={e =>
                  updateComponent(component.id, { src: e.target.value })
                }
                placeholder="https://example.com/image.jpg"
                className="w-full rounded border border-gray-600 bg-gray-800 p-2 text-white"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/70">
                Alt Text
              </label>
              <input
                type="text"
                value={component.data.alt as string || ''}
                onChange={e =>
                  updateComponent(component.id, { alt: e.target.value })
                }
                placeholder="Describe the image"
                className="w-full rounded border border-gray-600 bg-gray-800 p-2 text-white"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/70">
                Caption
              </label>
              <input
                type="text"
                value={component.data.caption as string || ''}
                onChange={e =>
                  updateComponent(component.id, { caption: e.target.value })
                }
                placeholder="Image caption (optional)"
                className="w-full rounded border border-gray-600 bg-gray-800 p-2 text-white"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/70">
                Width
              </label>
              <select
                value={component.data.width as string || '100%'}
                onChange={e =>
                  updateComponent(component.id, { width: e.target.value })
                }
                className="w-full rounded border border-gray-600 bg-gray-800 p-2 text-white"
              >
                <option value="25%">Small (25%)</option>
                <option value="50%">Medium (50%)</option>
                <option value="75%">Large (75%)</option>
                <option value="100%">Full Width (100%)</option>
              </select>
            </div>
          </div>
        )}

        {component.type === 'divider' && (
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm text-white/70">
                Divider Style
              </label>
              <select
                value={component.data.style as string || 'line'}
                onChange={e =>
                  updateComponent(component.id, { style: e.target.value })
                }
                className="w-full rounded border border-gray-600 bg-gray-800 p-2 text-white"
              >
                <option value="line">Line</option>
                <option value="dashed">Dashed</option>
                <option value="dotted">Dotted</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/70">
                Color
              </label>
              <input
                type="color"
                value={component.data.color as string || '#cccccc'}
                onChange={e =>
                  updateComponent(component.id, { color: e.target.value })
                }
                className="w-full rounded border border-gray-600 bg-gray-800 p-2 text-white"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/70">
                Thickness
              </label>
              <select
                value={component.data.thickness as string || '1px'}
                onChange={e =>
                  updateComponent(component.id, { thickness: e.target.value })
                }
                className="w-full rounded border border-gray-600 bg-gray-800 p-2 text-white"
              >
                <option value="1px">Thin (1px)</option>
                <option value="2px">Medium (2px)</option>
                <option value="4px">Thick (4px)</option>
                <option value="8px">Extra Thick (8px)</option>
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
        {/* Page Templates */}
        <div className="mb-6">
          <h2 className="mb-4 font-semibold text-white">Page Templates</h2>
          <div className="space-y-2">
            {pageTemplates.map(template => (
              <button
                key={template.id}
                onClick={() => loadTemplate(template.id)}
                className="w-full rounded-lg bg-purple-800 p-3 text-left text-white hover:bg-purple-700"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{template.icon}</span>
                  <div>
                    <div className="font-medium">{template.name}</div>
                    <div className="text-sm text-purple-200">
                      {template.description}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Component Templates */}
        <div>
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
