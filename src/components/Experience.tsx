const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer (ReactJS)",
      company: "RSNG Info Solutions Private Limited",
      period: "April 2025 - Present",
      description: "Leading development of enterprise web applications using React.js ecosystem. Architecting scalable solutions and mentoring junior developers.",
      highlights: ["React.js", "TypeScript", "Node.js", "Team Leadership"],
    },
    {
      title: "Web and Application Developer (ReactJS)",
      company: "Pipeline Velocity Private Limited",
      period: "January 2023 - September 2024",
      description: "Developed and maintained web applications with focus on performance optimization and user experience. Implemented complex features and integrations.",
      highlights: ["React.js", "Redux", "REST APIs", "Performance Optimization"],
    },
    {
      title: "React JS + React Native Developer",
      company: "Netheus Technologies Private Limited",
      period: "April 2022 - December 2022",
      description: "Built cross-platform mobile and web applications using React Native and React.js. Delivered responsive UI components and integrated backend services.",
      highlights: ["React Native", "React.js", "Mobile Development", "Cross-Platform"],
    },
    {
      title: "Software Engineer",
      company: "Coding Expo Technologies",
      period: "February 2021 - April 2022",
      description: "Started professional journey building web applications. Gained hands-on experience in frontend development and modern JavaScript frameworks.",
      highlights: ["JavaScript", "React.js", "HTML5", "CSS3"],
    },
  ];

  return (
    <section id="experience" className="section-padding bg-light-bg">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="md:w-1/3">
            <h2 className="section-title">Experience</h2>
          </div>
          
          <div className="md:w-2/3">
            <p className="text-sm text-muted-foreground mb-8">4+ Years of Professional Journey</p>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-primary/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full"></div>
                  
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                    <div>
                      <h3 className="font-semibold text-lg">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm md:text-base font-semibold text-muted-foreground/70 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="text-body mb-4">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight) => (
                      <span key={highlight} className="tech-badge">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
