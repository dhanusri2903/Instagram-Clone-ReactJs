import React from 'react'
import '../components/HomePage.css'
import Sidenav from './navigation/Sidenav'
import Timeline from './timeline/Timeline'

const HomePage = () => {
  return (
    <div className='homepage'>
        <div className="homepage__nav">
            <Sidenav/>

        </div>
        <div className="homepage__timeline">
            <Timeline/>

        </div>
        
    </div>
  )
}

export default HomePage
