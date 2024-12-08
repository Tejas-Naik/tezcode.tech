import { Element, Link as LinkScroll } from "react-scroll";
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInVariants, staggerChildrenVariants } from '../hooks/useAnimations';

const Hero = () => {
  const [ref, isInView] = useScrollAnimation();
  
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDU5LCAxMzAsIDI0NiwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      </div>

      <Element name="hero">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerChildrenVariants}
          className="container relative"
        >
          <motion.div
            variants={fadeInVariants}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div
              variants={fadeInVariants}
              className="relative animate-fade-in-up"
            >
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-purple-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute left-1/2 -top-4 w-24 h-24 bg-pink-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

              <motion.h1 
                variants={fadeInVariants}
                className="relative text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              >
                Transform Your Future with{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  TezCode.Tech
                </span>
              </motion.h1>
              <motion.p
                variants={fadeInVariants}
                className="text-xl text-gray-600 mb-8"
              >
                Master modern web development through expert-led live classes, hands-on projects, and personalized mentoring. Start your coding journey today!
              </motion.p>
              <motion.div
                variants={fadeInVariants}
                className="flex flex-wrap gap-4"
              >
                <LinkScroll
                  to="courses"
                  className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
                  smooth={true}
                  duration={500}
                >
                  Explore Courses
                </LinkScroll>
                <LinkScroll
                  to="curriculum"
                  className="px-8 py-3 rounded-full border-2 border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transform hover:scale-105 transition-all duration-300"
                  smooth={true}
                  duration={500}
                >
                  View Curriculum
                </LinkScroll>
              </motion.div>

              <motion.div
                variants={fadeInVariants}
                className="mt-12 flex items-center gap-8"
              >
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">500+</h4>
                  <p className="text-gray-600">Students Trained</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">95%</h4>
                  <p className="text-gray-600">Success Rate</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">24/7</h4>
                  <p className="text-gray-600">Support</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeInVariants}
              className="relative lg:block animate-fade-in"
            >
              <div className="relative z-10 bg-white p-8 rounded-2xl shadow-xl">
                <img
                  src="/hero-image.jpg"
                  alt="Students learning to code at TezCode.Tech"
                  className="rounded-lg w-full"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </Element>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute bottom-0 left-0 w-full"
      >
        {/* Add your content here */}
      </motion.div>
    </section>
  );
};

export default Hero;
