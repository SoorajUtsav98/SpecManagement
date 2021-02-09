import "../Styles/FrequencyTrend.css";
import freqgraph from "../assets/images/freqgraph.png";
function FrequencyTrend (){
        return(
            <div className="frequencyTrend">
            <h3 className="title">Frequency Trend</h3>
            <img
              src={freqgraph}
              alt="frequency Trend"
              className="graph"
            />
          </div>  
           
        );
}

export default FrequencyTrend;