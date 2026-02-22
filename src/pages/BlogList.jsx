import { useState, useEffect } from "react";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { db } from "../config/firebase";
import { Link } from "react-router-dom";
import { CalendarIcon, ClockIcon } from "@heroicons/react/24/outline";

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        // Query only published posts, ordered by creation date descending
        const q = query(
          collection(db, "posts"),
          where("published", "==", true),
          orderBy("createdAt", "desc")
        );
        
        const querySnapshot = await getDocs(q);
        const fetchedPosts = [];
        querySnapshot.forEach((doc) => {
          fetchedPosts.push({ id: doc.id, ...doc.data() });
        });
        
        setPosts(fetchedPosts);
      } catch (err) {
        console.error("Error fetching blog posts:", err);
        setError("Failed to load blog posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="w-12 h-12 border-4 border-neon-blue border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-red-500 mb-4">Oops!</h2>
        <p className="text-gray-400">{error}</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-white">
          The <span className="text-neon-blue">TezCode</span> Blog
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Insights, tutorials, and success stories to supercharge your Python programming journey.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-20 bg-bg-800 rounded-2xl border border-white/5 shadow-[0_0_30px_rgba(59,130,246,0.1)]">
          <h2 className="text-2xl font-semibold mb-2 text-white">No posts yet!</h2>
          <p className="text-gray-400">Check back soon for our first article.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link 
              to={`/blog/${post.slug}`} 
              key={post.id}
              className="bg-bg-800 rounded-2xl overflow-hidden border border-white/5 hover:border-neon-blue/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.3)] flex flex-col"
            >
              {/* Image Placeholder or Actual Image */}
              <div className="h-48 w-full bg-bg-900 relative overflow-hidden">
                {post.imageUrl ? (
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-bg-800 to-bg-900 text-neon-blue font-heading text-2xl font-bold opacity-30">
                    TezCode
                  </div>
                )}
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-neon-blue transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-gray-400 line-clamp-3 mb-6 flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4" />
                    <span>
                      {post.createdAt?.toDate().toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      }) || 'Recent'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-4 h-4" />
                    <span>{post.readTime || '5 min'} read</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogList;
