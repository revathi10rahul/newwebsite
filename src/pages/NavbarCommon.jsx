import React from 'react'
import './nav.css'
function NavbarCommon() {
  return (
    <>
    <section class="nav-bar">
    <div class="logo"><img  src='./Assets/ns black transparent.png' alt="logo for website"  style={{height:"auto",width:"20%"}}/></div>
    <ul class="menu">
        <li><a href="#">home</a></li>
        <li><a href="#">tours</a></li>
        <li><a href="#">package</a></li>
        <li><a href="#">blog</a></li>
        <li><a href="#">about us</a></li>
        <li><a href="#">contact us</a></li>
    </ul>
 

</section>
</>
  )
}

export default NavbarCommon