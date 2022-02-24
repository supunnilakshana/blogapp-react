import logo from "./logo.svg";
import "./App.css";
import Headerbar from "./components/Headerbar/Headerbar";
import addpost from "./repositories/blogrepositories";
import { useEffect, useState } from "react";
import TestPage from "./Test/testcomponet";

function App() {
const [loading,setLoading]=useState(true);
  useEffect(() => {
    const timer=setInterval(() => {
      addpost().then((response)=>{

        setLoading(false);
         console.log(response);
       });
    }, 3000);
  
  }, []);


  return (
    <div className="appbg">
   <Headerbar />

    </div>
  );
}

export default App;
