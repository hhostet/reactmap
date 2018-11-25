import React, {Component} from "react";
class Sidebar extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            city: { city1: [], 
                city2: []
            }
            
        }

        fetch('data/city.json')
            .then((result) => result.json())
            .then((data) => {
               console.log(data.map);
                this.setState({city: data});
            })
    }

    render() {
        return (
            <div className="sidebar">
                <h2>North</h2>
                {
                    this.state.city.city1.map((var1) => {
                        return (<p>{var1}</p>)
                    })
                }
                <br></br>
                <h2>East</h2>
                {
                    this.state.city.city2.map((var2) => {
                        return (<p>{var2}</p>)
                    })
                }
            </div>

          );
        }
    }


export default Sidebar;