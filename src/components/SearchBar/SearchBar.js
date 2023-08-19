import React, {useState} from "react";
import "./SearchBar.css";

export function SearchBar({placeholder, data}) {
    const [filteredData, setFilteredData] = useState([]);
    const handleFilter = (event) => {
        const searchWord = event.target.value
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord === "")
        {
            setFilteredData([])
        }
        else
        {
            setFilteredData(newFilter);
        }
    }
    return (    
        <div className="search">
                <div className="search-inputs"> 
                <input className="placeholder-text" type="text" placeholder={placeholder} onChange={handleFilter}/>
                <div className="search-icon"> <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                    </div>
                </div>
                {filteredData.length !== 0 && (
        <div className="data-result">
          {filteredData.slice(0, 5).map((value, key) => {
            return (
              <a className="data-item" /*href={value.link} target="_blank"*/>
                <p>{value.title} </p>
              </a>
            );
          })}
                </div>
                )}
        </div>
    )
}