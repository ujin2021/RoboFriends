import React from 'react'

const Scroll = (props) => { // Scroll 에게 props따로 넘겨주지 않아도 children이 존재(CardList)
    return ( // jsx에서 style은 {{}} 사용
        <div style={{ overflowY : 'scroll', border: '1px solid black', height: '500px' }}> 
            {props.children}
        </div>
    )
}

export default Scroll