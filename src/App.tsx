import "./App.css"
import { addEvent } from "./redux/features/event/eventSlice"
import { useAppSelector, useAppDispatch } from "./redux/hooks"

const App = () => {
  const dispatch = useAppDispatch()
  const events = useAppSelector(state => state.eventState.value)

  return (
    <div className="App">
      <header className="App-header">
        {events.map((event, index) => (
          <div key={index}>{JSON.stringify(event)}</div>
        ))}
        <div className="text-yellow-500">Test</div>
        <button
          onClick={() => {
            dispatch(addEvent({ id: "1", endTime: "2", startTime: "4" }))
          }}
        >
          Add Event
        </button>
      </header>
    </div>
  )
}

export default App
