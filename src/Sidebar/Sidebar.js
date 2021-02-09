import "../Styles/Sidebar.css";
import layout from "../assets/images/layout.png";
import pie from "../assets/images/pie.png";
import ticket from "../assets/images/ticket.png";
import setting from "../assets/images/setting.png";

import layout1 from "../assets/images/layout1.png";
import pie1 from "../assets/images/pie1.png";
import ticket1 from "../assets/images/ticket1.png";
import setting1 from "../assets/images/setting1.png";
import {useState} from "react";

const Sidebar = () => {
  const [state,setState] = useState([layout1,pie,ticket,setting]);
  const active = (index) => {
    let imgSelected = [layout1,pie1,ticket1,setting1];
    let img = [layout,pie,ticket,setting];
    const element = [...state]
    for(let i=0;i<4;i++){
      if(i===index){
      
       element[i] = imgSelected[i];
       }
      else{
       element[i] = img[i];
      }
    }
    setState(element);
  } 

        return(
         
          <div className="sidebar">
         
            <img className="sideicon" id="0" onClick={()=>active(0)} src={state[0]} alt="layout" />
            <img className="sideicon" id="1" onClick={()=>active(1)} src={state[1]} alt="pie" />
            <img className="sideicon" id="2" onClick={()=>active(2)} src={state[2]} alt="ticket" />
            <img className="sideicon" id="3" onClick={()=>active(3)} src={state[3]} alt="setting" />
          </div>
         
        );
    
}

// onLoad={()=>act1()}


// function act1(){
//   document.getElementById("0").src=layout1;
// }
export default Sidebar;