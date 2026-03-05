import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Share2 } from 'lucide-react';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import { supabase } from '../services';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  content: string;
  image_url: string;
  published_date: string;
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('slug', slug)
          .maybeSingle();

        if (error) throw error;

        if (!data) {
          setError(true);
        } else {
          setPost(data);
        }
      } catch (err) {
        console.error('Error fetching blog post:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchPost();
  }, [slug]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <>
        <TopBar />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-gray-600 text-lg">Loading post...</p>
        </div>
        <Footer />
      </>
    );
  }

  if (error || !post) {
    return (
      <>
        <TopBar />
        <div className="min-h-screen flex flex-col items-center justify-center">
          <p className="text-gray-600 text-lg mb-6">Post not found.</p>
          <button
            onClick={() => navigate('/blog')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <TopBar />

      <article className="min-h-screen">
        <button
          onClick={() => navigate('/blog')}
          className="sticky top-20 left-6 z-40 inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm hover:bg-white text-emerald-600 hover:text-emerald-700 font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </button>

        {post.image_url && (
          <div className="relative h-96 overflow-hidden bg-gray-200">
            <img
              src={post.image_url}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        )}

        <div className="container mx-auto px-6 lg:px-12 py-16">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center gap-2 text-emerald-600 font-semibold mb-4">
                <Calendar className="w-4 h-4" />
                <time>{formatDate(post.published_date)}</time>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>

              <button
                onClick={() => {
                  const url = window.location.href;
                  if (navigator.share) {
                    navigator.share({
                      title: post.title,
                      url: url
                    });
                  } else {
                    navigator.clipboard.writeText(url);
                    alert('Link copied to clipboard!');
                  }
                }}
                className="inline-flex items-center gap-2 px-4 py-2 text-emerald-600 hover:text-emerald-700 font-semibold transition-colors"
              >
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-gray-50 rounded-2xl p-8">
                <div
                  className="text-gray-800 leading-relaxed space-y-4"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <button
                onClick={() => navigate('/blog')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to All Posts
              </button>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}
