import { Palette, Type, Layout, Gauge, Bot, Workflow, Sparkles, Brain } from 'lucide-react';

const Skills = () => {
  const techStack = [
    { name: "React.js", color: "bg-blue-100 text-blue-700" },
    { name: "Next.js", color: "bg-gray-100 text-gray-700" },
    { name: "TypeScript", color: "bg-blue-100 text-blue-700" },
    { name: "JavaScript (ES6+)", color: "bg-yellow-100 text-yellow-700" },
    { name: "Redux Toolkit", color: "bg-purple-100 text-purple-700" },
    { name: "React Query", color: "bg-red-100 text-red-700" },
    { name: "React Native", color: "bg-cyan-100 text-cyan-700" },
    { name: "Node.js", color: "bg-green-100 text-green-700" },
    { name: "REST APIs", color: "bg-orange-100 text-orange-700" },
    { name: "GraphQL", color: "bg-pink-100 text-pink-700" },
    { name: "Tailwind CSS", color: "bg-teal-100 text-teal-700" },
    { name: "Material UI", color: "bg-blue-100 text-blue-700" },
    { name: "Styled Components", color: "bg-pink-100 text-pink-700" },
    { name: "HTML5", color: "bg-orange-100 text-orange-700" },
    { name: "CSS3/SASS", color: "bg-blue-100 text-blue-700" },
    { name: "Git/GitHub", color: "bg-gray-100 text-gray-700" },
    { name: "Jest/Testing", color: "bg-green-100 text-green-700" },
    { name: "Webpack/Vite", color: "bg-yellow-100 text-yellow-700" },
    { name: "MongoDB", color: "bg-green-100 text-green-700" },
    { name: "PostgreSQL", color: "bg-blue-100 text-blue-700" },
    { name: "Firebase", color: "bg-orange-100 text-orange-700" },
    { name: "Supabase", color: "bg-green-100 text-green-700" },
  ];

  const aiTools = [
    { name: "ChatGPT/OpenAI", color: "bg-emerald-100 text-emerald-700" },
    { name: "Claude AI", color: "bg-orange-100 text-orange-700" },
    { name: "n8n Automation", color: "bg-red-100 text-red-700" },
    { name: "Make (Integromat)", color: "bg-purple-100 text-purple-700" },
    { name: "Zapier", color: "bg-orange-100 text-orange-700" },
    { name: "AI API Integration", color: "bg-blue-100 text-blue-700" },
    { name: "Prompt Engineering", color: "bg-pink-100 text-pink-700" },
    { name: "Workflow Automation", color: "bg-teal-100 text-teal-700" },
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

  const aiCompetencies = [
    {
      icon: Bot,
      title: "AI Integration",
      description: "Integrating AI models and APIs into web applications",
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "Building automated workflows using n8n, Make & Zapier",
    },
    {
      icon: Sparkles,
      title: "AI-Powered Features",
      description: "Creating intelligent chatbots and AI-driven functionalities",
    },
    {
      icon: Brain,
      title: "Prompt Engineering",
      description: "Designing effective prompts for optimal AI responses",
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
          <p className="text-body mb-6">Core technologies and frameworks I work with</p>
          
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

        {/* AI & Automation */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full mb-6">
            <span className="text-sm font-medium">🤖 AI & Automation</span>
          </div>
          <p className="text-body mb-6">AI tools and automation workflows I specialize in</p>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {aiTools.map((tool) => (
              <span
                key={tool.name}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${tool.color} transition-transform hover:scale-105`}
              >
                {tool.name}
              </span>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {aiCompetencies.map((item) => (
              <div key={item.title} className="skill-card">
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
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
