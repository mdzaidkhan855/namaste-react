import React from "react"


class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state={
            count:0
        }
        console.log("Constructor called");
    }

    // Actually this is the wherein we make API call
    componentDidMount(){

        console.log("Component Did MOUNT called");

        this.setState({
            count: this.state.count + 1
        })

    }
    componentDidUpdate(){
        console.log("Component Did UPDATE called");
    }

    componentWillUnmount(){
        console.log("Component got Unmounted");
    }
    render(){
        console.log("Render method called with state count :" + this.state.count);
        return (
            <div>
                <h2>{this.props.name}</h2>
                <h3>Count: {this.state.count}</h3>
                <h4>contact</h4>
                
            </div>
          )
    }
}
export default UserClass;