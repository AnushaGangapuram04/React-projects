import React from 'react'

const ToggleSwitch = ({onToggle, isDarkMode}) => {

  return (
    <div>
     <button className="toggle-btn" onClick={onToggle}>
      {isDarkMode ? " Dark Mode" : " Light Mode"}
    </button>
    </div>
  )
}

export default ToggleSwitch