import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectDetails: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Integration point: backend or email service
  };

  return (
    <section className="min-h-screen py-20 px-4 md:px-8 bg-[#0f0b1d] text-white font-preahvihear">
      {/* Top Text */}
      <div className="text-center mt-10">
        <p className="text-purple-400 text-sm md:text-base">Get in Touch</p>
        <h1 className="text-white text-3xl md:text-5xl pt-4 font-semibold leading-tight">
          Let's Build Something Amazing <br className="hidden md:block" /> Together
        </h1>
        <p className="text-gray-400 pt-6 md:pt-12 text-sm md:text-base">
          Whether you have a question about our services, pricing, or just want to say hello, we're here to help.
        </p>
      </div>

      {/* Contact Info Cards */}
      <section className="py-12 border-y border-gray-800 mt-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Info Card Component */}
            {[
              {
                icon: (
                  <circle cx="12" cy="12" r="10" />,
                  <polyline points="12 6 12 12 16 14" />
                ),
                label: 'Working Hours',
                value: 'Mon - Fri: 9:00 - 18:00',
                svg: (
                  <>
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </>
                ),
              },
              {
                label: 'Phone',
                value: '+91 (912) 170-3846',
                svg: (
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                ),
              },
              {
                label: 'Email',
                value: 'admin@swynix.com',
                svg: (
                  <>
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </>
                ),
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-400/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-purple-400"
                  >
                    {item.svg}
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium">{item.label}</h3>
                  <p className="text-gray-400 text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto mt-20 px-4 md:px-0">
        <div className="mb-12 text-left">
          <p className="text-gray-400 mb-2 text-sm md:text-base">Have an idea?</p>
          <h2 className="text-4xl md:text-6xl font-bold text-purple-400 leading-tight">
            Ready to bring<br />your idea to life?
          </h2>
        </div>

        <form className="space-y-10" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full bg-transparent border-b-2 border-gray-700 py-3 text-white focus:outline-none focus:border-purple-400 transition-colors"
            />
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="w-full bg-transparent border-b-2 border-gray-700 py-3 text-white focus:outline-none focus:border-purple-400 transition-colors"
            />
          </div>

          <div className="relative">
            <textarea
              name="projectDetails"
              value={formData.projectDetails}
              onChange={handleChange}
              rows="4"
              placeholder="Tell us about your project"
              required
              className="w-full bg-transparent border-b-2 border-gray-700 py-3 text-white focus:outline-none focus:border-purple-400 transition-colors resize-none"
            />
            <div className="absolute right-0 bottom-4 flex items-center gap-2">
              <button type="button" className="hover:text-purple-400 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-paperclip w-5 h-5"
                >
                  <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                </svg>
              </button>
              <span className="text-sm">0/1000</span>
            </div>
          </div>

          {/* Budget */}
          <div>
            <p className="text-white mb-3 text-sm md:text-base">What is your budget for this project?</p>
            <div className="flex flex-wrap gap-3">
              {['up to $10k', '$10-$20k', '$20-$50k', '$50-$100k', '> $100k'].map((budget, idx) => (
                <button
                  key={idx}
                  type="button"
                  className="px-4 py-2 rounded-full border border-gray-700 text-gray-400 hover:border-purple-400 hover:text-purple-400 transition-colors"
                >
                  {budget}
                </button>
              ))}
            </div>
          </div>

          {/* Referral */}
          <div>
            <p className="text-white mb-3 text-sm md:text-base">How did you hear about us?</p>
            <div className="flex flex-wrap gap-3">
              {['Dribbble', 'Behance', 'Google Search', 'Social Media', 'Clutch, DesignRush, etc', 'Other'].map((ref, idx) => (
                <button
                  key={idx}
                  type="button"
                  className="px-4 py-2 rounded-full border border-gray-700 text-gray-400 hover:border-purple-400 hover:text-purple-400 transition-colors"
                >
                  {ref}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="mt-8 px-8 py-3 bg-purple-400 text-black font-semibold rounded-full hover:bg-purple-300 transition-all"
          >
            Submit
          </button>
          <p className="text-sm mt-4 text-left text-gray-500">
            By clicking this button you accept Terms of Service and Privacy Policy
          </p>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
