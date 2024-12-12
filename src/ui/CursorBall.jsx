import { useEffect } from "react";
import { useState } from "react";

const CursorBall = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div
      className="hidden lg:block fixed top-0 left-0 w-14 h-14 rounded-full bg-transparent border-2 border-[#FF5D56] pointer-events-none z-[999]"
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    />
  );
};

export default CursorBall;
