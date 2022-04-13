/*
 * @Author: your name
 * @Date: 2022-04-10 10:25:02
 * @LastEditTime: 2022-04-12 23:33:07
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /reactDemo/src/components/header/index.js
 */
import React, { useState, useReducer } from 'react';
const initialState = {num: 0};
  const reducer = (state, action) => {
    switch(action.type) {
      case 'decrement':
        return {...state, num: state.num - 1}
      case 'increment':
        return {...state, num: state.num + 1}
      default:
        return state;
    }
  }
function Header(props) {
  // const [num, setNum] = useState(1);
  
  const [state, dispatch] = useReducer(reducer, initialState)
  const { num } = state
  // const activateLasers = () => {
  //   console.log('header被点击了');
  //   // setNum( num + 1);
  // };
  return (
    <header >
      header{props.name}
      {/* {num} */}
      {/* <button onClick={() => setNum(num + 1)}>+</button>
      <button onClick={() => setNum(num - 1)}>-</button> */}
      <div>
        <h2>Using useReducer</h2>
        Number: {num}
        <button onClick={() => dispatch({type: 'increment'})}>+</button>
        <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      </div>
    </header>
  );
}

export default Header;
