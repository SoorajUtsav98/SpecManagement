import "../Styles/Header.css";
import hamburger from "../assets/images/hamburger.jpg";
import {useState} from 'react';
import bell from "../assets/images/bell.jpg";
import ticket from "../assets/images/ticket.png";
import Sidepannel from "../Sidepannel/Sidepannel";

const Header = () =>{
    const [toggleElement,setToggleElement] = useState(["arrow-up"]);
    const [dropElement,setDropElement] = useState(["dropdown"]);

        const toggle = (toggleElement,drop) => {
        
            let toggleValue = toggleElement.find((variable)=> variable==="mod2" );
            if(toggleValue){
                const elementCopy = [...toggleElement];
                elementCopy.pop();
                setToggleElement(elementCopy);
            }
            else{
                const elementCopy = [...toggleElement];
                elementCopy.push("mod2");
                setToggleElement(elementCopy);
            }
            let toggleValue2 = drop.find((variable)=> variable==="mod2" );
            if(toggleValue2){
                const elementCopy2 = [...drop];
                elementCopy2.pop();
                setDropElement(elementCopy2);
            }
            else{
                const elementCopy2 = [...drop]
                elementCopy2.push("mod2");
                setDropElement(elementCopy2);
            }
         }
       
       
        return(
            <header className="header">
              <Sidepannel/>
            <div>
              <span className="spectrum">SPECTRUM</span> MANAGEMENT
            </div>
            <div>
                <img className="icon11" src={ticket} alt="ticket" />
                <img className="icon inside" id="bell" onClick={()=>toggle(toggleElement,dropElement)} src={bell} alt="notify" />
                <div id="arrow" className={toggleElement.join(" ")}></div>
                <div id="drop" className={dropElement.join(" ")}></div>
                
            </div>
        </header>
    );
    
}

export default Header;