import { Assign1 } from "./components/Assign1"
import { Flex } from "./components/Flex"
import InputCode from "./components/InputCode"
import { Screen1 } from "./components/Screen1"

function App() {
  return (
    // <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
    <div>
      {/* <Flex /> */}
      {/* <Assign1 /> */}
      {/* <Screen1 /> */}
      <InputCode length={6} onComplete={true} />
    </div>
  )
}

export default App

