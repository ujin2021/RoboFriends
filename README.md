### RoboFriends Web page using React
#### DSC web study, from udemy

<br>

#### React 설치 및 앱 만들기, 실행
> https://ko.reactjs.org/docs/create-a-new-react-app.html
1. $ npm install -g create-react-app
2. $ create-react-app [app_name]
3. $ cd [app_name]
4. $ npm start
> package.json 의 scripts부분에 start가 있다

5. $ npm install tachyons ( bootstap 같은것)

#### 기본 파일
* public/favicon.ico : 상단 탭에 뜨는 작은 아이콘
* src/index.js : 기본이 되는 js file
* package.json의 react-scripts 버전을 수정하고 단지 npm install 만 해주면 쉽게 update가능(내가 짠 코드는 수정없이)
* react => component라고 생각됨

* index.js 에서 다른 파일에서 작성한 class or function 을 가져올 수 있다.

``` js
//  index.js
import Hello from './Hello' // 내가 만든 js file을 Hello로 들고와서 tag처럼 사용할 수 있다
<Hello greeting={'Hello' + 'React Ninja'}/> // greeting은 Hello의 properties 중 하나

// Hello.js
import React, { Component } from 'react';
import './Hello.css'

class Hello extends Component {
    render() {
        return ( // 여러줄일 때 ()로 감싸기
            // tc : text center(tachyons), class= 대신 className으로 쓴다(class는 js에서 예약어이므로 못쓴다)
            // actual html 이 아니다. 이건 virtual DOM (JSX)
            <div className='f1 tc'> 
                <h1> Hello World</h1>
                <p>{this.props.greeting}</p> 
            </div>
        )
    }
}
export default Hello // export해줘야 다른곳에서 사용가능. default를 붙이면 Hello 하나만 export
```

* Hello.js에서의 Hello class 는 Hello function 과 같다

``` js
const Hello = (props) => { // this.props에서 props는 매개변수였다..!
    return ( 
            <div className='f1 tc'> 
                <h1> Hello World</h1>
                <p>{props.greeting}</p> 
            </div>
        )
}

export default Hello
```

#### jsx

* html형식(jsx)에서 js 구문은 {}으로 감싸준다

#### state

* state(부모) >> props(자식)
* 우리가 만든 일반적인 component : props을 읽고 수행, props는 우리가 변경할 수 없다
* search하는 것에 따라 card를 다르게 하려면 '상태'가 필요하고, 상태는 변경할 수 있다
* state라는 상수 정의가 필요하다
* <a href='https://ko.reactjs.org/docs/react-component.html'> life cycle method </a>: app이 실행될 때 자동으로 트리거 되는 함수들(constructor, render,...) => arrow function형태를 사용하지 않는다
    * Mounting : 새로고침을 클릭시, index.html의 <div id='root'></div>가 컴포넌트로 대체된다(App)
    > constructor(), componentWillMount(), render(), componentDidMount()
    * Updating : 구성요소 변경 시
    > 입력을 받아 field가 변경되었을 때 다시 rendering
    * Unmounting : 페이지에서 삭제되는 경우(mount 해제)
* 각 함수마다 console.log로 어느 함수인지 찍어보면 constructor -> render -> componentDidMount -> render
    * constructor을 확인하고, rendering하고, update하고(componentDidMount), update된 것을 다시 rendering한다


#### structuring

* components - pure functions 모음
* containers - life cycle method가 포함된 코드 모음

#### build

* $ npm run build (최적화, package.json scripts의 build)
* build dir 생성, 모든 css, js, .. 파일들이 있다
* 배포하는데 필요한 모든 것이 build파일에 존재