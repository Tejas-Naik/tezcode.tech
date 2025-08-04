import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Faisal Alhomsi",
    role: "High School Student",
    quote:
      "Mr. Tejas Naik is hands down the best coding teacher! His lessons are super engaging, and he always takes the time to answer every question clearly. Learning Python with him is not just easy — it's actually fun! He's way better than any other coding teacher I've had. I built a lot of projects while I was going through the course which helped me a lot in my coding journey",
    course: "100DaysOfCode",
    rating: 5,
    metrics: [
      { label: "Coding Expertise", before: "Beginner", after: "Advanced" },
      { label: "Projects Built", value: "23" },
    ],
  },
  {
    name: "Adrian Rodriguez",
    role: "Computer Science Student, Toronto University",
    quote:
      "TezCode.tech's 100 Days of Python bootcamp was a game-changer for my academic journey. The structured curriculum and hands-on projects not only enhanced my coding skills but also significantly improved my college performance. The practical approach to learning made complex concepts easy to understand and implement. This bootcamp is an absolute must for anyone serious about mastering Python!",
    course: "100 Days of Python",
    rating: 5,
    metrics: [
      { label: "College GPA", before: "2.8", after: "3.7" },
      { label: "Projects Completed", value: "12" },
    ],
  },
  {
    name: "Abhishek Nasalapure",
    role: "College Student, Jain College",
    quote:
      "The 100 Days of Code bootcamp at TezCode.tech exceeded all my expectations! The curriculum is brilliantly structured, making complex programming concepts accessible and engaging. What impressed me most was how the course seamlessly integrated with my college syllabus, making my academic journey smoother. The daily coding challenges kept me motivated, and the instructor's teaching style made learning fun and effective. My problem-solving skills have improved dramatically, and I'm now confident in tackling any programming challenge!",
    course: "100 Days of Code",
    rating: 5,
    metrics: [
      { label: "College CGPA", before: "7.1", after: "9.2" },
      { label: "Projects Completed", value: "15" },
    ],
  },
  {
    name: "Advika Gurav",
    role: "College Student, VTU",
    quote:
      "The Web Development Bootcamp at TezCode.tech was an incredible hands-on experience! From HTML and CSS fundamentals to building complete websites, every lesson was practical and engaging. What sets this course apart is how it condenses months of learning into a focused, efficient program without compromising on quality. The instructor's teaching style made front-end development concepts crystal clear, and the project-based approach gave me real-world experience. This bootcamp is perfect for anyone looking to fast-track their web development journey!",
    course: "Web Development Bootcamp",
    rating: 5,
    metrics: [
      { label: "College SGPA", before: "7.5", after: "9.4" },
      { label: "Projects", value: "10+" },
    ],
  },
  {
    name: "Leen Mohannad",
    role: "Software Engineering Student",
    quote:
      "TezCode.tech's Python course is a perfect blend of professional expertise and engaging teaching methods. The instructor's ability to break down complex concepts with humor and clarity makes learning programming enjoyable and effective. The interactive sessions and real-time problem-solving approach have significantly enhanced my understanding of Python. It's rare to find a course that's both educational and entertaining!",
    course: "Python Course",
    rating: 5,
    metrics: [
      { label: "Coding Confidence", before: "Low", after: "High" },
      { label: "Projects Built", value: "8" },
    ],
  },
  {
    name: "Ali Ijlal Amin",
    role: "Computer Science Student",
    quote:
      "TezCode.tech's instructor is absolutely phenomenal! Their teaching style is next-level - they make complex programming concepts feel like a breeze. From Python to Java, every session is packed with valuable insights and practical knowledge. The way they explain concepts and provide immediate feedback has transformed my coding journey. I'm now tackling programming challenges with confidence, and it's all thanks to this incredible learning experience!",
    course: "Python Course",
    rating: 5,
    metrics: [
      { label: "Programming Skills", before: "Beginner", after: "Advanced" },
      { label: "Projects Completed", value: "12" },
    ],
  },
  {
    name: "Afsa Amity",
    role: "Computer Science Student",
    quote:
      "The Python course at TezCode.tech is a perfect blend of professional expertise and engaging teaching methods. The instructor's ability to explain complex concepts with clarity and humor makes learning programming enjoyable and effective. The interactive sessions and hands-on projects have significantly enhanced my understanding of Python. It's rare to find a course that's both educational and entertaining!",
    course: "Python Course",
    rating: 5,
    metrics: [
      { label: "Coding Skills", before: "Basic", after: "Intermediate" },
      { label: "Projects Built", value: "6" },
    ],
  },
  {
    name: "Aaron",
    role: "Computer Science Student",
    quote:
      "TezCode.tech's interactive learning approach has completely transformed my programming journey. The instructor's engaging teaching style and real-world project focus make every lesson valuable and practical. The course structure is perfect for both beginners and those looking to enhance their skills. I've gained not just theoretical knowledge but also the confidence to build real applications!",
    course: "Python Course",
    rating: 5,
    metrics: [
      { label: "Programming Confidence", before: "Low", after: "High" },
      { label: "Projects Completed", value: "7" },
    ],
  },
  {
    name: "Amairaa Singh",
    role: "Computer Science Student",
    quote:
      "TezCode.tech's instructor has an incredible talent for making programming accessible and fun! Their teaching style combines technical expertise with engaging humor, making complex concepts easy to understand. The hands-on approach and interactive sessions have significantly improved my coding skills. This course has made programming enjoyable and has given me the confidence to tackle any coding challenge!",
    course: "Python Course",
    rating: 5,
    metrics: [
      { label: "Coding Proficiency", before: "Novice", after: "Skilled" },
      { label: "Projects Built", value: "9" },
    ],
  },
  {
    name: "Khalid Alrefai",
    role: "Software Engineering Student",
    quote:
      "The Python course at TezCode.tech is a perfect blend of professional instruction and engaging learning methods. The instructor's clear explanations and practical approach make programming concepts easy to grasp. The interactive sessions and real-world projects have significantly enhanced my coding skills. This course has made learning programming both enjoyable and effective!",
    course: "Python Course",
    rating: 5,
    metrics: [
      { label: "Programming Skills", before: "Basic", after: "Advanced" },
      { label: "Projects Completed", value: "8" },
    ],
  },
  {
    name: "Youssef Abdelmaksoud",
    role: "Computer Science Student",
    quote:
      "TezCode.tech's Python course has been an incredible learning experience! The instructor's teaching style is both professional and engaging, making complex programming concepts easy to understand. The practical approach and hands-on projects have significantly improved my coding skills. This course has transformed my programming journey and given me the confidence to tackle real-world projects!",
    course: "Python Course",
    rating: 5,
    metrics: [
      { label: "Coding Expertise", before: "Beginner", after: "Intermediate" },
      { label: "Projects Built", value: "7" },
    ],
  },
];

const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-500 ${
        isActive
          ? "opacity-100 transform scale-100"
          : "opacity-0 absolute top-0 left-0 transform scale-95 pointer-events-none"
      }`}
    >
      <div className="p-6 md:p-8">
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center border-2 border-blue-100">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div className="ml-4">
            <h4 className="text-xl font-bold text-gray-900">
              {testimonial.name}
            </h4>
            <p className="text-gray-600">{testimonial.role}</p>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex mb-2">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
          </div>
          <div className="text-blue-600 text-sm font-medium mb-4">
            Completed: {testimonial.course}
          </div>
        </div>

        <blockquote className="italic text-gray-700 mb-6 relative">
          <svg
            className="absolute top-0 left-0 w-8 h-8 text-blue-100 -mt-3 -ml-3 opacity-50"
            fill="currentColor"
            viewBox="0 0 32 32"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <p className="ml-6">{testimonial.quote}</p>
        </blockquote>

        <div className="grid grid-cols-2 gap-4">
          {testimonial.metrics.map((metric, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
              <p className="text-gray-500 text-sm mb-1">{metric.label}</p>
              {metric.before ? (
                <div className="flex items-center justify-center gap-2">
                  <span className="text-red-500 line-through text-sm">
                    {metric.before}
                  </span>
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                  <span className="text-green-600 font-bold">
                    {metric.after}
                  </span>
                </div>
              ) : (
                <p className="text-blue-600 font-bold">{metric.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 8000); // Change testimonial every 8 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    // Removed <Element name="testimonials"> wrapper
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      {" "}
      {/* Added id="testimonials" */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            From Failing to Acing Python
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real students who went from struggling with Python assignments to 
            acing their programming courses. See their grade improvements below.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative min-h-[400px]">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              isActive={index === activeIndex}
            />
          ))}

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex
                    ? "bg-blue-600 w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-800 font-medium mb-8 max-w-2xl mx-auto">
            Join hundreds of students who have already transformed their careers
            with TezCode's live interactive courses
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
          >
            Start Your Journey
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
    // Removed </Element> wrapper
  );
};

export default Testimonials;
