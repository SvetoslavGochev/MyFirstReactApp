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

        this.resetCounter = this.resetCounter.bind(this);
//tova e za rezet da e bez , za vsi4ki da ne se pi6e .bind(this);
    }

   decrementCounter(e) {
      // this.setState({count: this.state.count - 1})
       this.setState(prevState => ({count: prevState.count - 1}))
   }

   incrementCounter(e) {
      this.setState(prevState => ({count: prevState.count +1}))
   }

   resetCounter() {
       this.setState({count: 0})
   }
   

    render(){
        return (
           <div className="counter">
               <h3>{this.state.colectionName} Count</h3>
               <button onClick={(e) => this.decrementCounter(e)}>-</button>
               <span>{this.state.count}</span>
               {/* <button onClick={(e) => this.setState((oldState) => ({count: oldState.count + 1}))}>+</button> */}
               <button onClick={this.incrementCounter.bind(this)}>+</button>

               <button onClick={this.resetCounter.bind(this)}>Reset</button>
               <button onClick={this.resetCounter}>Reset</button>

           </div>
        );
    }

}

export default Counter;