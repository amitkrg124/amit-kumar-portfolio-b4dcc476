import { ArrowRight, ArrowDown } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center section-padding pt-24">
      <div className="container-narrow w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <p className="text-sm font-medium text-muted-foreground mb-4 animate-fade-up">
              I am Amit Kumar
            </p>

            <h1 className="heading-xl mb-2 animate-fade-up delay-100">
              <span className="block text-foreground">REACT JS</span>
              <span className="block text-primary">DEVELOPER</span>
            </h1>

            <p className="text-body max-w-md mb-6 animate-fade-up delay-200">
              React.js Specialist with 4+ years of experience building
              high-performance, scalable web & mobile applications.
            </p>

            <div className="flex flex-wrap gap-4 mb-12 animate-fade-up delay-300">
              <a href="#projects" className="btn-primary">
                View My Work <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn-outline">
                Get In Touch
              </a>
            </div>

            <div className="animate-fade-up delay-400">
              <p className="text-xs text-muted-foreground mb-2">4+ Years Experience</p>
              <p className="font-semibold text-lg">RSNG INFO SOLUTIONS PVT LTD</p>
              <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium">Available for Projects</span>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-up">
            <div className="relative">
              <div className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/20">
                <img
                  src={profilePhoto}
                  alt="Amit Kumar - Frontend Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-full opacity-20"></div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-secondary rounded-full opacity-30"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden lg:flex justify-center mt-12 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
