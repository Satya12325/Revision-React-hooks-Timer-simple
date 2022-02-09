import "./styles.css";
import Timer from "./Components/Timer";
export default function App() {
  return (
    <div className="App">
      <Timer initial={0} end={10} />
    </div>
  );
}
