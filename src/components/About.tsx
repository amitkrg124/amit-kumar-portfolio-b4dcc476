import { Briefcase, Code, Layers, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: Briefcase, label: "5+ Years", sublabel: "Experience" },
    { icon: Code, label: "50+", sublabel: "Projects" },
    { icon: Layers, label: "6+", sublabel: "Industries" },
    { icon: Zap, label: "100%", sublabel: "Commitment" },
  ];

  const industries = [
    "Healthcare & Medical",
    "Digital Marketing",
    "Education & EdTech",
    "Food & Hospitality",
    "E-commerce & Retail",
    "Business Automation",
  ];

  return (
    <section id="about" className="section-padding bg-light-bg">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div>
            <h2 className="section-title">About</h2>
            <p className="text-body mb-6">
              I'm a passionate Full-Stack Web Developer specializing in React.js and Next.js 
              with over 5 years of professional experience. I build high-performance, 
              scalable web applications that deliver exceptional user experiences.
            </p>
            <p className="text-body mb-8">
              My expertise spans across modern JavaScript frameworks, backend development, 
              database design, and AI automation workflows. I've successfully delivered 
              projects across diverse industries, helping businesses transform their 
              digital presence.
            </p>

            <div className="flex flex-wrap gap-2">
              {industries.map((industry) => (
                <span key={industry} className="tech-badge">
                  {industry}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div key={item.label} className="skill-card text-center">
                <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-2xl font-bold">{item.label}</p>
                <p className="text-sm text-muted-foreground">{item.sublabel}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="flex flex-wrap gap-4 mt-12 justify-center">
          <div className="px-6 py-3 bg-orange-light rounded-full border border-primary/20">
            <span className="text-sm font-medium">⭐ Full-Stack Expert</span>
          </div>
          <div className="px-6 py-3 bg-orange-light rounded-full border border-primary/20">
            <span className="text-sm font-medium">🚀 Performance Focused</span>
          </div>
          <div className="px-6 py-3 bg-orange-light rounded-full border border-primary/20">
            <span className="text-sm font-medium">💡 AI Integration Specialist</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
