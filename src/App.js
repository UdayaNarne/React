import React from "react";
import Navbar from "./components/Navbar"
import {useState} from "react"
import TextForm from "./components/TextForm"
import Alert from "./components/Alert"
import About from "./components/About"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState("light");
  const [alert,setAlert]=useState(null);
  const [color,setColor]=useState("primary");
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      typ:type,
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
    
  }
  const customTheme=(color,message,mode)=>{
    setColor(color);
    if(color==="danger"){
      document.body.style.backgroundColor="#FF8282";
      document.title=`TextUtils - ${mode} red Mode`;
    }
    else if(color==="success"){
      document.body.style.backgroundColor="#A8E6CE";
      document.title=`TextUtils - ${mode} green Mode`;
    }
    else if(color==="primary"){
      document.body.style.backgroundColor="#A7C6ED";
      document.title=`TextUtils - ${mode} blue Mode`;
    }
    else if(color==="warning"){
      document.body.style.backgroundColor="#FFEA82";
      document.title=`TextUtils - ${mode} yellow Mode`;
    }
    else{
      document.body.style.backgroundColor="white";
      document.title=`TextUtils - ${mode} light Mode`;
    }
    showAlert(`${message} has been enabled `,"success");
  }
  const onRedClick=()=>customTheme("danger","Red",mode);
  const onGreenClick=()=>customTheme("success","Green",mode);
  const onBlueClick=()=>customTheme("primary","Blue",mode);
  const onYellowClick=()=>customTheme("warning","Yellow",mode);
  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="#03346E";
      showAlert("Dark mode has been enabled","success");
      document.title="TextUtils - Dark Mode";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="#F4F8D3";
      showAlert("Light mode has been enabled","danger");
      document.title="TextUtils - Light Mode";
    }
  }
  return (
    <Router>
      
      <Navbar mode={mode} toggleMode={toggleMode} clicks={{onBlueClick,onGreenClick,onRedClick,onYellowClick}}/>
      <Alert alert={alert}/>
      <div className="container my-5">
      
        <Routes>
          <Route path="/about" element={<About mode={mode} color={color}/>}/>
          <Route path="/" element={<TextForm heading="Enter the text to analyze" alert={showAlert} mode={mode} color={color}/> }/>
        </Routes>        
      </div>
    </Router>
  );
}
export default App;
