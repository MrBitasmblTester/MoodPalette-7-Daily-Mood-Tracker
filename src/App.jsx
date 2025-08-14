import React, { useState, useEffect } from "react";
import MoodSelector from "./components/MoodSelector";
import CalendarHeatmap from "./components/CalendarHeatmap";
import { loadEntries, saveEntries } from "./utils/storage";
import "./App.css";

export default function App() {
  const [entries, setEntries] = useState(loadEntries());

  useEffect(() => { saveEntries(entries); }, [entries]);

  const handleSelect = m => {
    const date = new Date().toISOString().slice(0,10);
    setEntries([...entries.filter(e=>e.date!==date), { date, color: m.color }]);
  };

  return (
    <div className="app">
      <h1>MoodPalette</h1>
      <MoodSelector onSelect={handleSelect} />
      <CalendarHeatmap entries={entries} />
    </div>
  );
} 