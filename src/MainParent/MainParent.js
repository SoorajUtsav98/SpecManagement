import "../Styles/styles.css";
import Sidebar from "../Sidebar/Sidebar";
import MainSection from "../MainSection/MainSection";

function MainParent() {
 
        return(
            <div className="main-parent">
                <Sidebar />
                <MainSection/>
            </div>
        );
    
}

export default MainParent;