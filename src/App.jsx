import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './components/Homepage/Homepage'
import MyNavbar from './components/Navbar/MyNavbar'
import MyFooter from './components/Footer/MyFooter'
import AboutPage from './components/AboutPage/AboutPage'
import Contacts from './components/Contacts/Contacts'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="d-flex flex-column min-vh-100">
          <header>
            <MyNavbar />
          </header>
          <main className="flex-grow-1">
            <Routes>
              <Route path="" element={<HomePage />}></Route>
              <Route path="/About" element={<AboutPage />}></Route>
              <Route path="/Contacts" element={<Contacts />}></Route>
            </Routes>
          </main>
          <MyFooter />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
