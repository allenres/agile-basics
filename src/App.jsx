import './App.css'
import Header from './components/Header';
import data from './data.json'
function App() {
  console.log(data)
  return (
    <>
      <Header labelTitle={data.label}/>
    </>
  )
}

export default App
