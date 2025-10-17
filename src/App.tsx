
import './App.css'
import ContactCard from './components/ContactCard'


function App() {
  

  return (
    <>
      <ContactCard 
      id={1} 
      name={'Fahad'} 
      dob={'1/25/1998'} 
      grossSalary={50000}/>
    </>
  )
}

export default App
