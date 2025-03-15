import { useState, useEffect } from 'react'
  
export function useCounter(){
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem('count')
    return savedCount !== null ? JSON.parse(savedCount) : 0
  })

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count))
  }, [count])
  
  const dicreaseConunt = () =>{
    if(count > 0){
      setCount((count) => count - 1)
    }
  }

  const increaseCount = () =>{
    setCount((count) => count + 1)
  }
  return {count, increaseCount, dicreaseConunt}
}

