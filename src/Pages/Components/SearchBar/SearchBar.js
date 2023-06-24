import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa"
import './SearchBar.css'
const SearchBar = ({ setResults }) => {

    const [input, setInput] = useState("")

    const fetchData = (value) => {
        fetch("http://localhost:5000/photos")
            .then(res => res.json())
            .then(data => {
                const results = data.filter(photo => {
                    return (
                        value &&
                        photo &&
                        photo.title.toLowerCase().includes(value)
                    )
                });
                setResults(results)
                // console.log(results);
            })
    }

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    }

    return (
        <div className='input-wrapper'>
            <FaSearch id='search-icon' />
            <input type="text" placeholder='Search here' value={input} onChange={(e) => { handleChange(e.target.value) }} />
        </div>
    );
};

export default SearchBar;