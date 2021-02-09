import "../Styles/styles.css";
import Communication from "./Communication/Communication";
import slackmessage from "../assets/images/slackmessage.png";
import rhombus from "../assets/images/rhombus.png";
import woman from "../assets/images/woman.png";
import man1 from "../assets/images/man1.jpg";
import {useState} from "react";

const Communications = () =>{

  const comms = [
    {
      title:"Jira Ticket Created",
      rightTitle:"Medium",
      content:"Test condirm oss for DAY Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, perspiciatis atque!",
      status:"Status: Waiting for Support",
      lastUpdate:"Last Updated: 10:00:00 PST",
      image:rhombus
    },
    {
      title:"Slack Message",
      rightTitle:"Medium",
      content:"Test condirm oss for DAY Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, perspiciatis atque!",
      status:"Status: Waiting for Support",
      lastUpdate:"Last Updated: 10:00:00 PST",
      image:slackmessage
    },
    {
      title:"Message",
      rightTitle:"Medium",
      content:"Test condirm oss for DAY Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, perspiciatis atque!",
      status:"Status: Waiting for Support",
      lastUpdate:"Last Updated: 10:00:00 PST",
      image:woman
    },
    {
      title:"Jira Ticket Moved",
      rightTitle:"Medium",
      content:"Test condirm oss for DAY Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, perspiciatis atque!",
      status:"Status: Waiting for Support",
      lastUpdate:"Last Updated: 10:00:00 PST",
      image:rhombus
    },
    {
      title:"DESK - 200",
      rightTitle:"Medium",
      content:"Test condirm oss for DAY Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, perspiciatis atque!",
      status:"Status: Waiting for Support",
      lastUpdate:"Last Updated: 10:00:00 PST",
      image:man1
    }]

        
        const data = comms.map(item=> {
          return(
            <div key={item.title}>
               <Communication title={item.title} rightTitle={item.rightTitle}
                    content={item.content}
                  status={item.status}
                  lastUpdate={item.lastUpdate}
                  image={item.image}
                />
            </div>
          );
        });

        const [open,setOpen] = useState("more");
        const [open1,setOpen1] = useState(["communication","more"]);
        const myFunction = (open1) => {
    
          let mod = open1.find(item=>item==="more");
              if(open==="more" && mod){
              setOpen("less"); 
              const element = [...open1];
              element.pop();
              setOpen1(element);
          }
          
          else{
              setOpen("more"); 
              const element = [...open1];
              element.push("more");
              setOpen1(element);
          }
        }

      return(

        <div className="communications">
                <h3 className="title">Communications</h3>
                {data}
           <div className={open1.join(" ")}>
              <div className="card">
                    <div className="card-header">
                      <img className="card-image" src={man1} />
                      <h4 className="card-title">DESK-400</h4>
                      <div className="right-titlemed">Medium</div>
                    </div>
                <div className="card-content">
                  <p className="main-card-content">
                    Test confirm OSS for DAY. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Vel, perspiciatis atque! </p>
                  <div className="bottomcon">
                    <span className="status">Status: Waiting for Support</span>
                    <span className="last-updated">Last Updated: 10:00:00 PST</span>
                  </div>
                </div>
              </div>
          </div>
            <button  className="morebutton" onClick={()=>myFunction(open1)} id="myBtn">{open}</button>
       </div>
      );
  }
          
export default Communications;
    
