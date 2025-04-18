import {useState} from 'react';
import './About.css'; 
export default function About(props){
    // const [myStyle, setMyStyle] = useState({
    //     color:"white",
    //     backgroundColor:"black"
    // });
    //const [mode,setMode]=useState("Enable Dark MOde");
    // const toggleStyle=()=>{
    //     if(myStyle.color==="white"){
    //         setMyStyle({
    //             color:"black",
    //             backgroundColor:"white"
    //         })
    //         //setMode("Enable Dark Mode");
    //     }else{
    //         setMyStyle({
    //             color:"white",
    //             backgroundColor:"black"
    //         })
    //         //setMode("Enable Light Mode");
    //     }
    // }
    return(
<>
<div className="container my-3">
<div className={`accordion`} id="accordionExample">
  <div className={`accordion-item bg-${props.mode}`} >
    <h2 className="accordion-header" style={{color:props.mode==="light"?"black":"white"}}>
      <button className={`accordion-button bg-${props.mode}`} style={{color:props.mode==="light"?"black":"white"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample" >
      <div className="accordion-body" style={{color:props.mode==="light"?"black":"white"}}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class={`accordion-item bg-${props.mode}`} >
    <h2 class="accordion-header" style={{color:props.mode==="light"?"black":"white"}}>
      <button class="accordion-button collapsed" className={`accordion-button bg-${props.mode}`} style={{color:props.mode==="light"?"black":"white"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={{color:props.mode==="light"?"black":"white"}}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class={`accordion-item bg-${props.mode}`}>
    <h2 class="accordion-header" style={{color:props.mode==="light"?"black":"white"}}>
      <button className={`accordion-button collapsed bg-${props.mode}`} style={{color:props.mode==="light"?"black":"white"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample" >
      <div class="accordion-body" style={{color:props.mode==="light"?"black":"white"}}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  </div>
  </div>
</>
    )
}