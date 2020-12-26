import React, { Component } from 'react'
import CardList from './CardList'
import SearchBox from './SearchBox'
import './App.css'

class App extends Component {
    constructor() { // prebuilt in react
        super()
        this.state = { // 이 state를 사용하여 rendering 한다
            robots: [], // 시작시에는 empty, api를 사용하여 정보를 가져온다(fetch)
            searchfield: ''
        }
        // console.log('constructor')
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))
        // console.log('didMount')
    }

    onSearchChange = (event) => { // arrow function을 사용해야 동작 (SearchBox에서 onChange로 부터 이 함수가 불림. 현재 searchfield를 변화시킴)
        this.setState({ searchfield: event.target.value }) // this.state.searchField = ... 안하고 setState를 사용
        //console.log(event.target.value) // 입력중인 값들
    }

    render() { // prebuilt in react
        const filteredRobots = this.state.robots.filter(robot => { // 현재 있는 로봇 중 searchfield가 포함된 로봇을 필터링
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) 
        })
        if (this.state.robots.length === 0) {
            return <h1>Loading</h1>
        } else {
            return(
                <div className='tc'>  
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <CardList robots={filteredRobots} />
                </div>
            )
        }
        // console.log('render') 
    }
}

// const state = {
//     robots : robots,
//     searchfield = ''
// }

// const App = () => {
//     return (
//         <div className='tc'>
//         <h1>RoboFriends</h1>
//         <SearchBox />
//         <CardList robots = {robots}/>
//         </div>
//     )
// }

export default App