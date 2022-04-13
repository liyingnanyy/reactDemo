/*
 * @Author: your name
 * @Date: 2022-04-10 10:25:02
 * @LastEditTime: 2022-04-13 11:43:34
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /reactDemo/src/App.js
 */
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import ReduxHooks from './components/ReduxHooks'
import Footer from './components/footer'
import Clock from './components/Clock'
import TodoList from './components/TodoList'
import RouterTest from './components/RouterTest'

function App() {
  let name = '小明'
  return (
    <div className="App">
      <h1>Hello word!</h1>
      <img src={logo} />
      <Header name={name}></Header>
      <Footer name={name}></Footer>
      <Clock date={new Date()}></Clock>
      <TodoList></TodoList>
      <RouterTest></RouterTest>
      <ReduxHooks></ReduxHooks>
    </div>
  );
}

export default App;
