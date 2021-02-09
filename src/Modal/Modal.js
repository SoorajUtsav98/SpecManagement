import React, {useState} from 'react';
import "../Styles/styles.css";

const Modal = () => {
    const [modee,setState] = useState(["modal1"]);   
   
        const box = (modee) =>{
            console.log("Hii");
            let toggleValue = modee.find((variable)=> variable==="mod1" );
            if(toggleValue){
                console.log("iff");
                const mod = [...modee];
                mod.pop();
                setState(mod);
                toggleValue=null; 
            }
            else{
                console.log("elsee");
                const mod = [...modee];
                mod.push("mod1");
                setState(mod);
            }

 }
return (
    <div>
        <button  className="Createticket" onClick={()=>box(modee)}>
            Create Ticket
        </button>
        <div id="myModal" className={modee.join(" ")} >
            <div className="modal-content">
            <span className="close" onClick={()=>box(modee)}>&times;</span>
            </div>
        </div>
    </div>
 )
}

export default Modal;