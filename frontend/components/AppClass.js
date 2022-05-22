import React from 'react'

export default class AppClass extends React.Component {
  constructor() {
    super();
    this.state = {
      x:2 ,
      y:2 ,
      steps: 0,
      email: '',
      errorMessage: ''
    }
  }

  takeStep = evt => {
    const {id} = evt.target
    if ((this.state.x === 3 && id === "right")
      || (this.state.y === 3 && id === "down")
      || (this.state.x === 1 && id === 'left')
      || (this.state.y === 1 && id === "up")
      )
      {
        this.setState({errorMessage:`You cant' go ${id}`})
      }
    else {
      this.moveAxis(evt.target)
    }
  }

  moveAxis = (props) => {
    const { name, id } = props
    if (id === 'right' || id === 'down'){
      this.setState({
        [name]: this.state[name] + 1
      })
      }
      else {
        this.setState({
          [name]:this.state[name] - 1
        })
      }
    
  }

  render() {
    const { className } = this.props
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">Coordinates ({`${this.state.x}, ${this.state.y}`})</h3>
          <h3 id="steps">You moved {this.state.steps} times</h3>
        </div>
        <div id="grid">
        <div className={`square ${ ( this.state.x == 1 && this.state.y == 1 ) ?' active' : ''}`}>
          {( this.state.x == 1 && this.state.y == 1 ) ? 'B' : ''}</div>
        <div className={`square ${ ( this.state.x == 2 && this.state.y == 1 ) ?' active' : ''}`}>
          {( this.state.x == 2 && this.state.y == 1 ) ? 'B' : ''}</div>
        <div className={`square ${ ( this.state.x == 3 && this.state.y == 1 ) ?' active' : ''}`}>
          {( this.state.x == 3 && this.state.y == 1 ) ? 'B' : ''}</div>
        <div className={`square ${ ( this.state.x == 1 && this.state.y == 2 ) ?' active' : ''}`}>
          {( this.state.x == 1 && this.state.y == 2 ) ? 'B' : ''}</div>
        <div className={`square ${ ( this.state.x == 2 && this.state.y == 2 ) ?' active' : ''}`}>
          {( this.state.x == 2 && this.state.y == 2 ) ? 'B' : ''}</div>
        <div className={`square ${ ( this.state.x == 3 && this.state.y == 2 ) ?' active' : ''}`}>
          {( this.state.x == 3 && this.state.y == 2 ) ? 'B' : ''}</div>
        <div className={`square ${ ( this.state.x == 1 && this.state.y == 3 ) ?' active' : ''}`}>
          {( this.state.x == 1 && this.state.y == 3 ) ? 'B' : ''}</div>
        <div className={`square ${ ( this.state.x == 2 && this.state.y == 3 ) ?' active' : ''}`}>
          {( this.state.x == 2 && this.state.y == 3 ) ? 'B' : ''}</div>
        <div className={`square ${ ( this.state.x == 3 && this.state.y == 3 ) ?' active' : ''}`}>
          {( this.state.x == 3 && this.state.y == 3 ) ? 'B' : ''}</div>
        </div>
        <div className="info">
          <h3 id="message">{this.state.errorMessage}</h3>
        </div>
        <div id="keypad">
          <button onClick={this.takeStep} name='x' id="left">LEFT</button>
          <button onClick={this.takeStep} name='y' id="up">UP</button>
          <button onClick={this.takeStep} name='x' id="right">RIGHT</button>
          <button onClick={this.takeStep} name='y' id="down">DOWN</button>
          <button id="reset">reset</button>
        </div>
        <form>
          <input id="email" type="email" placeholder="type email"></input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    )
  }
}
