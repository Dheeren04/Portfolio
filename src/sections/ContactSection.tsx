import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Check,
  Copy,
  ExternalLink,
  Mail,
  MapPin,
  MessageSquare,
  Send,
} from 'lucide-react';
import { content } from '../data/content';
import { LinkedInIcon } from '../components/Icons';

export function ContactSection() {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2200);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Netlify Forms Submission
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }).toString(),
      });

      if (!response.ok) {
        throw new Error('Netlify form submission failed');
      }
    } catch {
      // Graceful mailto fallback if not hosted on Netlify or offline
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Hi Harshitha,\n\n${formData.message}\n\nBest regards,\n${formData.name} (${formData.email})`
      );
      window.location.href = `mailto:${content.personal.email}?subject=${subject}&body=${body}`;
    }

    setFormSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2.5 text-sm sm:text-base font-mono uppercase tracking-widest text-[var(--accent)] font-semibold mb-3">
            <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5" />
            <span>05 / GET IN TOUCH</span>
          </div>
          <h2 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[var(--text)] leading-[1.1]">
            Let's work together.
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-[var(--text-muted)] font-sans-body">
            Feel free to reach out for opportunities, academic collaborations, or a friendly conversation.
          </p>
        </div>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Direct Contact Info & LinkedIn */}
          <div className="lg:col-span-5 space-y-5">
            {/* Email Card with Copy button */}
            <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm space-y-3 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[var(--accent)]/40 hover:shadow-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-xs font-mono text-[var(--text-muted)] uppercase">
                  <Mail className="h-4 w-4 text-[var(--accent)]" />
                  <span>Email Address</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(content.personal.email, 'email')}
                  className="inline-flex items-center gap-1 text-xs font-medium text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-200 p-1 cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedType === 'email' ? (
                    <span className="flex items-center gap-1 text-emerald-500 font-semibold">
                      <Check className="h-3.5 w-3.5" /> Copied!
                    </span>
                  ) : (
                    <span className="flex items-center gap-1">
                      <Copy className="h-3.5 w-3.5" /> Copy
                    </span>
                  )}
                </button>
              </div>
              <a
                href={`mailto:${content.personal.email}`}
                className="block text-base sm:text-lg font-semibold text-[var(--text)] hover:text-[var(--accent)] transition-colors duration-200"
              >
                {content.personal.email}
              </a>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm space-y-3 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[var(--accent)]/40 hover:shadow-md">
              <div className="flex items-center gap-2.5 text-xs font-mono text-[var(--text-muted)] uppercase">
                <MapPin className="h-4 w-4 text-[var(--accent)]" />
                <span>Location</span>
              </div>
              <p className="text-base sm:text-lg font-semibold text-[var(--text)]">
                {content.personal.location}
              </p>
            </div>

            {/* Prominent LinkedIn CTA Button */}
            <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] space-y-3 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[var(--accent)]/40 hover:shadow-md">
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] uppercase">
                <LinkedInIcon className="h-4 w-4 text-[var(--accent)]" />
                <span>Professional Network</span>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-muted)]">
                Connect on LinkedIn for professional background and project updates.
              </p>
              <a
                href={content.personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--accent)] py-3 px-4 text-sm font-semibold text-[#0F0D1A] shadow-sm transition-all duration-200 ease-out hover:bg-[var(--accent-hover)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Connect on LinkedIn</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm transition-all duration-200 ease-out hover:border-[var(--accent)]/40">
              <div className="pb-4 mb-6 border-b border-[var(--border)]">
                <h3 className="font-serif-heading text-xl font-bold text-[var(--text)]">
                  Send a Message
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1">
                  Fill out the form below and it will launch your email client with the details pre-filled.
                </p>
              </div>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-xl bg-[var(--accent)]/12 border border-[var(--accent)]/30 text-center space-y-3"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent)] text-[#0F0D1A]">
                    <Check className="h-6 w-6" />
                  </div>
                  <h4 className="text-base font-bold text-[var(--text)]">
                    Thank you for reaching out!
                  </h4>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)]">
                    Your message has been initiated. I look forward to connecting with you soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="mt-2 text-xs font-semibold text-[var(--accent)] hover:underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>
                      Don’t fill this out if you're human: <input name="bot-field" />
                    </label>
                  </p>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. John Doe"
                      className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-2.5 text-sm text-[var(--text)] outline-none transition-colors duration-200 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-1.5"
                    >
                      Your Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="e.g. john@example.com"
                      className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-2.5 text-sm text-[var(--text)] outline-none transition-colors duration-200 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Describe your message or inquiry here..."
                      className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-2.5 text-sm text-[var(--text)] outline-none transition-colors duration-200 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--accent)] py-3 px-6 text-sm font-semibold text-[#0F0D1A] shadow-sm transition-all duration-200 ease-out hover:bg-[var(--accent-hover)] hover:-translate-y-0.5 cursor-pointer"
                  >
                    <span>Send Message</span>
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
