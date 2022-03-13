import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import Clock from './components/Clock'
import TodoList from './components/TodoList'

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
    </div>
  );
}

export default App;
