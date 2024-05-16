import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import Rockimage from './assets/Rock.png'
import Paperimage from './assets/Paper.png'
import Scissorimage from './assets/Scissor.png'
import { useRef } from 'react'
import Navbar from './Component/Navbar'

function App() {
  const [curr_choice, setcurr_choice] = useState()
  const [userchoice , setUserChoice] = useState('')
  const [computerchoice, setcomputerchoice] = useState("")
  const [winner, setWinner] = useState("")

  const ref = useRef(0)

  const gameLogic = () => {
    setWinner("")
    let com_choice = Math.floor( Math.random() *3 )+1
    setcomputerchoice(com_choice)
    if(userchoice == com_choice) {
      setWinner("None Its Draw")
    }
    else if((com_choice ==1 && curr_choice== 2) || (com_choice ==2 && curr_choice== 3) || (com_choice ==3 && curr_choice== 1) ){
      setWinner("User")
    }else{
      setWinner("Computer")
    }
  }
  useEffect(() => {
    ref.current = ref.current + 1

    if(ref.current > 2 ){
      gameLogic();
    }
    
  },[curr_choice])

  const setUserSelection = (choice) => {
    setUserChoice(choice)
    setcurr_choice(choice)
  }
  return (
    <>
    <div>
      <Navbar/>
    <div className="app-container">
      <h2>Rock Paper Scissor</h2>
      <div className="app">
        <div>
          {
            ref.current > 2 ?  {winner} ? <h1 style={{fontSize : '30px'}}>Winner is : <span style={{color : 'crimson'}}>{winner}</span></h1> : <></> : <h2 style={{fontSize : '30px'}}>Make A Choice</h2>
          }
        </div>
        <div className="button-container">
        <button onClick={() => setUserSelection(1)}>Rock</button>
        <button onClick={() => setUserSelection(2)}>Paper</button>
        <button onClick={() => setUserSelection(3)}>Scissors</button>
        </div>
        <div className="show-container">
          <div style={{marginTop:'20px', display:'flex', alignItems:'center', justifyContent:'center'}}>
            <span style={{fontSize : '25px'}}> User Select : </span>{userchoice === 1 ? <img src= {Rockimage} style={{width : '40px', borderRadius: '50%'}}/> : userchoice === 2 ? <img src= {Paperimage} style={{width : '40px', borderRadius: '50%'}}/> : <img src= {Scissorimage} style={{width : '40px', borderRadius: '50%'}}/>}
            </div>
            <div style={{marginTop:'20px' , display:'flex', alignItems:'center', justifyContent:'center'}}>
            <span style={{fontSize : '25px'}}> Computer Select : </span>{computerchoice === 1 ? <img src= {Rockimage} style={{width : '40px', borderRadius: '50%'}}/> : computerchoice === 2 ? <img src= {Paperimage} style={{width : '40px', borderRadius: '50%'}}/> : <img src= {Scissorimage} style={{width : '40px', borderRadius: '50%'}}/>} 
            </div>
        </div>
        <div>
        </div>
      </div>
    </div>  
    </div>
    </>
  )
}

export default App
