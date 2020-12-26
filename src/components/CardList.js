import React from 'react'
import Card from './Card'

const CardList = ({ robots }) => {
    // if (true) {
    //     throw new Error('NOOOOOOOO') // 일부러 eror발생(ErrorBoundary확인용)
    // }
    const cardComponent = robots.map((user, i) => { // map needs return, i for index
        return (
        <Card 
            key={i} 
            id={user.id} 
            name={user.name} 
            email = {user.email} 
        /> 
        )
        // DOM에서 카드 중 일부가 삭제될 때 어느것인지 구분하기 위해 key가 필요하다(loop 돌때 고유한 key를 제공해야 한다)
    })
    return ( // cardComponent 대신 위의 return 값을 넣어줘도 된다
        <div>
            {cardComponent} 
        </div>
    )
}

export default CardList