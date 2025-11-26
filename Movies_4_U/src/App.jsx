import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function Card ({title}) {
  const [hasLiked,setHasLiked] = useState(false);
  return(
    <div className='card' >
    <h1>{title}</h1>
    <button onClick={() =>setHasLiked(!hasLiked)}>{hasLiked ? '❤️' : '🩶'}</button>
    </div>
    
  )
}
function App () {
/* const [hasLiked,setHasLiked] = useState(initialState=false); */
return (
<div  className='card-container'>

<Card title={"Avatar"}/> 
<Card title={"1917"}/>
<Card title={"Revenant"}/>
</div>
)

}
export default App
