import React, {useState} from 'react';
import hamburger from "../../assets/images/hamburger.jpg";

const Sidepannel = () => {
const [open,setOpen] = useState(["hamburger"]);

    const openNav = (open) => {
        let openValue = open.find((variable)=> variable==="show_sidepanel");
        if(openValue){
            const elementCopy = [...open];
            elementCopy.pop();
            setOpen(elementCopy);
        }
        else{
            const elementCopy = [...open];
            elementCopy.push("show_sidepanel");
            setOpen(elementCopy); 
        }
    }

    return (
            <div>
                <div id="mySidepanel" className={open.join(" ")} >
                <a href="#" className="closebtn" onClick={()=>openNav(open)}>&times;</a>
                </div>
                <div className="hamburger1" onClick={()=>openNav(open)}>
                <img className="hamimg" src={hamburger} alt="ham" />
                </div>
            </div>
    )
}

export default Sidepannel;