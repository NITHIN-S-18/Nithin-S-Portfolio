import React from 'react'

const Button = ({ text, className }) => {
  const handleClick = () => {
    const section = document.getElementById("about");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      onClick={handleClick}
      className={`${className ?? ""} cta-wrapper cursor-pointer`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>  
  );
}

export default Button;
