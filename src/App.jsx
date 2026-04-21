import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';
import data from './data.json'
function App() {
  console.log(data)
  return (
    <>
      <Header labelTitle={data.label}/>
      <Hero tagline={data.tagline} city={data.city} founded={data.founded}/>
    </>
  )
}

export default App
