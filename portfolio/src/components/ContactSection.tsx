import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';
import { Mail, Send, Sparkles, CheckCircle2, MapPin, Globe, MessageSquare, Phone } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Career Opportunity',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSendError(null);
    setIsSending(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('Email service is not configured.');
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          service: formData.service,
          message: formData.message,
        },
        { publicKey },
      );

      setSubmitted(true);
      setFormData({ name: '', email: '', service: 'Career Opportunity', message: '' });
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    } catch (error) {
      console.error('Email sending failed:', error);
      setSendError('Unable to send your message right now. Please email nandhalulu@gmail.com directly.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-white/[0.01] border-t border-white/5">
      <div className="portfolio-container">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
          
          {/* Left Column: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles size={14} className="text-indigo-400" />
              Open to opportunities
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
              Let’s talk about the <span className="text-gradient-vibrant">next opportunity.</span>
            </h2>

            <p className="text-gray-300 text-base leading-relaxed">
              I’m open to graphic design, UI/UX, branding, visual communication, and social-media design roles where thoughtful design can make a real impact.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <Mail size={22} />
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Email Me</span>
                  <a href="mailto:nandhalulu@gmail.com" className="text-white font-semibold hover:text-indigo-300 transition-colors">
                    nandhalulu@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <Phone size={22} />
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Call Me</span>
                  <a href="tel:+917094072506" className="text-white font-semibold hover:text-indigo-300 transition-colors">+91 70940 72506</a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <MapPin size={22} />
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Location</span>
                  <span className="text-white font-semibold">Coonoor, Tamil Nadu &bull; Remote Worldwide</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                Follow & Connect
              </p>
              <div className="flex items-center gap-3">
                {[
                  { name: 'LinkedIn', icon: Globe, href: 'https://www.linkedin.com/in/nandha-kumar-b-0653001a5?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
                  { name: 'Work Drive', icon: MessageSquare, href: 'https://drive.google.com/drive/folders/1QjHAAf9BL0A6mrsc_ED1u9r3KGUB3a2i?usp=sharing' },
                ].map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={i}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      title={s.name}
                      className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-all"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-8 rounded-3xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-300 text-sm max-w-md mx-auto">
                    Thank you for reaching out. I’ll review your message and get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-secondary text-xs py-2 px-4"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-heading font-bold text-2xl text-white mb-2">
                    Start a Conversation
                  </h3>

                  <div>
                    <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rahul@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                      Reason for reaching out
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#0c101d] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                    >
                      <option value="Career Opportunity">Career Opportunity</option>
                      <option value="Freelance / Contract Role">Freelance / Contract Role</option>
                      <option value="Recruiter Introduction">Recruiter Introduction</option>
                      <option value="Collaboration">Collaboration</option>
                      <option value="General Message">General Message</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about the role, team, or opportunity..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button type="submit" disabled={isSending} className="btn-primary w-full justify-center py-3.5 text-base disabled:cursor-not-allowed disabled:opacity-60">
                    {isSending ? 'Sending…' : 'Send Message'}
                    <Send size={18} />
                  </button>
                  {sendError && <p role="alert" className="text-sm text-red-600 text-center">{sendError}</p>}
                </form>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
