import {Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import ContactUs from './components/ContactUs'
import './App.css'

const App = () => (
  <div className="app-container">
    <div className="nav-container">
      <Header />
      <div className="body-container">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/contact" element={<ContactUs/>}/>
        </Routes>
      </div>
    </div>
  </div>
)
export default App
