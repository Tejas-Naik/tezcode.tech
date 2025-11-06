import Slider from "react-slick";
import { testimonials } from "../constants";
import { trackEvent } from "../../utils/analytics";

const Testimonials = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    arrows: false,
    appendDots: (dots) => (
      <div>
        <ul className="m-0 p-0 -bottom-8"> {dots} </ul>
      </div>
    ),
  };

  const handleVideoClick = () => {
    trackEvent("testimonial_play");
    // Add logic to open a video lightbox/modal here
    alert("Playing testimonial video!");
  };

  return (
    <section id="testimonials" className="py-20 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold">
            Students who fixed their grades in 7 days
          </h3>
          <p className="text-lg text-text-muted mt-2">
            Hear from students who turned things around.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left: Video Testimonial */}
          <div className="lg:col-span-1">
            <div className="relative rounded-xl overflow-hidden shadow-glow-blue p-1 bg-transparent">
              <img
                src="/images/testimonials/video-preview.jpg"
                alt="Student video testimonial preview"
                className="w-full rounded-lg"
              />
              <button
                id="playTestimonialVideo"
                onClick={handleVideoClick}
                className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <svg
                  className="w-8 h-8 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M5 3v18l15-9L5 3z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right: Carousel */}
          <div className="lg:col-span-2">
            <Slider {...sliderSettings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-2">
                  <div className="bg-card p-6 rounded-xl border border-[rgba(255,255,255,0.03)]">
                    <blockquote className="text-lg text-text-muted mb-4">
                      “{testimonial.quote}”
                    </blockquote>
                    <div className="flex items-center">
                      <img
                        className="w-10 h-10 rounded-full mr-4"
                        src={testimonial.image}
                        alt={testimonial.author}
                      />
                      <div>
                        <p className="font-semibold text-white">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-brand-500 font-medium">
                          {testimonial.metric}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="text-center mt-16">
          <a
            href="#pricing"
            className="inline-block px-6 py-3 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-semibold shadow hover:scale-[1.02] transition transform"
          >
            Start 7-Day Crash Course — $49
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
