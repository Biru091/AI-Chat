import Home from "./pages/Home"
import { ChatProvider } from "./chatProvider/Chatprovider"

function App() {

  return (
    <>
      <ChatProvider>
        <Home />

      </ChatProvider>
    </>
  )
}

export default App
