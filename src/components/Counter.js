import {
    Component
} from "react";

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 11,
            colectionName: 'My Books'
        }
    }

    render(){
        return (
           <div className="counter">
               <h3>{this.state.colectionName} Count</h3>
               <button onClick={(e) => this.setState((oldState) => ({count: oldState.count - 1}))}>-</button>
               <span>{this.state.count}</span>
               <button onClick={(e) => this.setState((oldState) => ({count: oldState.count + 1}))}>+</button>

           </div>
        );
    }

}

export default Counter;