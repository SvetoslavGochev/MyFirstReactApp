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

   decrementCounter() {
      // this.setState({count: this.state.count - 1})
       this.setState(prevState => ({count: prevState.count - 1}))
   }
   incrementCounter() {
      this.setState(prevState => ({count: prevState.count +1}))
   }
    render(){
        return (
           <div className="counter">
               <h3>{this.state.colectionName} Count</h3>
               <button onClick={(e) => this.decrementCounter}>-</button>
               <span>{this.state.count}</span>
               {/* <button onClick={(e) => this.setState((oldState) => ({count: oldState.count + 1}))}>+</button> */}
               <button onClick={this.incrementCounter.bind(this)}>+</button>

           </div>
        );
    }

}

export default Counter;