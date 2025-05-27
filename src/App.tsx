import { DayPicker } from "react-day-picker";

export default function App() {
  return (
    <>
      <button
        popoverTarget="rdp-popover"
        className="input input-border"
        style={{ anchorName: "--rdp" } as React.CSSProperties}
      >
        {"Pick a date"}
      </button>
      <div
        popover="auto"
        id="rdp-popover"
        className="dropdown"
        style={{ positionAnchor: "--rdp" } as React.CSSProperties}
      >
        <DayPicker className="react-day-picker" mode="range" />
      </div>
    </>
  );
}
