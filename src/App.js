import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  AboutPage,
  ContactUsPage,
  GamesPage,
  HomePage,
  MoviesPage,
  NotFoundPage,
} from './pages'
import { Sidebar } from './components/sidebar/sidebar.component'

function App() {
  return (
    <BrowserRouter>
      <div className='main'>
        <Sidebar></Sidebar>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/about' element={<AboutPage></AboutPage>}></Route>
          <Route path='/movies' element={<MoviesPage></MoviesPage>}></Route>
          <Route
            path='/contacts'
            element={<ContactUsPage></ContactUsPage>}
          ></Route>
          <Route path='/games' element={<GamesPage></GamesPage>}></Route>
          <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
