import React from "react";

const moods = [
  { label: "😃", value: "happy", color: "#FFEB3B" },
  { label: "😞", value: "sad", color: "#2196F3" }
];

export default function MoodSelector({ onSelect }) {
  return (
    <div>
      {moods.map(m => (
        <button key={m.value} style={{ background: m.color, margin: "4px", fontSize: "24px" }} onClick={() => onSelect(m)}>
          {m.label}
        </button>
      ))}
    </div>
  );
}