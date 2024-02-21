import React from "react"

class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    render(){
        return (
            <div>
                <h2>{this.props.name}</h2>
                <h3>Count: {this.state.count}</h3>
                <h4>contact</h4>
                <button type="button" onClick={()=>{
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>CountIncrease</button>
            </div>
          )
    }
}
export default UserClass;