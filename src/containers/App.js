import React, { useState, useEffect } from 'react' // Hooks
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll' // scroll을 내려도 검색창이 사라지지 않도록
import ErrorBoundary from '../components/ErrorBoundary'
import './App.css'

// Hooks : class사용을 피하는 방법(React specific)
function App() {
    // constructor()을 useState(hooks)를 사용하여 표현
    const [robots, setRobots] = useState([]) // [] : initial state, 구조화
    const [searchfield, setSearchfield] = useState('')
    const [count, setCount] = useState(0)

    // componentDidMount()
    useEffect(() => { // useEffect(function, ?)
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users)) // user update robot state -> rerender(infinite loop)
            console.log(count)
    }, [count]) // only run if count chages
    // ? : when should i run useEffect? -> 변경이 있을 때만 useEffect를 실행해라

    const onSearchChange = (event) => { // arrow function을 사용해야 동작 (SearchBox에서 onChange로 부터 이 함수가 불림. 현재 searchfield를 변화시킴)
        setSearchfield(event.target.value)
    }

    const filteredRobots = robots.filter(robot => { // 현재 있는 로봇 중 searchfield가 포함된 로봇을 필터링
        return robot.name.toLowerCase().includes(searchfield.toLowerCase()) 
    })
    return !robots.length ? 
        <h1>Loading</h1> :
        (
            <div className='tc'>  
                <h1>RoboFriends</h1>
                <button onClick={() => setCount(count + 1)}>Click Me!</button>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        )
    
}

export default App