import "../Styles/styles.css";
import curve from "../assets/images/curve.png";
function CellFrequency (){
 
  return(
    <div className="jasontable" onLoad={()=>jason1()}>
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
  let text = '{"cellFrequency":[' +
  '{"key":"Frequency Center","value":"+28.000" },' +
  '{"key":"Actual","value":"+42.000" },' +
  '{"key":"Upper","value":"+30.000" },' +
  '{"key":"Lower","value":"+14.000" },' +
  '{"key":"Delta","value":"+16.000" }]}';
  
  let obj = JSON.parse(text);
  let ele = document.getElementsByClassName("curveleft")[0].innerHTML;
  let tr = "";
  for(let i=0;i<5;i++){
    tr=tr+"<div style='display:flex;'><div style='width:100px;padding:10px 80px'><b>"+obj.cellFrequency[i].key+"</b></div><div style='padding:10px;'>"+obj.cellFrequency[i].value+"</div></div>";
  }
  document.getElementsByClassName("curveleft")[0].innerHTML = ele + tr;



  
}

export default CellFrequency;