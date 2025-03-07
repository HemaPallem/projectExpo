import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";

const SentimentBarChart = ({ sentimentData }) => {
  console.log("Rendering Sentiment Chart with data:", sentimentData); // ✅ Debugging

  if (!sentimentData || Object.keys(sentimentData).length === 0) return <p className="text-gray-500">No sentiment data available.</p>;

  const data = [
    { name: "Positive", value: parseFloat(sentimentData.positive) || 0, color: "#34D399" },
    { name: "Neutral", value: parseFloat(sentimentData.neutral) || 0, color: "#D1D5DB" },
    { name: "Negative", value: parseFloat(sentimentData.negative) || 0, color: "#EF4444" },
  ];

  return (
    <div className="w-full min-h-[300px] bg-gray-100 rounded-lg p-4">
      <h3 className="font-bold text-lg text-gray-700">Sentiment Distribution</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} layout="vertical">
          <XAxis type="number" domain={[0, 100]} />
          <YAxis type="category" dataKey="name" width={80} />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" barSize={30}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SentimentBarChart;
