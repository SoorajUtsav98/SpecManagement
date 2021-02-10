import "../Styles/styles.css";
import curve from "../assets/images/curve.png";
function CellFrequency (){
 
  return(
    <div className="jasontable"   onLoad={()=>jason1()}>
      <div className="cellFrequency">
      <h3 className="title">Cell Frequency</h3>
       <div className="curveleft">
          <div>
            <img className="curve" src={curve} alt="curve" />
         </div>
       </div>
       </div>
    </div>
  );
}

function jason1() {
  fetch("https://api.jsonbin.io/b/602403223b303d3d964eb7f0", {
  "method": "GET",
  "headers":{}
})
.then(response => response.json())
.then(response => {
 console.log(response)
 let obj=response;
 let ele = document.getElementsByClassName("curveleft")[0].innerHTML;
 let tr = "";
 for(let i=0;i<5;i++){
   tr=tr+"<div style='display:flex;'><div style='width:100px;padding:10px 80px'><b>"+obj.cellFrequency[i].key+"</b></div><div style='padding:10px;'>"+obj.cellFrequency[i].value+"</div></div>";
 }
 document.getElementsByClassName("curveleft")[0].innerHTML = ele + tr;

})
.catch(err => { console.log(err); 
});

 
}

export default CellFrequency;