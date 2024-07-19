import "./App.css";
import Navbar from "./component/Navbar";
import Info from "./component/Info";

function App() {
  return (
    <div className="bg-[url('./assets/background.png')] h-[100vh] w-[100vw] text-white">
      <Navbar />
      <Info />
    </div>
  );
}

export default App;
