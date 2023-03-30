import Header from './components/Header'
import Footer from './components/Footer'

import Homescreen from './screens/Homescreen'
function App() {
  return (
    <div>
    <Header />
    
      <main className="py-3">
        <Homescreen />
      </main>
   
    <Footer /> 
    </div>
  )
}

export default App;
