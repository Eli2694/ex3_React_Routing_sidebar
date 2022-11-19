import React from 'react'
import './sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import FaceIcon from '@mui/icons-material/Face';
import {Link} from 'react-router-dom'



export const Sidebar = () => {
  return (
    <div className='container'>
     <div className="sub-container">
      
     <Link to='/' className='alink'><span className='Line'><HomeIcon className='icon'></HomeIcon ><span className='section-name'>Home</span></span></Link>
     
     <Link to='/about' className='alink'><span className='Line'><InfoIcon className='icon'></InfoIcon ><span className='section-name'>About</span></span></Link>
     <Link to='/contacts' className='alink'><span className='Line'><CallIcon className='icon'></CallIcon><span className='section-name'>Contact Us</span></span></Link>
     <Link to='/movies' className='alink'><span className='Line'><MovieCreationIcon className='icon'></MovieCreationIcon><span className='section-name'>Movies</span></span></Link>
     <Link to='/games' className='alink'><span className='Line'><SmartToyIcon className='icon'></SmartToyIcon><span className='section-name'>Games</span></span></Link>
     <Link to='/' className='Eli'><span className='Line'><FaceIcon className='icon'></FaceIcon><span className='section-name'>Eli</span></span></Link>
     
     
      </div>
    </div>
  )
}

// <Routes>
//         <Route path='/' element={<HomePage></HomePage>}></Route>
//         <Route path='/about' element={<AboutPage></AboutPage>}></Route>
//         <Route path='/movies' element={<MoviesPage></MoviesPage>}></Route>
//         <Route
//           path='/contacts'
//           element={<ContactUsPage></ContactUsPage>}
//         ></Route>
//         <Route path='/games' element={<GamesPage></GamesPage>}></Route>
//         <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
//       </Routes>