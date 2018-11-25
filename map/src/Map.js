import React, {Component} from "react";
import indy1 from './images/indy.png';

class Map extends Component {

    render() {
        return (
            <div>
            <div className="nav">Map</div>
            <div className="container">
                <img classname="picture" src={indy1} alt="Snow" />
               <button class="btn"></button>

            </div>
            </div>
          );
        }
    }


export default Map;