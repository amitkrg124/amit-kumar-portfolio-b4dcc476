import { Palette, Type, Layout, Gauge } from 'lucide-react';

const Skills = () => {
  const techStack = [
    { name: "React.js", color: "bg-blue-100 text-blue-700" },
    { name: "Next.js", color: "bg-gray-100 text-gray-700" },
    { name: "TypeScript", color: "bg-blue-100 text-blue-700" },
    { name: "JavaScript", color: "bg-yellow-100 text-yellow-700" },
    { name: "Node.js", color: "bg-green-100 text-green-700" },
    { name: "MongoDB", color: "bg-green-100 text-green-700" },
    { name: "PostgreSQL", color: "bg-blue-100 text-blue-700" },
    { name: "React Native", color: "bg-cyan-100 text-cyan-700" },
    { name: "Tailwind CSS", color: "bg-teal-100 text-teal-700" },
    { name: "HTML5", color: "bg-orange-100 text-orange-700" },
    { name: "CSS3", color: "bg-blue-100 text-blue-700" },
    { name: "Git", color: "bg-red-100 text-red-700" },
  ];

  const competencies = [
    {
      icon: Palette,
      title: "Visual Design",
      description: "Creating aesthetically pleasing and cohesive interfaces",
    },
    {
      icon: Type,
      title: "Typography",
      description: "Crafting readable and expressive text hierarchies",
    },
    {
      icon: Layout,
      title: "UI/UX Systems",
      description: "Building scalable and consistent design frameworks",
    },
    {
      icon: Gauge,
      title: "Performance",
      description: "Optimizing for speed and seamless user experience",
    },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-narrow">
        <h2 className="section-title">Skills</h2>
        
        {/* Tech Stack */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full mb-6">
            <span className="text-sm font-medium">⚡ Tech Stack</span>
          </div>
          <p className="text-body mb-6">Tools and technologies I work with</p>
          
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech.name}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${tech.color} transition-transform hover:scale-105`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* Design Competencies */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full mb-6">
            <span className="text-sm font-medium">🎨 Design</span>
          </div>
          <p className="text-body mb-6">Core competencies in visual design and user experience</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {competencies.map((item) => (
              <div key={item.title} className="skill-card">
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
