import { FaArrowUp, FaWindowClose } from "react-icons/fa";
import { useState, useEffect } from "react";
import { use } from "react";

function ScrollButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex place-content-end pr-28">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-yellow-400 p-3 z-50 rounded-lg fixed"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}

export default ScrollButton;
