import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [jokes, setJokes] = useState(0)


  let jokesFunction=async()=>{

    try {

      let res= await axios.get("/api/jokes")
      setJokes(res.data)
      
    } catch (error) {
      console.log(error);
      
    }

  }

  useEffect(() => {
   jokesFunction()
  }, [])
  

  return (
<>
<h2>Chai and full stack</h2>

<div>
  {
    jokes.map((e)=><div key={e.id}>
      <h2>{e.text}</h2>
    </div>)
  }
</div>

</>

     )
}

export default App
