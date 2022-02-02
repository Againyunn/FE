// import React, { Component } from 'react'
// import { ThemeContext } from './ThemeContext';

// class ThemedButton extends Component {
//   render() {
//       let props = this.props;
//       let theme = this.context;
//     return (
// <button{...props} onClick={props.changeTheme} style={{backgroundColor: theme.background, color:theme.foreground}}>Button</button>
//     )
//   }
// }

// ThemedButton.contextType = ThemeContext;

// export default ThemedButton;


//함수형 컴포넌트 활용 예시
import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export default function ThemedButton(props) {
    const theme = useContext(ThemeContext);

  return (
    <button{...props} onClick={props.changeTheme} style={{backgroundColor: theme.background, color:theme.foreground}}>Button</button>
  )
}

//컴포넌트 트리 제약 → Props drilling의 한계 해소
//Context를 사용하면 재사용하기 어렵다
//API → createContext / Provider / Consumer 를 활용
//useContext → Consumer 대체 가능
