import "../../Styles/styles.css";

function Issues (){
  
        return(
            
            <div className="issues">
            <h3 className="title" style={{fontSize:"16px"}}>Issues</h3>
            <table className="issuesborder">
            <thead>
            </thead>
            <tbody>
              <tr className="borderb">
                <td className="pinkn"><u><b>100283</b></u></td>
                <td>[Description]</td>
                <td>[Region]</td>
                <td>Cell</td>
                <td>
                  <div className="high"> High</div>
                </td>
              </tr>
              <tr className="borderb">
                <td className="pinkn"><u><b>100283</b></u></td>
                <td>[Description]</td>
                <td>[Region]</td>
                <td>Cell</td>
                <td>
                  <div className="medium"> Medium</div>              
                </td>
              </tr>
              <tr className="borderb">
                <td className="pinkn"><u><b>100283</b></u></td>
                <td>[Description]</td>
                <td>[Region]</td>
                <td>Cell</td>
                <td>
                  <div className="low"> Low</div>
                </td>
              </tr>
              <tr className="borderb">
                <td className="pinkn"><u><b>100283</b></u></td>
                <td>[Description]</td>
                <td>[Region]</td>
                <td>Cell</td>
                <td>
                  <div className="low"> Low</div>
                </td>
              </tr>
           <tr className="borderb">
                <td className="pinkn"><u><b>100283</b></u></td>
                <td>[Description]</td>
                <td>[Region]</td>
                <td>Cell</td>
                <td>
                  <div className="low"> Low</div>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
           
        );
}

export default Issues;