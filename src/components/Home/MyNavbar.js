import React from 'react'
import {  Nav, Navbar, Container } from 'react-bootstrap'
import {BiSolidContact} from "react-icons/bi"
const MyNavbar = () => {
  return (<>
    <div style={{backgroundColor:"black", color:'white', height:"7vh", marginLeft:"-12px", marginRight:'"-12px"'}}>
          <h4 className='text-center pt-2'> Phone Book <BiSolidContact className='mb-2'/> </h4>
    </div>
    
  </>
  )
}

export default MyNavbar