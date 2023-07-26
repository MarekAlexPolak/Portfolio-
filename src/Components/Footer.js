import React from "react";

function Footer() {
  return (
    <footer className="footer mt-4 py-3 fixed-bottom">
      <div className="container text-center">
        <span className="text-muted">
          {/* GitHub Link */}
          <a href="https://github.com/MarekAlexPolak" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          {" | "}
          {/* Email */}
          <a href="mailto:markalexpolak@gmail.com">
            Email
          </a>
          {" | "}
          {/* Phone Number */}
          <a href="tel:+16476686275">
            Phone Number
          </a>
          {" | "}
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/marek-polak-888199153/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;