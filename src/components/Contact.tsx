import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { PERSONAL_INFO } from '../constants';

export default function Contact() {
  const [state, handleSubmit] = useForm("mojpvpeg");

  return (
    <section id="contact" className="min-h-screen py-20 relative bg-brand-cream">
      {/* Soft Ambient Glow on the Right Side */}
      <div className="absolute top-1/4 -right-16 w-80 sm:w-96 h-80 bg-gradient-to-bl from-brand-orange/20 via-brand-yellow/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-12 right-6 w-64 h-64 bg-gradient-to-t from-brand-yellow/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-8">
        
        {/* Heading */}
        <div className="flex items-center mb-20 relative">
          <div className="border-b-4 border-brand-red w-full pb-2 flex items-end justify-between relative">
             {/* Subtle Soft Continuous Gradient Glow behind Heading */}
             <div className="absolute -top-12 -left-10 w-96 sm:w-[32rem] h-36 bg-gradient-to-r from-brand-orange/30 via-brand-yellow/30 to-brand-orange/15 rounded-full blur-3xl pointer-events-none -z-10" />
             <h2 className="font-serif text-6xl text-brand-red relative z-10">Contact</h2>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Left Side: Info */}
            <div className="space-y-12">
              <p className="font-serif text-4xl text-gray-800 leading-tight italic">
                Let's create something <span className="text-brand-red">beautiful</span> together.
              </p>
              
              <div className="space-y-8 font-sans">
                <div>
                  <h4 className="text-brand-red uppercase tracking-widest text-xs font-bold mb-2">Get in touch</h4>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-2xl text-gray-700 hover:text-brand-red transition-colors font-serif border-b border-brand-red/20 pb-1">
                    {PERSONAL_INFO.email}
                  </a>
                </div>

                <div>
                  <h4 className="text-brand-red uppercase tracking-widest text-xs font-bold mb-4">Socials</h4>
                  <div className="flex flex-wrap gap-6">
                    {Object.entries(PERSONAL_INFO.socials).map(([platform, link]) => (
                      <a 
                        key={platform} 
                        href={link} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-brand-red uppercase tracking-widest text-sm transition-colors font-semibold"
                      >
                        {platform}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="bg-white p-8 shadow-xl rounded-sm border border-brand-red/5">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs uppercase tracking-widest font-bold text-brand-red">Name</label>
                  <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-brand-cream/30 border-b-2 border-brand-red/20 px-4 py-3 focus:border-brand-red outline-none transition-colors font-sans"
                    placeholder="Your Name"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="text-brand-red text-xs mt-1" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs uppercase tracking-widest font-bold text-brand-red">Email</label>
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-brand-cream/30 border-b-2 border-brand-red/20 px-4 py-3 focus:border-brand-red outline-none transition-colors font-sans"
                    placeholder="your@email.com"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-brand-red text-xs mt-1" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-xs uppercase tracking-widest font-bold text-brand-red">Message</label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full bg-brand-cream/30 border-b-2 border-brand-red/20 px-4 py-3 focus:border-brand-red outline-none transition-colors font-sans resize-none"
                    placeholder="Tell me about your project..."
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-brand-red text-xs mt-1" />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className={`w-full py-4 uppercase tracking-[0.2em] font-bold text-sm transition-all duration-300 ${
                    state.succeeded 
                      ? 'bg-brand-green text-white' 
                      : 'bg-brand-red text-white hover:bg-brand-green shadow-lg hover:shadow-brand-green/20'
                  }`}
                >
                  {state.submitting ? 'Sending...' : state.succeeded ? 'Message Sent!' : 'Send Message'}
                </button>
                
                {state.succeeded && (
                  <p className="text-center text-brand-green text-xs font-bold uppercase tracking-widest mt-4 animate-fade-in">
                    Thank you! I'll get back to you soon.
                  </p>
                )}
              </form>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
