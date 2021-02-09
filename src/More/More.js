import React,{useState} from "react";

const More = () => {
    const [open,setOpen] = useState("more");
    const myFunction = () => {

       

        if(open==="more"){
            setOpen("less"); 
        }
        else{
            setOpen("more"); 
        }

        // let btnText = document.getElementById("myBtn");
          
        // document.getElementsByClassName("communication")[5].classList.toggle("more");
        // if(btnText.innerHTML==="more"){
        //   btnText.innerHTML="less";
        // }
        // else{
        //   btnText.innerHTML="more";
        // }
      }

    return(
        <div>
           
        </div>
    );
    
}

export default More;