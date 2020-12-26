import React from 'react'

const SearchBox = ({ searchfield, searchChange }) => { // searchfield가 있는 이유?
    return (
        <div className='pa2'>
            <input 
                className = 'pa3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='search robots' 
                onChange={searchChange} // 변화가 생기면 searchChange 함수를 부른다
            />
        </div>
    )
}

export default SearchBox