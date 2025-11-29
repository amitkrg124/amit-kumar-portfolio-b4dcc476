import { ArrowRight, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <h2 className="heading-lg mb-4">
              Let's Create<br />
              <span className="text-primary">Together</span>
            </h2>
            <p className="text-body mb-8">
              I'm actively seeking new projects and collaborations. Whether you need a 
              full-scale web application or want to enhance your existing platform, 
              let's discuss how I can help bring your vision to life.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="mailto:amitkrg124@gmail.com" className="btn-primary">
                Get In Touch <ArrowRight size={18} />
              </a>
              <a
                href="#"
                className="btn-outline"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Resume download would be triggered here');
                }}
              >
                View Resume
              </a>
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-6">
            <a
              href="mailto:amitkrg124@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-orange-light rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium group-hover:text-primary transition-colors">
                  amitkrg124@gmail.com
                </p>
              </div>
            </a>

            <a
              href="tel:+918076458459"
              className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-orange-light rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium group-hover:text-primary transition-colors">
                  +91 80764 58459
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-xl border border-border">
              <div className="w-12 h-12 bg-orange-light rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">Delhi, India</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://linkedin.com/in/amitkrg124/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-border rounded-full flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/amitkrg124"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-border rounded-full flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:amitkrg124@gmail.com"
                className="w-12 h-12 border border-border rounded-full flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
