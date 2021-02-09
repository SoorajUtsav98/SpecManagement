import "../../Styles/styles.css";

function Communication (props){

    
        return(
            <div className="communication">

                <div className="card">
                    <div className="card-header">
                        <img className="card-image" src={props.image} alt="ie" />
                        <h4 className="card-title">{props.title}</h4>
                        <div className="right-titlemed">{props.rightTitle}</div>
                    </div>
                    <div className="card-content">
                        <p className="main-card-content">
                       {props.content}

                        </p>
                        <div className="bottomcon">
                             <span className="status">{props.status}</span>
                             <span className="last-updated">{props.lastUpdate}</span>
                        </div>
                    </div>
                </div>
             </div>

        );
    
    
}

export default Communication;