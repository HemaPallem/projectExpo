import cloud from "d3-cloud";
import React, { useState, useEffect } from "react";

const WordCloud = ({ data = [] }) => {  
  const [wordElements, setWordElements] = useState([]);

  useEffect(() => {
    console.log("WordCloud received data:", data); // ✅ Debugging
    if (!data || data.length === 0) {
      console.warn("No words received for word cloud");
      setWordElements([]);
      return;
    }

    const layout = cloud()
      .size([300, 200])
      .words(data.map(d => ({ text: d.text, size: d.value * 2 })))
      .padding(5)
      .rotate(() => (Math.random() > 0.5 ? 0 : 90))
      .fontSize(d => d.size)
      .on("end", setWordElements);

    layout.start();
  }, [data]);

  return (
    <svg width={300} height={200}>
      <g transform="translate(150,100)">
        {wordElements.map((d, i) => (
          <text key={i} x={d.x} y={d.y} fontSize={d.size} textAnchor="middle" fill="black">
            {d.text}
          </text>
        ))}
      </g>
    </svg>
  );
};

export default WordCloud;
