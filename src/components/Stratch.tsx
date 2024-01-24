import { useAppDispatch, useAppSelector } from "@/redux/store/store"
import { incremenetByAmount, increments } from "@/redux/testSlice"


type Props = {}

export default function Stratch({}: Props) {
  const {data} = useAppSelector(state => state.test)
  const dispatch  = useAppDispatch()
  return (
    <div>
      <div>stratch</div>
      <div>{data}</div>
      <button onClick={() => dispatch(increments())}>increment</button>
      <button onClick={() => dispatch(increments())}>decrement</button>
      <button onClick={() => dispatch(incremenetByAmount(5))}>increment by 5</button>
    </div>
  )
}