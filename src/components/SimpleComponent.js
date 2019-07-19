// Code SimpleComponent Here
import React, {Component} from 'react';

export default class SimpleComponent extends Component {
  constructor() {
    super()
    this.state = {
      mood: "happy"
    }
  }

  render() {
    return (
      <div onClick={this.handleClick}>{(this.state.mood === "happy") ? "happy" : "sad"}</div>
    )
  }

  handleClick = () => {
    this.setState({
      mood: this.state.mood === "happy" ? "sad" : "happy"
    })
  }

}