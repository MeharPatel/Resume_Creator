import { useState } from "react";

const Slider = ({ value, onValueChange, min = 0, max = 100, step = 1, className = "" }) => {
  const [sliderValue, setSliderValue] = useState(value || [min]);

  const handleChange = (e) => {
    const newValue = [parseInt(e.target.value, 10)];
    setSliderValue(newValue);
    if (onValueChange) {
      onValueChange(newValue);
    }
  };

  // Calculate the filled range width as a percentage
  const filledWidth = ((sliderValue[0] - min) / (max - min)) * 100;

  return (
    <div className={`relative w-full ${className}`}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={sliderValue[0]}
        onChange={handleChange}
        className="w-full h-2 appearance-none bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        style={{
          // Custom styles for cross-browser range input
          WebkitAppearance: "none",
          MozAppearance: "none",
        }}
      />
      <style jsx>{`
        input[type="range"]::-webkit-slider-runnable-track {
          height: 8px;
          background: linear-gradient(
            to right,
            #8b5cf6 0%,
            #8b5cf6 ${filledWidth}%,
            #e5e7eb ${filledWidth}%,
            #e5e7eb 100%
          );
          border-radius: 9999px;
          cursor: pointer;
        }
        input[type="range"]::-moz-range-track {
          height: 8px;
          background: linear-gradient(
            to right,
            #8b5cf6 0%,
            #8b5cf6 ${filledWidth}%,
            #e5e7eb ${filledWidth}%,
            #e5e7eb 100%
          );
          border-radius: 9999px;
          cursor: pointer;
        }
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 20px;
          width: 20px;
          background: white;
          border: 2px solid #8b5cf6;
          border-radius: 50%;
          cursor: pointer;
          margin-top: -6px; /* Center thumb on track */
        }
        input[type="range"]::-moz-range-thumb {
          height: 20px;
          width: 20px;
          background: white;
          border: 2px solid #8b5cf6;
          border-radius: 50%;
          cursor: pointer;
        }
        input[type="range"]:disabled {
          pointer-events: none;
          opacity: 0.5;
        }
      `}</style>
    </div>
  );
};

export default Slider;