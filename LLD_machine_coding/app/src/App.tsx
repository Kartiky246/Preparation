import './App.css'
import { Feature } from './shared/components/Feature'
import { FeatureTypes } from './shared/constants/Features'
import UseState from './shared/hooks/UseState'



function App() {
  return (
   <div className='app'>
      <Feature featureKey={FeatureTypes.COUNTER_BUTTON}>
         <button>Click me</button>
      </Feature>
      <UseState></UseState>
   </div>
  )
}

export default App
