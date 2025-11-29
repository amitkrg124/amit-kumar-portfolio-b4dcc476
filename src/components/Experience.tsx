const Experience = () => {
  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "Neo Hives IT Solutions",
      period: "2020 - Present",
      description: "Leading development of scalable web applications using React.js and Next.js. Building AI-powered automation workflows and managing end-to-end project delivery.",
      highlights: ["React.js", "Next.js", "Node.js", "AI Integration"],
    },
    {
      title: "Frontend Developer",
      company: "Freelance",
      period: "2019 - 2020",
      description: "Delivered 20+ client projects ranging from e-commerce platforms to healthcare dashboards. Specialized in responsive design and performance optimization.",
      highlights: ["JavaScript", "React", "CSS3", "Responsive Design"],
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
            <p className="text-sm text-muted-foreground mb-8">Roles and Contribution</p>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-primary/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full"></div>
                  
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                    <div>
                      <h3 className="font-semibold text-lg">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <span className="text-2xl md:text-3xl font-bold text-muted-foreground/50">
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
