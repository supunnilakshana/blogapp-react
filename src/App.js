import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Headerbar from "./components/Headerbar/Headerbar";
import Post from "./components/Pages/Post";

function App() {
  return (
    <div className="appbg">
      <Headerbar />
      <Post />
    </div>
  );
}

export default App;
