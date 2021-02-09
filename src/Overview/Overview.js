import "../Styles/styles.css";

function Overview() {
  
        return(
            <div className="overview">
              <h3 className="title">Overview</h3>
              <div className="row-container">
              <div className="row1">
              <div className="description">
                   <span>Description </span>
                   <span className="Grrey">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</span>
            </div>
            <div className="location">
            <span className="loc">Location</span>
            <span className="Grrey3"> 12.423,4454 </span>
                </div>
            
              </div>
              <div className="row">
              <span>Status</span>
              <span className="Grrey1">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</span>
              </div>
              </div>
              </div>
            
            

           
        );
    
}

export default Overview;