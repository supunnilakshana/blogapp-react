import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Headerbar from "./components/Headerbar/Headerbar";
import addpost from "./repositories/blogrepositories";
import { useEffect, useState } from "react";
import TestPage from "./Test/testcomponet";
import Post from "./components/Pages/Post";

function App() {
// const [loading,setLoading]=useState(true);
//   useEffect(() => {
//     const timer=setInterval(() => {
//       addpost().then((response)=>{

//         setLoading(false);
//          console.log(response);
//        });
//     }, 3000);
  
//   }, []);


  return (
    <div className="appbg">
      <Headerbar />
      <Post />
    </div>
  );
}

export default App;
