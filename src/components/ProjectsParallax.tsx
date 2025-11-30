import { HeroParallax } from '@/components/ui/hero-parallax';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import project screenshots
import supriyaTravels from '@/assets/projects/supriya-travels.png';
import sanehLibrary from '@/assets/projects/saneh-library.png';
import krishnaFlowers from '@/assets/projects/krishna-flowers.png';
import flexcare from '@/assets/projects/flexcare.png';
import jdInterior from '@/assets/projects/jd-interior.png';
import sugarpop from '@/assets/projects/sugarpop.png';
import rollingBites from '@/assets/projects/rolling-bites.png';
import connectai from '@/assets/projects/connectai.png';

const ProjectsParallax = () => {
  const products = [
    { title: "ConnectAI", link: "https://connct.ai", thumbnail: connectai },
    { title: "Supriya Travels", link: "https://supriya-travels.vercel.app", thumbnail: supriyaTravels },
    { title: "Saneh Library", link: "https://sanehlibrary.com", thumbnail: sanehLibrary },
    { title: "Krishna Flowers", link: "https://krishna-flowers.vercel.app", thumbnail: krishnaFlowers },
    { title: "Flexcare", link: "https://flexcare.vercel.app", thumbnail: flexcare },
    { title: "JD Interior", link: "https://jd-interior.vercel.app", thumbnail: jdInterior },
    { title: "SugarPop", link: "https://sugarpop.vercel.app", thumbnail: sugarpop },
    { title: "Rolling Bites", link: "https://rolling-bites.vercel.app", thumbnail: rollingBites },
    // Duplicate for more visual effect in parallax
    { title: "ConnectAI Pro", link: "https://connct.ai", thumbnail: connectai },
    { title: "Supriya Travels App", link: "https://supriya-travels.vercel.app", thumbnail: supriyaTravels },
    { title: "Saneh Digital", link: "https://sanehlibrary.com", thumbnail: sanehLibrary },
    { title: "Krishna Store", link: "https://krishna-flowers.vercel.app", thumbnail: krishnaFlowers },
    { title: "Flexcare Pro", link: "https://flexcare.vercel.app", thumbnail: flexcare },
    { title: "JD Design", link: "https://jd-interior.vercel.app", thumbnail: jdInterior },
    { title: "SugarPop Store", link: "https://sugarpop.vercel.app", thumbnail: sugarpop },
  ];

  const HeaderContent = () => (
    <div className="max-w-7xl relative mx-auto py-12 md:py-20 px-4 w-full left-0 top-0">
      <h2 className="text-2xl md:text-7xl font-bold text-foreground">
        Featured <br /> Projects
      </h2>
      <p className="max-w-2xl text-base md:text-xl mt-8 text-muted-foreground">
        A showcase of web and mobile applications I've built. Each project represents 
        a unique challenge solved with modern technologies and best practices.
      </p>
      <div className="mt-8">
        <Button variant="outline" className="group" asChild>
          <a href="https://github.com/amitkrg124" target="_blank" rel="noopener noreferrer">
            View All on GitHub
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>
      </div>
    </div>
  );

  return (
    <section id="projects" className="relative">
      <HeroParallax products={products} header={<HeaderContent />} />
    </section>
  );
};

export default ProjectsParallax;
