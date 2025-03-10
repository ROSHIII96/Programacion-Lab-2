import { useCounter } from "../Hooks/useCounter"
export function Counter() {
    const {count, increaseCount, dicreaseConunt} = useCounter()
    //El codigo no deja utilizar dos div
  return (
    <div className = "buttons">
        <p>{count}</p>
        <button onClick={increaseCount}>
          ➕
        </button>
        <button onClick={dicreaseConunt}>
          ➖
        </button>
      </div>
  )
}