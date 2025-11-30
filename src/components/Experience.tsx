import { Timeline } from '@/components/ui/timeline';

const Experience = () => {
  const timelineData = [
    {
      title: "2025",
      content: (
        <div>
          <div className="mb-4">
            <h3 className="text-lg md:text-2xl font-bold text-foreground">Senior Software Engineer (ReactJS)</h3>
            <p className="text-primary font-semibold text-sm md:text-base">RSNG Info Solutions Private Limited</p>
            <span className="text-xs md:text-sm text-muted-foreground">April 2025 - Present</span>
          </div>
          <p className="text-muted-foreground text-xs md:text-sm font-normal mb-6">
            Leading development of enterprise web applications using React.js ecosystem. Architecting scalable solutions and mentoring junior developers.
          </p>
          <div className="flex flex-wrap gap-2">
            {["React.js", "TypeScript", "Node.js", "Team Leadership"].map((tech) => (
              <span key={tech} className="tech-badge">{tech}</span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "2023-24",
      content: (
        <div>
          <div className="mb-4">
            <h3 className="text-lg md:text-2xl font-bold text-foreground">Web and Application Developer (ReactJS)</h3>
            <p className="text-primary font-semibold text-sm md:text-base">Pipeline Velocity Private Limited</p>
            <span className="text-xs md:text-sm text-muted-foreground">January 2023 - September 2024</span>
          </div>
          <p className="text-muted-foreground text-xs md:text-sm font-normal mb-6">
            Developed and maintained web applications with focus on performance optimization and user experience. Implemented complex features and integrations.
          </p>
          <div className="flex flex-wrap gap-2">
            {["React.js", "Redux", "REST APIs", "Performance Optimization"].map((tech) => (
              <span key={tech} className="tech-badge">{tech}</span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <div className="mb-4">
            <h3 className="text-lg md:text-2xl font-bold text-foreground">React JS + React Native Developer</h3>
            <p className="text-primary font-semibold text-sm md:text-base">Netheus Technologies Private Limited</p>
            <span className="text-xs md:text-sm text-muted-foreground">April 2022 - December 2022</span>
          </div>
          <p className="text-muted-foreground text-xs md:text-sm font-normal mb-6">
            Built cross-platform mobile and web applications using React Native and React.js. Delivered responsive UI components and integrated backend services.
          </p>
          <div className="flex flex-wrap gap-2">
            {["React Native", "React.js", "Mobile Development", "Cross-Platform"].map((tech) => (
              <span key={tech} className="tech-badge">{tech}</span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <div className="mb-4">
            <h3 className="text-lg md:text-2xl font-bold text-foreground">Software Engineer</h3>
            <p className="text-primary font-semibold text-sm md:text-base">Coding Expo Technologies</p>
            <span className="text-xs md:text-sm text-muted-foreground">February 2021 - April 2022</span>
          </div>
          <p className="text-muted-foreground text-xs md:text-sm font-normal mb-6">
            Started professional journey building web applications. Gained hands-on experience in frontend development and modern JavaScript frameworks.
          </p>
          <div className="flex flex-wrap gap-2">
            {["JavaScript", "React.js", "HTML5", "CSS3"].map((tech) => (
              <span key={tech} className="tech-badge">{tech}</span>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="experience" className="bg-background">
      <div className="max-w-7xl mx-auto pt-16 pb-4 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-2 text-foreground max-w-4xl font-bold">
          Professional Journey
        </h2>
        <p className="text-muted-foreground text-sm md:text-base max-w-sm">
          4+ Years of building impactful web and mobile applications across diverse industries.
        </p>
      </div>
      <Timeline data={timelineData} />
    </section>
  );
};

export default Experience;
