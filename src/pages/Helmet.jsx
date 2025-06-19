import { useState, useRef } from "react";
import React from "react";

function Button({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
    >
      {children}
    </button>
  );
}

export default function Helmet() {
  const [background, setBackground] = useState(null);
  const [helmet, setHelmet] = useState(null);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [flipped, setFlipped] = useState(false);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  const handleBackgroundUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setBackground(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleHelmetUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setHelmet(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleMouseDown = () => setDragging(true);
  const handleMouseUp = () => setDragging(false);

  const handleMouseMove = (e) => {
    if (!dragging) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left - 50,
      y: e.clientY - rect.top - 50,
    });
  };

  const saveImage = () => {
    if (!background || !helmet) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const bgImage = new Image();
    const helmetImage = new Image();

    bgImage.src = background;
    helmetImage.src = helmet;

    bgImage.onload = () => {
      canvas.width = bgImage.width;
      canvas.height = bgImage.height;
      ctx.drawImage(bgImage, 0, 0, bgImage.width, bgImage.height);
      helmetImage.onload = () => {
        ctx.save();
        if (flipped) {
          ctx.scale(-1, 1);
          ctx.drawImage(helmetImage, -position.x - 100, position.y, 100, 100);
        } else {
          ctx.drawImage(helmetImage, position.x, position.y, 100, 100);
        }
        ctx.restore();
        const link = document.createElement("a");
        link.download = "final-image.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
      };
    };
  };

  return (
    <div className="flex flex-col items-center p-4">
      <input
        type="file"
        onChange={handleBackgroundUpload}
        accept="image/*"
        className="mb-4"
      />
      <input
        type="file"
        onChange={handleHelmetUpload}
        accept="image/*"
        className="mb-4"
      />
      <div
        ref={containerRef}
        className="relative w-96 h-96 border"
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        {background && (
          <img
            src={background}
            alt="Background"
            className="w-full h-full object-cover"
          />
        )}
        {helmet && (
          <img
            src={helmet}
            alt="Helmet"
            className={`absolute w-24 h-24 cursor-pointer ${flipped ? "scale-x-[-1]" : ""}`}
            style={{ left: position.x, top: position.y }}
          />
        )}
      </div>
      <Button onClick={() => setFlipped(!flipped)}>Flip Helmet</Button>
      <Button onClick={saveImage}>Save & Download</Button>
      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
}