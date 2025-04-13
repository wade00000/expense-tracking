import React from "react"
function Search({search,onSearchChange}) {
    return (
    <div  className="search-container" >
        <input 
        type = "text"
        placeholder="Search expenses..."
        onChange={(e)=>onSearchChange(e.target.value)}
        value = {search}
        />
    </div>
    )
   
  }
  
  export default Search;