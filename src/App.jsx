import Chat from "./components/chat/Chat";
import Details from "./components/details/Details"
import List from "./components/list/Lists"

const App = () => {
  return (
    <div className='Container'>
      <List/>
      <Chat/>
      <Details/>
    </div>
  )
}

export default App