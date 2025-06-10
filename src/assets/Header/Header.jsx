import React from 'react'
import "./Header.css"




function Header() {
  return (
    <div id="navBar">


        <div id='logo'>
            <img src="/images/bird.svg" alt="logo"></img>
        </div>

        
        <div id="btnDiv" >
            <div id='readReport'>
        <button id="readReportBtn">Read report</button>

      </div>
      <div>
        <button id = "protectForestBtn">Protect forest now</button>
      </div>
        </div>
      
      


      
    </div>
  )
}

export default Header
