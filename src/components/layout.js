import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default ({ children }) => (
  <React.Fragment>
    <Header />
    <div
      style={{
        margin: '10%',
        backgroundColor: '#eee',
        padding: '12px',
      }}
    >
      {children}
      <Footer />
    </div>
  </React.Fragment>
)
