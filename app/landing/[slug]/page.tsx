// import { notFound } from 'next/navigation';
import { supabaseAdmin } from '@/lib/supabase/client';

interface LandingPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function LandingPage({ params }: LandingPageProps) {
  const { slug } = await params;

  console.log('=== DYNAMIC ROUTE DEBUG ===');
  console.log('Fetching landing page for slug:', slug);
  console.log('Supabase client:', !!supabaseAdmin);

  try {
    // Fetch the landing page from database
    // Note: We need to handle the case where multiple organizations might have the same slug
    // For now, we'll get the most recently published one
    const { data: page, error } = await supabaseAdmin
      .from('landing_pages')
      .select('*')
      .eq('slug', slug)
      .eq('is_published', true)
      .order('updated_at', { ascending: false })
      .limit(1)
      .single();

    console.log('Page data:', page);
    console.log('Error:', error);

    if (error) {
      console.error('Database error:', error);
      return (
        <div className="flex min-h-screen items-center justify-center bg-black text-white">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-red-400">
              Database Error
            </h1>
            <p className="text-xl text-white/70">Error: {error.message}</p>
            <p className="mt-4 text-sm text-white/50">Slug: {slug}</p>
          </div>
        </div>
      );
    }

    if (!page) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-black text-white">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-yellow-400">
              Page Not Found
            </h1>
            <p className="text-xl text-white/70">
              No landing page found for: {slug}
            </p>
            <p className="mt-4 text-sm text-white/50">
              Check the admin panel to see available pages
            </p>
          </div>
        </div>
      );
    }

    // Update view count
    try {
      await supabaseAdmin
        .from('landing_pages')
        .update({
          view_count: (page.view_count || 0) + 1,
          updated_at: new Date().toISOString(),
        })
        .eq('id', page.id);
    } catch (trackingError) {
      console.log('Tracking error (non-critical):', trackingError);
    }

    // Render the actual landing page
    return (
      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <div className="relative flex h-screen items-center justify-center overflow-hidden">
          {/* Animated Background Rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            {Array.from({ length: 3 }, (_, i) => (
              <div
                key={i}
                className={`absolute rounded-full border border-purple-400/20 ${
                  i === 0
                    ? 'h-32 w-32 animate-pulse'
                    : i === 1
                      ? 'h-64 w-64 animate-pulse delay-75'
                      : 'h-96 w-96 animate-pulse delay-150'
                }`}
                style={{
                  boxShadow: `inset 0 0 ${(i + 1) * 20}px rgba(147, 51, 234, 0.1)`,
                  filter: 'blur(1px)',
                }}
              />
            ))}
          </div>

          {/* Hero Content */}
          <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            {/* Title */}
            <h1 className="mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl lg:text-6xl">
              {page.content?.title || page.title}
            </h1>

            {/* Subtitle */}
            {page.content?.subtitle && (
              <p className="mx-auto mb-8 max-w-2xl text-lg text-white/70 sm:text-xl">
                {page.content.subtitle}
              </p>
            )}

            {/* Description */}
            {page.content?.description && (
              <p className="mx-auto mb-8 max-w-3xl text-base text-white/60">
                {page.content.description}
              </p>
            )}

            {/* Contact Information */}
            {page.content?.contact && (
              <div className="mx-auto mb-8 max-w-2xl rounded-xl border border-gray-600/30 bg-gray-900/50 p-6">
                <h3 className="mb-4 text-lg font-semibold text-white">
                  Contact Information
                </h3>
                <div className="space-y-2 text-sm text-white/70">
                  {page.content.contact.email && (
                    <p>📧 {page.content.contact.email}</p>
                  )}
                  {page.content.contact.phone && (
                    <p>📞 {page.content.contact.phone}</p>
                  )}
                  {page.content.contact.website && (
                    <p>
                      🌐{' '}
                      <a
                        href={page.content.contact.website}
                        className="text-purple-300 hover:text-purple-200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {page.content.contact.website}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Social Media Links */}
            {page.content?.social && (
              <div className="flex justify-center gap-4">
                {page.content.social.facebook && (
                  <a
                    href={page.content.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-blue-400/30 bg-blue-600/20 px-4 py-2 text-blue-200 transition-colors duration-200 hover:bg-blue-600/30"
                  >
                    Facebook
                  </a>
                )}
                {page.content.social.instagram && (
                  <a
                    href={page.content.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-pink-400/30 bg-pink-600/20 px-4 py-2 text-pink-200 transition-colors duration-200 hover:bg-pink-600/30"
                  >
                    Instagram
                  </a>
                )}
                {page.content.social.linkedin && (
                  <a
                    href={page.content.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-blue-500/30 bg-blue-700/20 px-4 py-2 text-blue-300 transition-colors duration-200 hover:bg-blue-700/30"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-600/30 bg-gray-900/50 py-8">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-sm text-white/60">
              Powered by <span className="text-purple-300">Cosmic Portals</span>
            </p>
            <p className="mt-2 text-xs text-white/40">
              View Count: {page.view_count || 0} | Last Updated:{' '}
              {new Date(page.updated_at).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    );
  } catch (err) {
    console.error('Unexpected error:', err);
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-red-400">
            Unexpected Error
          </h1>
          <p className="text-xl text-white/70">Something went wrong</p>
          <p className="mt-4 text-sm text-white/50">Error: {String(err)}</p>
        </div>
      </div>
    );
  }
}
