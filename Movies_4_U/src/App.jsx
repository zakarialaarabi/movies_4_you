import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Search from './components/Search'
function App () {
/* const [hasLiked,setHasLiked] = useState(initialState=false); */
return (
<div>
  <main>
    <div className='pattern'/>
    <div className='wraper'>
      <header>
        <img src="..\hero-img.png" alt="" />
        <h1 >
          Find <span className='text-gradient'>Movies</span> You'll Enjoy Without the Hassle 
        </h1>
      </header>
      <Search/>
    </div>
  </main>

</div>
)

}
export default App
