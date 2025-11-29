const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="section-padding !py-8 border-t border-border">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <p className="font-bold text-lg mb-1">
              <span className="text-primary">A</span>K Amit Kumar
            </p>
            <p className="text-sm text-muted-foreground">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Navigation Links */}
          <nav>
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="nav-link text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
