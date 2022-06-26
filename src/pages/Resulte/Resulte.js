import React ,{useEffect}from 'react'
import {useNavigate} from 'react-router-dom'
import './Resulte.css'
function Resulte({name,score , setScore}) {

  const navigate=useNavigate();
  useEffect(
    ()=>{
      if(!name){
        navigate('/')
      }
    },[name , navigate])
    const handleAgine=()=>{
      navigate('/');
      setScore(0);
    }
  return (
    <div className='result'>
        <span className='result-title'>Final Score: {score}</span>
        <button onClick={handleAgine}>Go to homepage</button>
    </div>
  )
}

export default Resulte
