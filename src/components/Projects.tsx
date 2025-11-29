import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      name: "Supriya Travels",
      description: "Travel booking and tour management platform",
      url: "https://supriya-travels.vercel.app",
      tags: ["Next.js", "Tailwind CSS"],
      gradient: "from-blue-400 to-cyan-400",
    },
    {
      name: "Saneh Library",
      description: "Digital library management system",
      url: "https://sanehlibrary.com",
      tags: ["React", "Node.js"],
      gradient: "from-purple-400 to-pink-400",
    },
    {
      name: "Krishna Flowers",
      description: "E-commerce platform for flower delivery",
      url: "https://krishna-flowers.vercel.app",
      tags: ["Next.js", "E-commerce"],
      gradient: "from-pink-400 to-rose-400",
    },
    {
      name: "ConnectAI",
      description: "AI-powered communication platform",
      url: "https://connct.ai",
      tags: ["React", "AI Integration"],
      gradient: "from-indigo-400 to-violet-400",
    },
    {
      name: "Flexcare",
      description: "Healthcare management solution",
      url: "https://flexcare.vercel.app",
      tags: ["Next.js", "Healthcare"],
      gradient: "from-emerald-400 to-teal-400",
    },
    {
      name: "JD Interior",
      description: "Interior design portfolio showcase",
      url: "https://jd-interior.vercel.app",
      tags: ["React", "Portfolio"],
      gradient: "from-amber-400 to-orange-400",
    },
    {
      name: "SugarPop",
      description: "Sweet shop e-commerce website",
      url: "https://sugarpop.vercel.app",
      tags: ["Next.js", "E-commerce"],
      gradient: "from-pink-400 to-fuchsia-400",
    },
    {
      name: "Rolling Bites",
      description: "Food delivery and restaurant platform",
      url: "https://rolling-bites.vercel.app",
      tags: ["React", "Food Tech"],
      gradient: "from-orange-400 to-red-400",
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
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300 flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                {/* Mock browser elements */}
                <div className="absolute top-3 left-3 flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/30"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-white/30"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-white/30"></div>
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
      </div>
    </section>
  );
};

export default Projects;
