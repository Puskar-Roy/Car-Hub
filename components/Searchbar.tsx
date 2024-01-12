'use client'
import React from 'react'
import SearchMenufacturer from './SearchMenufacturer'



const Searchbar = () => {
  const handleSubmit = ():void=>{alert("Working!")}
  return (
    <form className='searchbar ' onSubmit={handleSubmit}>
      <div className="searchbar__item">
        <SearchMenufacturer/>
      </div>
    </form>
  )
}

export default Searchbar
