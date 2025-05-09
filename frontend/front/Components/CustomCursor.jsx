import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorType = () => {
      const hoveredElement = document.elementFromPoint(position.x, position.y);
      const isClickable = hoveredElement?.closest('button, a, input, select, textarea, label, [role="button"]');
      setIsPointer(!!isClickable);
    };

    const handleMouseEnter = () => setIsHidden(false);
    const handleMouseLeave = () => setIsHidden(true);

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", updateCursorType);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", updateCursorType);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [position]);

  return (
    <div
      className={`fixed pointer-events-none z-50 transition-opacity duration-300 ${isPointer ? "scale-150" : "scale-100"} ${isHidden ? "opacity-0" : "opacity-100"} animate-scale-in`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: '24px',
        height: '24px',
        backgroundImage: "url('/hand-cursor.svg')",
        backgroundSize: 'cover',
        transform: 'translate(-50%, -50%)', /* Center the cursor */
      }}
    />
  );
};

export default CustomCursor;