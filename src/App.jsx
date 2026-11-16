import Nav from "./Components/Nav"
import Notes from "./Components/Notes"


const App = () => {
  return (
    <>
      <ContextProvider>
        <Nav />
        <Notes />
      </ContextProvider >
    </>
  )
}

export default App