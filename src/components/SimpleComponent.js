import React from 'react'

class SimpleComponent extends React.Component {
  state = {
    mood: 'happy'
  }

  toggleMood = () => {
    this.setState({mood: this.state.mood === 'happy' ? 'sad' : 'happy'})
  }

  render() {
    return <div onClick={this.toggleMood} >{this.state.mood}</div>
  }
}

export default SimpleComponent;
