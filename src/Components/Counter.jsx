import { useCounter } from "../Hooks/useCounter"
export function Counter() {
    const {count, increaseCount, dicreaseConunt} = useCounter()
    //El codigo no deja utilizar dos div
    if(count == 7){
      return (
        <div className = "buttons">
        <p><br />El {count} es el numero favorito de Joseth</p>
        <p>{count}</p>
        <div className="buttons2">
        <button onClick = {increaseCount}>
          ➕
        </button>
        <button onClick = {dicreaseConunt}>
          ➖
        </button>
        </div>
        </div>
        )
    }
    else{
  return (
    <div className = "buttons">
        <p>{count}</p>
        <div className="buttons2">
        <button onClick={increaseCount}>
          ➕
        </button>
        <button onClick={dicreaseConunt}>
          ➖
        </button>
        </div>
      </div>
  )
    }
}