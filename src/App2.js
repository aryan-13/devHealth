import Nav from "./components/core/Nav";
import Score from "./components/core/Score";
import Sidebar from "./components/core/Sidebar";
import TimerClock from "./components/core/TimerClock";
import Toggles from "./components/core/Toggles";
import './css/style.css';


function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Sidebar></Sidebar>
      <TimerClock hours="00" minutes="20" seconds="00"></TimerClock>
      <Toggles/>
      <Score/>
    </div>
  );
}

export default App;
