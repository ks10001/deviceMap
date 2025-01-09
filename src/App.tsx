import DeviceMap from './components/DeviceMap'
import { devices } from './data/devices'
import './App.css'

function App() {
  return (
    <div className="App">
      <DeviceMap devices={devices} />
    </div>
  )
}

export default App
