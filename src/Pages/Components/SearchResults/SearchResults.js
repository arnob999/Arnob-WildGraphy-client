import React from 'react';
import "./SearchResults.css"
const SearchResults = ({ results }) => {
    return (
        <div className='results-list'>
            {
                results.map((result, id) => {
                    return <div className='search-result' key={id}>{result.title}</div>
                })
            }
        </div>
    );
};

export default SearchResults;