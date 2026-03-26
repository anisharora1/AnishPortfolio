import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import mainImage from './assets/main.jpg'
import { useEffect } from 'react'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import Projects from './pages/Projects'
import Blogs from './pages/Blogs'
import Certificates from './pages/Certificates'
import ScrollToTop from './components/ScrollToTop'
import VerticalNav from './components/VerticalNav'

function App() {
  useEffect(() => {
    document.documentElement.style.setProperty('--bg-image', `url(${mainImage})`);
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <div className="scroll-smooth">
          <Home />
          <About />
          <Skills />
          <Projects />
          <Certificates />
          <Blogs />
          <Contact />
          <Footer />
          <ScrollToTop />
          <VerticalNav />
        </div>
      )
    }
  ])

  return (
    <div className='App overflow-x-hidden w-full'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
