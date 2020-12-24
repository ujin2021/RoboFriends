### RoboFriends Web page using React
#### DSC web study, from udemy

<br>

#### React 설치 및 앱 만들기
> https://ko.reactjs.org/docs/create-a-new-react-app.html
1. $ npm install -g create-react-app
2. $ create-react-app [app_name]
3. $ cd [app_name]
4. $ npm start
> package.json 의 scripts부분에 start가 있다

5. $ npm install tachyons ( bootstap 같은것)

#### 강의 내용
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
* html형식(jsx)에서 js 구문은 {}으로 감싸준다
