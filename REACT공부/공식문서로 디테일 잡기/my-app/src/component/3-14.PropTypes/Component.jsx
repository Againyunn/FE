import React from 'react';
import PropTypes from 'prop-types';

function PropComponent(props){
  return <div>{props.name}</div>;
}

PropComponent.defaultProps = {
  name: "Againyunn",
  age: 7,
};

PropComponent.propTypes ={
  name : PropTypes.string,
  // age : PropTypes.number.isRequired,//반드시 존재해야 하는 값

  //custom function을 활용해서 age의 type 제한하기
  age : function(props, propName, componentName) {
    if (!/7|8/.test(props[propName])) {   //age의 값이 7이나 8이 아니라면 에러가 발생
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );//특정 값이 아닐 때 발생하는 Error도 사용자가 임의로 지정할 수 있다.
    }
  },
}


export default function Component() {
  return (
    <PropComponent/>
  );
}

//production으로는 PropTypes를 할 수 없다. 개발 단계에서 코드를 검토하는 역할 수행
