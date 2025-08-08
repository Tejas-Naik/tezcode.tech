import { useState, useEffect } from "react";

const EmailCapture = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [offerType, setOfferType] = useState("trial"); // "trial" or "cheatsheet"
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Show popup after 20 seconds or after 50% scroll, whichever comes first, and only once
  // This gives users more time to engage with content before showing the popup
  useEffect(() => {
    let timer;
    let shown = false;

    // Show popup and mark as shown
    const showPopup = () => {
      if (!shown) {
        setIsOpen(true);
        shown = true;
      }
    };

    // Show after 20 seconds - increased from 10 seconds to allow more content engagement
    timer = setTimeout(showPopup, 20000);

    // Show at 50% scroll - increased from 30% to ensure user has seen more value
    const handleScroll = () => {
      const scrollPercent =
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 50) {
        showPopup();
        window.removeEventListener('scroll', handleScroll);
        clearTimeout(timer);
      }
    };

    // Also show on exit intent (when mouse leaves the window toward the top)
    const handleMouseLeave = (e) => {
      // Only trigger when mouse leaves toward the top of the page
      if (e.clientY <= 0 && !shown) {
        showPopup();
        document.removeEventListener('mouseleave', handleMouseLeave);
        window.removeEventListener('scroll', handleScroll);
        clearTimeout(timer);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Clean up
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare the data
      const leadData = {
        name,
        email,
        phone,
        offerType,
        timestamp: new Date().toISOString(),
        source: 'website_popup'
      };

      // Send to Google Apps Script using form submission (avoids CORS)
      const APPS_SCRIPT_URL = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL;
      
      console.log('Apps Script URL:', APPS_SCRIPT_URL);
      console.log('Lead data being sent:', leadData);
      
      if (APPS_SCRIPT_URL) {
        try {
          // Create a hidden form to submit data (avoids CORS issues)
          const form = document.createElement('form');
          form.method = 'POST';
          form.action = APPS_SCRIPT_URL;
          form.target = '_blank'; // Open in new tab
          form.style.display = 'none';
          
          // Add form fields
          Object.keys(leadData).forEach(key => {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = key;
            input.value = leadData[key];
            form.appendChild(input);
          });
          
          // Submit the form
          document.body.appendChild(form);
          form.submit();
          document.body.removeChild(form);
          
          console.log('Form submitted to Google Apps Script');
        } catch (formError) {
          console.error('Form submission error:', formError);
        }
      } else {
        console.error('APPS_SCRIPT_URL is not defined');
      }

      // Also send email notification via EmailJS
      try {
        const emailjs = await import('@emailjs/browser');
        await emailjs.default.send(
          'service_970w8dw',
          'template_6ftmlmx',
          {
            to_name: 'Tejas',
            from_name: name,
            from_email: email,
            to_email: 'tejas@tezcode.info', // Add recipient email
            phone: phone || '',
            offer_type: offerType,
            message: `New lead from website popup: ${name} (${email}) wants ${offerType}`
          },
          'ntVP5BsBHxPI046Mj'
        );
        console.log('Email notification sent');
      } catch (emailError) {
        console.error('EmailJS error:', emailError);
      }

      setSubmitted(true);
      // Store in localStorage to prevent showing again
      localStorage.setItem('emailCaptured', 'true');
      
      // Redirect based on offer type
      if (offerType === 'trial') {
        window.open('https://calendar.app.google/7cqRrikvBjMEsY2s8', '_blank');
      } else {
        // Download cheat sheet
        window.open('/downloads/python-cheat-sheet.pdf', '_blank');
      }
    } catch (error) {
      console.error('Error submitting:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    localStorage.setItem('emailCaptured', 'true');
  };

  // Don't show if already captured
  if (localStorage.getItem('emailCaptured') === 'true') {
    return null;
  }

  return (
    <>
      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 relative animate-fade-in">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {!submitted ? (
              <>
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full inline-block mb-3">
                    {offerType === 'trial' ? 'LIMITED TIME OFFER' : 'FREE RESOURCE'}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {offerType === 'trial' ? 'Transform Your Python Skills in 7 Days' : 'Master Python With This Proven Cheat Sheet'}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {offerType === 'trial' 
                      ? 'Join 520+ students who went from struggling to succeeding. Our 7-day trial gives you full access to our proven system for just $49!'
                      : 'Download the exact cheat sheet that helped 94% of our students improve their grades in less than 2 weeks'
                    }
                  </p>
                  <div className="flex items-center justify-center mt-3 text-sm">
                    <div className="flex -space-x-2 mr-2">
                      {[1, 2, 3].map((i) => (
                        <img key={i} className="w-8 h-8 rounded-full border-2 border-white" src={`https://randomuser.me/api/portraits/men/${20 + i}.jpg`} alt="Student" />
                      ))}
                    </div>
                    <span className="text-gray-600"><span className="text-green-600 font-semibold">94%</span> success rate among students</span>
                  </div>
                </div>

                {/* Offer Toggle */}
                <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
                  <button
                    onClick={() => setOfferType('trial')}
                    className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                      offerType === 'trial' 
                        ? 'bg-white text-blue-600 shadow-sm' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    7-Day Trial ($49)
                  </button>
                  <button
                    onClick={() => setOfferType('cheatsheet')}
                    className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                      offerType === 'cheatsheet' 
                        ? 'bg-white text-blue-600 shadow-sm' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Free Cheat Sheet
                  </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 disabled:opacity-50 relative overflow-hidden group"
                  >
                    <span className="absolute right-0 top-0 bg-yellow-400 text-xs font-bold text-blue-900 px-2 py-1 rotate-12 transform translate-x-2 -translate-y-1">
                      {offerType === 'trial' ? '94% Success Rate' : 'Free Download'}
                    </span>
                    <span className="flex items-center justify-center">
                      {isSubmitting ? 'Processing...' : offerType === 'trial' ? 'Yes! Transform My Python Skills Now' : 'Download My Free Python Cheat Sheet'}
                      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </button>
                </form>

                {/* Trust Indicators */}
                <div className="mt-6">
                  <div className="flex flex-col space-y-3">
                    <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {offerType === 'trial' ? '7-Day Money Back Guarantee' : 'No Credit Card Required'}
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        No Spam, Ever
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center">
                        <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs text-gray-500">Join 520+ students who improved their grades with TezCode</span>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="flex items-center space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="text-xs font-medium text-gray-600">4.9/5 (127 reviews)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              /* Success State */
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600 mb-4">
                  {offerType === 'trial' 
                    ? 'Check your email for trial access details and calendar link!'
                    : 'Your Python cheat sheet is downloading now!'
                  }
                </p>
                <button
                  onClick={closeModal}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Continue Browsing
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default EmailCapture;