import React from 'react'

class Description extends React.Component {
    constructor(props) {
        super(props)
    

    }
    render() {
        return(
            <>
                <p>This is the description</p>
                <p>{this.props.name}</p>
                <p>{this.props.random}</p>
            </>
        )
    }
}

export default Description