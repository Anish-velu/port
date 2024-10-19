import "./App.css";
import Switch from "./components/info_outlet/switch.jsx";
import Profile from "./components/profile_outlet/Profile.jsx";
import CustomCursor from "./components/CustoemCursor.jsx";
import Know_Me from "./components/about/know_me.jsx";
import Projects from "./components/Projects/Projects.jsx";

function App() {
  return (
    <div className="App">
      <CustomCursor />
      <Profile />
      <Switch />
      <Know_Me />
      <Projects />
    </div>
  );
}

export default App;
