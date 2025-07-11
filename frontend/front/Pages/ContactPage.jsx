import { Clock, Clock1, Github, Linkedin, Mail, MailIcon, MapPin, Phone, Pin, PinIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Your message has been sent! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="contact-mid-sections py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact <span className="gradient-text">Us</span>
            </h1>
            <p className="text-xl">
              Have questions or feedback? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Form */}
            <div className="animate-fade-in">
              <h2 className="resume-input-label text-2xl font-bold mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="resume-input-label block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="resume-input rounded-md w-full p-2"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="resume-input-label block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    required
                    className="resume-input rounded-md w-full p-2"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="resume-input-label block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
                    required
                    className="resume-input rounded-md w-full p-2"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="resume-input-label block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                    rows={5}
                    className="resume-input rounded-md w-full p-2"
                  />
                </div>
                
                <button className="overflow-hidden w-full contact-send-btn rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:shadow-none shadow-lg"
                type="submit"
                disabled={isSubmitting}
                >
                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-full group-hover:h-full opacity-10"></span>
                    <span className="relative contact-send-text font-bold">
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </span>
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="animate-fade-in">
              <h2 className="resume-input-label text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="contact-mid-sections p-8 rounded-md shadow-sm space-y-8">
                <div>
                  <h3 className="resume-input-label text-lg font-semibold mb-2">Email</h3>
                  <p className="flex items-center">
                    <MailIcon className="h-5 w-5 mr-4" />
                    meharpatel2512@gmail.com
                  </p>
                </div>
                
                <div>
                  <h3 className="resume-input-label text-lg font-semibold mb-2">Phone</h3>
                  <p className="flex items-center">
                    <Phone className="h-5 w-5 mr-4" />
                    +91 63548 83965
                  </p>
                </div>
                
                <div>
                  <h3 className="resume-input-label text-lg font-semibold mb-2">Address</h3>
                  <p className="flex items-start">
                    <MapPin className="h-5 w-5 mr-4" />
                    <span>
                      Suart - 395001<br />
                      Gujarat<br />
                      India
                    </span>
                  </p>
                </div>
                
                <div>
                  <h3 className="resume-input-label text-lg font-semibold mb-2">Hours</h3>
                  <p className="flex items-center">
                    <Clock className="h-5 w-5 mr-4" />
                    Monday - Friday: 9:00 AM - 5:30 PM IST
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="resume-input-label text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <Link to="https://github.com/MeharPatel" className="contact-some-dot h-10 w-10 rounded-full flex items-center justify-center hover:bg-resume-primary hover:text-white transition-colors" aria-label="Twitter">
                    <Github className="h-6 w-6" />
                  </Link>
                  <Link to="https://www.linkedin.com/in/mehar-patel/" className="contact-some-dot h-10 w-10 rounded-full flex items-center justify-center hover:bg-resume-primary hover:text-white transition-colors" aria-label="LinkedIn">
                    <Linkedin className="h-6 w-6" />
                  </Link>
                  <Link to="meharpatel2512@gmail.com" className="contact-some-dot h-10 w-10 rounded-full flex items-center justify-center hover:bg-resume-primary hover:text-white transition-colors" aria-label="Instagram">
                    <Mail className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 contact-mid-sections">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="contact-mid-section-cards p-6 rounded-md animate-fade-in">
              <h3 className="text-lg font-semibold mb-3">Is VibeResume free to use?</h3>
              <p>
                Yes, you can create and download your resume completely free of charge. We also offer premium templates and features for those who want additional options.
              </p>
            </div>
            
            <div className="contact-mid-section-cards p-6 rounded-md animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-lg font-semibold mb-3">Are the resumes ATS-friendly?</h3>
              <p>
                Absolutely! All of our templates are designed to pass through Applicant Tracking Systems so your resume gets seen by human recruiters.
              </p>
            </div>
            
            <div className="contact-mid-section-cards p-6 rounded-md animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-lg font-semibold mb-3">Can I create multiple resumes?</h3>
              <p>
                Yes, you can create multiple versions of your resume tailored to different job applications or industries.
              </p>
            </div>
            
            <div className="contact-mid-section-cards p-6 rounded-md animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-lg font-semibold mb-3">What format can I download my resume in?</h3>
              <p>
                You can download your resume as a PDF file, which is the most widely accepted format for job applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;