import React, { Component } from 'react'

class ErrorBoundary extends Component { // component에서 error발생시 여기서 catch
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) { // 만약 error가 발생하면 <h1>을 rendering
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) { // error가 있으면
            return <h1>Oooops. That is not good</h1>
        }
        return this.props.children // error가 없으면 children을 render
    }
}

export default ErrorBoundary