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


//�Լ��� ������Ʈ Ȱ�� ����
import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export default function ThemedButton(props) {
    const theme = useContext(ThemeContext);

  return (
    <button{...props} onClick={props.changeTheme} style={{backgroundColor: theme.background, color:theme.foreground}}>Button</button>
  )
}

//������Ʈ Ʈ�� ���� �� Props drilling�� �Ѱ� �ؼ�
//Context�� ����ϸ� �����ϱ� ��ƴ�
//API �� createContext / Provider / Consumer �� Ȱ��
//useContext �� Consumer ��ü ����
