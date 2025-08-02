import React from "react";

const Footer = () => {
  return (
    <footer className="bg-background text-foreground py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm font-light">
          &copy; {new Date().getFullYear()} Josiah Viernes. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
