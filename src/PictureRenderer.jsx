import React from 'react'

export default class Picture extends React.Component{
    constructor(props){
        super(props);
        console.log(props.value.thumbnail)
        this.state = {
            value: this.props
        }

    }
    render(){
        return (
            <div><img src = {this.props.value.thumbnail}/></div>
        )
    }
}