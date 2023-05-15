import React, { useState } from 'react'

function CollabPage({ isOpen, togglePopup }) {
    const [scrollHeight] = useState(window.innerHeight)
    const [scrollWidth] = useState(window.innerWidth)
    return (
      <div className={`popup ${isOpen ? 'open' : ''}`}>
        <div className="popup-content " style={{ height: `${scrollHeight}px`, width: `${scrollWidth}px` }}>
        <button className="close-button" onClick={togglePopup}>
          X
          </button>
          <p style={{color:'white'}}>CollabPage</p>
        </div>
      </div>
    )
  }
  
  export default CollabPage;