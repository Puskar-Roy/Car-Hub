'use client'
import React , {useState } from 'react'
import SearchMenufacturer from './SearchMenufacturer'

const Searchbar = () => {
  const handleSubmit = ():void=>{alert("Working!")}
  const [menufacturer , setMenufacturer ] = useState("");
  return (
    <form className="searchbar " onSubmit={handleSubmit}>
      <div className="searchbar__item">
        <SearchMenufacturer
          menufacturer={menufacturer}
          setMenufacturer={setMenufacturer}
        />
      </div>
    </form>
  );
}

export default Searchbar
