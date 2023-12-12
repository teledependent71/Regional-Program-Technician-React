import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Regional Program Technician</title>
        <meta property="og:title" content="Regional Program Technician" />
      </Helmet>
    </div>
  )
}

export default Home
