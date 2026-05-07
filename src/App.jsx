import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';
import data from './data.json'
import ArtistList from './components/ArtistList'

function App() {
  return (
    <>
      <Header labelTitle={data.label}/>
      <Hero tagline={data.tagline} city={data.city} founded={data.founded}/>
      <ArtistList artists={data.artists}/>
    </>
  )
}

export default App
