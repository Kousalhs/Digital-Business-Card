import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-pressed={isDark}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? <FaSun /> : <FaMoon />}
      <span>{isDark ? "Light" : "Dark"} mode</span>
    </button>
  );
}
