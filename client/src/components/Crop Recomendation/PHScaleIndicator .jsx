import React, { useState } from "react";

const PHScaleIndicator = ({ initialPH = 4 }) => {
  const [phValue, setPhValue] = useState(initialPH);

  // Clamp the pH value between 0 and 14
  const clampedPH = Math.min(14, Math.max(0, phValue));

  // Calculate the position percentage for the arrow (0-100%)
  const arrowPosition = (clampedPH / 14) * 100;

  // pH scale color stops
  const colorStops = [
    { value: 0, color: "bg-red-600" },
    { value: 2, color: "bg-red-400" },
    { value: 3, color: "bg-orange-400" },
    { value: 4, color: "bg-amber-400" },
    { value: 5, color: "bg-yellow-400" },
    { value: 6, color: "bg-lime-300" },
    { value: 7, color: "bg-green-400" },
    { value: 8, color: "bg-emerald-400" },
    { value: 9, color: "bg-teal-400" },
    { value: 10, color: "bg-cyan-400" },
    { value: 11, color: "bg-blue-400" },
    { value: 12, color: "bg-indigo-400" },
    { value: 13, color: "bg-violet-400" },
    { value: 14, color: "bg-purple-600" },
  ];

  return (
    <div className="max-w-2xl mx-auto p-6 bg-primary-foreground rounded-lg shadow-md mt-5">
      <h2 className="text-2xl font-bold text-gray-800 mb-10">
        pH Scale Indicator
      </h2>

      {/* <div className="mb-6">
        <label htmlFor="phInput" className="block text-sm font-medium text-gray-700 mb-1">
          Enter pH Value (0-14):
        </label>
        <input
          id="phInput"
          type="number"
          min="0"
          max="14"
          step="0.1"
          value={phValue}
          onChange={(e) => setPhValue(parseFloat(e.target.value) || 0)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div> */}

      <div className="relative h-12 mb-2">
        {/* pH scale track with gradient */}
        <div className="absolute inset-0 flex overflow-hidden">
          {colorStops.map((stop, index) => {
            if (index === colorStops.length - 1) return null;
            const nextStop = colorStops[index + 1];
            const width = ((nextStop.value - stop.value) / 14) * 100;
            return (
              <div
                key={index}
                className={`h-full ${stop.color}`}
                style={{ width: `${width}%` }}
              />
            );
          })}
        </div>

        {/* pH scale markers */}
        <div className="absolute inset-0 flex justify-between">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="relative h-full w-px bg-black">
              <span className="absolute top-full left-1/2 transform -translate-x-1/2 text-xs mt-1">
                {i}
              </span>
            </div>
          ))}
        </div>

        {/* Arrow indicator */}
        <div
          className="absolute -top-1 transform -translate-x-1/2 -translate-y-full"
          style={{ left: `${arrowPosition}%` }}
        >
          <div className="text-center">
            <span className="text-sm font-semibold text-gray-800">
              {clampedPH}
            </span>
            <div className="w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-primary mx-auto rotate-180" />
          </div>
        </div>
      </div>

      <div className="flex justify-between text-xs text-gray-600 mt-8 ">
        <span>Acidic</span>
        <span>Neutral</span>
        <span>Alkaline</span>
      </div>
    </div>
  );
};

export default PHScaleIndicator;
