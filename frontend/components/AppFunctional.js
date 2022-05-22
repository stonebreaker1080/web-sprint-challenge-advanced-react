import React, { useState } from 'react'
import axios from 'axios'


export default function AppFunctional(props) {

  const [ gridValues , setGridValues ] = useState({x: 2, y: 2})
  const [ errorMessage, setErrorMessage ] = useState('')
  const [ moveCount, setMoveCount ] = useState (0)
  const [ emailInput, setEmailInput ] = useState('')

  
  const moveXAxis = evt => {
    const {name, value, id} = evt.target

    if((gridValues.x === 1 && id==='left' )|| 
      (gridValues.x === 3) && id==='right'){
      setErrorMessage(`You can't go ${id}`)
    }
    else{
      changeMoveCount({...gridValues,[name]:gridValues.x + Number(value)})
    }
  }

  const moveYAxis = evt => {
    const {name, value, id} = evt.target

    if((gridValues.y === 1 && id==='up' )|| 
      (gridValues.y === 3) && id==='down'){
      setErrorMessage(`You can't go ${id}`)
    }
    else{
      changeMoveCount({...gridValues,[name]:gridValues.y + Number(value)})
    }
  }

  const changeMoveCount = (props) => {
   setMoveCount(moveCount +  1)
   setGridValues(props)
   setErrorMessage('')
  }

  const resetGrid = () => {
    setMoveCount(0)
    setGridValues({x: 2, y: 2})
  }

  const submitGrid = evt => {
    const submitJSON = {...gridValues, 'steps':moveCount, 'email': emailInput}
    const testJson = {x:1, y:2, steps:3, email:'lady@gaga.com'}
    console.log(submitJSON)
    console.log(testJson)
    axios.post('http://localhost:9000/api/result/', {testJson})
    // axios.post('http://localhost:9000/api/result/', {submitJSON})
    //   .then((resp) => {
    //     console.log(resp)
    //   })
    //   .catch(console.error('not good'))
      evt.preventDefault()

      
  }

  const updateEmail = evt => {
      setEmailInput(evt.target.value)
  }

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">Coordinates ({`${gridValues.x}, ${gridValues.y}`})</h3>
        <h3 id="steps">You moved {moveCount} times</h3>
      </div>
      <div id="grid">
        <div className={`square ${ ( gridValues.x == 1 && gridValues.y == 1 ) ?' active' : ''}`}>
          {( gridValues.x == 1 && gridValues.y == 1 ) ? 'B' : ''}</div>
        <div className={`square ${ ( gridValues.x == 2 && gridValues.y == 1 ) ?' active' : ''}`}>
          {( gridValues.x == 2 && gridValues.y == 1 ) ? 'B' : ''}</div>
        <div className={`square ${ ( gridValues.x == 3 && gridValues.y == 1 ) ?' active' : ''}`}>
          {( gridValues.x == 3 && gridValues.y == 1 ) ? 'B' : ''}</div>
        <div className={`square ${ ( gridValues.x == 1 && gridValues.y == 2 ) ?' active' : ''}`}>
          {( gridValues.x == 1 && gridValues.y == 2 ) ? 'B' : ''}</div>
        <div className={`square ${ ( gridValues.x == 2 && gridValues.y == 2 ) ?' active' : ''}`}>
          {( gridValues.x == 2 && gridValues.y == 2 ) ? 'B' : ''}</div>
        <div className={`square ${ ( gridValues.x == 3 && gridValues.y == 2 ) ?' active' : ''}`}>
          {( gridValues.x == 3 && gridValues.y == 2 ) ? 'B' : ''}</div>
        <div className={`square ${ ( gridValues.x == 1 && gridValues.y == 3 ) ?' active' : ''}`}>
          {( gridValues.x == 1 && gridValues.y == 3 ) ? 'B' : ''}</div>
        <div className={`square ${ ( gridValues.x == 2 && gridValues.y == 3 ) ?' active' : ''}`}>
          {( gridValues.x == 2 && gridValues.y == 3 ) ? 'B' : ''}</div>
        <div className={`square ${ ( gridValues.x == 3 && gridValues.y == 3 ) ?' active' : ''}`}>
          {( gridValues.x == 3 && gridValues.y == 3 ) ? 'B' : ''}</div>
      </div>
      <div className="info">
        <h3 id="message">{errorMessage}</h3>
      </div>
      <div id="keypad">
        <button onClick={moveXAxis} name='x' value='-1' id="left">LEFT</button>
        <button onClick={moveYAxis} name='y' value='-1' id="up">UP</button>
        <button onClick={moveXAxis} name='x' value='1' id="right">RIGHT</button>
        <button onClick={moveYAxis} name='y' value='1' id="down">DOWN</button>
        <button onClick={resetGrid} id="reset">reset</button>
      </div>
      <form>
        <input onChange={updateEmail} id="email" type="email" placeholder="type email"></input>
        <input onClick={submitGrid} id="submit" type="submit"></input>
      </form>
    </div>
  )
}
