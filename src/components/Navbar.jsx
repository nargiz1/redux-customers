import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar() {

  const customers = useSelector((state)=> state.favouriteReducer);

  return (
    <div style={{padding: '20px 0px'}}>
      <Link to='/' style={{marginRight: '40px'}}>Customers</Link>
      <Link to='/favourites'>Favourites</Link>
      <h5>Fav Count: {customers.length}</h5>
    </div>
  )
}

export default Navbar
