import React from 'react'

// Card Component 

const Card = ({name, email, id}) => {// destructuring
    return ( // 하나의 요소만 return 가능
        <div className='bg-light-green dib br3 pd3 ma1 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}`} style={{width:200, heigh:200}} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card