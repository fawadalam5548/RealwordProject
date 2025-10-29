const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-xl font-bold">BusinessCo</div>
            <p className="text-primary-foreground/80 text-sm mt-1">
              Transforming businesses since 2009
            </p>
          </div>
          <div className="text-primary-foreground/80 text-sm">
            © 2024 BusinessCo. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
