import { Outlet } from "react-router-dom";
import Header from "../sections/Header";
import Footer from "../sections/Footer";

const BlogLayout = () => {
  return (
    <div className="relative bg-bg-900 min-h-screen flex flex-col pt-24 text-white">
      {/* 
        We use the existing global Header. 
        Note: If Header has fixed positioning, the pt-24 handles the spacing.
      */}
      <Header />
      
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 py-12">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogLayout;
