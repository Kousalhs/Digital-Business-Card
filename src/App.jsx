import ProfileCard from "./components/ProfileCard";
import ThemeToggle from "./components/ThemeToggle";
import useTheme from "./hooks/useTheme";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <main className="page">
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      <ProfileCard />
    </main>
  );
}
