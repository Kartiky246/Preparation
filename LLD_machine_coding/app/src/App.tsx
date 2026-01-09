import './App.css'
import { Feature } from './shared/components/Feature'
import { FeatureTypes } from './shared/constants/Features'
import ListingGrid from "./shared/components/ListingGrid/ListingGrid"



function App() {
  return (
   <div className='app'>
      <Feature featureKey={FeatureTypes.COUNTER_BUTTON}>
         <button>Click me</button>
      </Feature>
      <ListingGrid></ListingGrid>
   </div>
  )
}

export default App
