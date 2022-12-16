import React from 'react'
import Description from './Description'

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Anabel",
            city: "RI",
            counter: 0
        }
        this.increment = this.increment.bind(this)
    }

    increment() {       
        this.setState({
            counter: this.state.counter + 1
        })
        console.log('COUNTER ', this.state.counter)
    }

    render() {
        return(
            <>
                <p>Counter: {this.state.counter}</p>
                <button onClick={() => this.increment()}>Increment</button>
                <Description name={this.state.name} random={'THIS IS A RANDOM STRING'}/>
            </>
        )
    }
}

export default Card