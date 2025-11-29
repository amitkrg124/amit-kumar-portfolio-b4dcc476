import { ExternalLink, ArrowRight } from 'lucide-react';
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

const Projects = () => {
  const projects = [
    {
      name: "ConnectAI",
      description: "AI-powered digital business card platform",
      url: "https://connct.ai",
      tags: ["React", "AI Integration"],
      image: connectai,
    },
    {
      name: "Supriya Travels",
      description: "Travel booking and tour management platform",
      url: "https://supriya-travels.vercel.app",
      tags: ["Next.js", "Tailwind CSS"],
      image: supriyaTravels,
    },
    {
      name: "Saneh Library",
      description: "Digital library management system",
      url: "https://sanehlibrary.com",
      tags: ["React", "Node.js"],
      image: sanehLibrary,
    },
    {
      name: "Krishna Flowers",
      description: "E-commerce platform for flower delivery",
      url: "https://krishna-flowers.vercel.app",
      tags: ["Next.js", "E-commerce"],
      image: krishnaFlowers,
    },
    {
      name: "Flexcare",
      description: "Healthcare management solution",
      url: "https://flexcare.vercel.app",
      tags: ["Next.js", "Healthcare"],
      image: flexcare,
    },
    {
      name: "JD Interior",
      description: "Interior design portfolio showcase",
      url: "https://jd-interior.vercel.app",
      tags: ["React", "Portfolio"],
      image: jdInterior,
    },
    {
      name: "SugarPop",
      description: "Sweet shop e-commerce website",
      url: "https://sugarpop.vercel.app",
      tags: ["Next.js", "E-commerce"],
      image: sugarpop,
    },
    {
      name: "Rolling Bites",
      description: "Food delivery and restaurant platform",
      url: "https://rolling-bites.vercel.app",
      tags: ["React", "Food Tech"],
      image: rollingBites,
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <h2 className="section-title mb-0">Projects</h2>
          <p className="text-body">Visual showcase of my development work</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card group"
            >
              {/* Project Preview */}
              <div className="h-48 relative overflow-hidden bg-muted">
                <img 
                  src={project.image} 
                  alt={`${project.name} screenshot`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300 flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
                </div>
              </div>

              {/* Project Info */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <ExternalLink size={14} className="text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-badge text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View More Projects */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">And many more projects...</p>
          <Button variant="outline" className="group" asChild>
            <a href="https://github.com/amitkrg124" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
