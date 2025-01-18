import React from 'react'
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-4'>
      <div>Logo</div>
      <Link to="/login"><Button variant="outline">Login</Button></Link>
    </div>
  )
}

export default Navbar
