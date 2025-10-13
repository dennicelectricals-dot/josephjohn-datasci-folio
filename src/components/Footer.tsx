const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Joseph John. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Built with <span className="text-primary">React</span> & <span className="text-secondary">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
