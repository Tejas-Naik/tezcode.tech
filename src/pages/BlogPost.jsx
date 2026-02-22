import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import { ArrowLeftIcon, CalendarIcon, ClockIcon, UserIcon } from "@heroicons/react/24/outline";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        // Query the post by its uniquely generated slug
        const q = query(
          collection(db, "posts"),
          where("slug", "==", slug),
          where("published", "==", true)
        );
        
        const querySnapshot = await getDocs(q);
        
        if (querySnapshot.empty) {
          setError("Post not found.");
          setLoading(false);
          return;
        }

        // Get the first matched document
        const doc = querySnapshot.docs[0];
        setPost({ id: doc.id, ...doc.data() });
      } catch (err) {
        console.error("Error fetching blog post:", err);
        setError("Failed to load the article.");
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="w-12 h-12 border-4 border-neon-blue border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="text-center py-20 max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-red-500 mb-6 font-heading">Oops!</h2>
        <p className="text-xl text-gray-400 mb-8">{error || "This article doesn't exist or has been removed."}</p>
        <button 
          onClick={() => navigate('/blog')}
          className="inline-flex items-center gap-2 bg-bg-800 hover:bg-bg-700 text-white px-6 py-3 rounded-xl border border-white/10 transition-colors"
        >
          <ArrowLeftIcon className="w-5 h-5" />
          Back to Blog
        </button>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto w-full pb-16">
      
      <Link 
        to="/blog" 
        className="inline-flex items-center gap-2 text-gray-400 hover:text-neon-blue transition-colors mb-8 group"
      >
        <ArrowLeftIcon className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to Blog
      </Link>

      {/* Header Info */}
      <header className="mb-12 border-b border-white/10 pb-8">
        <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6 leading-tight">
          {post.title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-6 text-gray-400 bg-bg-800/50 p-4 rounded-xl border border-white/5">
          <div className="flex items-center gap-2">
            <UserIcon className="w-5 h-5 text-neon-blue" />
            <span className="font-medium text-white">{post.author || 'Tejas Naik'}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <CalendarIcon className="w-5 h-5 text-neon-purple" />
            <span>
              {post.createdAt?.toDate().toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              }) || 'Recently Published'}
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <ClockIcon className="w-5 h-5 text-emerald-400" />
            <span>{post.readTime || '5 min'} read</span>
          </div>
        </div>
      </header>

      {/* Hero Image if available */}
      {post.imageUrl && (
        <div className="w-full h-[400px] mb-12 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative">
            <img 
              src={post.imageUrl} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-900 to-transparent opacity-60"></div>
        </div>
      )}

      {/* Content - safely render HTML/Markdown if stored that way in DB */}
      <div 
        className="prose prose-invert prose-lg max-w-none prose-headings:font-heading prose-a:text-neon-blue hover:prose-a:text-neon-purple prose-img:rounded-xl whitespace-pre-wrap"
        dangerouslySetInnerHTML={{ 
          // Replaces literal '\n' characters with actual newlines or linebreaks if stored as raw text in firebase
          __html: post.content ? post.content.replace(/\\n/g, '<br />') : '' 
        }}
      />
      
    </article>
  );
};

export default BlogPost;
