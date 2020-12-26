import React, { Component } from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll' // scroll을 내려도 검색창이 사라지지 않도록
import ErrorBoundary from '../components/ErrorBoundary'
import './App.css'

class App extends Component {
    constructor() { // prebuilt in react
        super()
        this.state = { // 이 state를 사용하여 rendering 한다
            robots: [], // 시작시에는 empty, api를 사용하여 정보를 가져온다(fetch)
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))
    }

    onSearchChange = (event) => { // arrow function을 사용해야 동작 (SearchBox에서 onChange로 부터 이 함수가 불림. 현재 searchfield를 변화시킴)
        this.setState({ searchfield: event.target.value }) // this.state.searchField = ... 안하고 setState를 사용
    }

    render() { // prebuilt in react
        const { robots, searchfield } = this.state // 미리 이렇게 정의해 두면 밑에서 this.state.robots이렇게 쓸필요 없다
        const filteredRobots = robots.filter(robot => { // 현재 있는 로봇 중 searchfield가 포함된 로봇을 필터링
            return robot.name.toLowerCase().includes(searchfield.toLowerCase()) 
        })
        return !robots.length ? 
            <h1>Loading</h1> :
            (
                <div className='tc'>  
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            )
    }
}

export default App