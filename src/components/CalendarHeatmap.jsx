import React from "react";

export default function CalendarHeatmap({ entries }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)" }}>
      {entries.map(e => (
        <div key={e.date} title={e.date} style={{ width: "24px", height: "24px", background: e.color, margin: "2px" }} />
      ))}
    </div>
  );
}