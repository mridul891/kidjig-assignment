import "./App.css";
import Navbar from "./component/Navbar";
import Info from "./component/Info";

function App() {
  return (
    <div className="bg-[url('./assets/background.png')] no-repeat center center fixed h-[100vh] w-[100vw] bg-black text-white">
      <Navbar />
      <Info />
    </div>
  );
}

export default App;
