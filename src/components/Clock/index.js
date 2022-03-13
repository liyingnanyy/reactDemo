import React, { useState, useEffect } from 'react';
function Clock(props) { 
  const [date, setDate] = useState(new Date());
  const h2Click = () => {
    setInterval(() => {
      setDate(new Date())
    }, 1000);
  }
  useEffect(() => {
    setInterval(() => {
      setDate(new Date())
    }, 1000); 
  }, []);
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2 onClick={h2Click}>It is {props.date.toLocaleTimeString()}.{date.toLocaleTimeString()}</h2>
    </div>
  )
}

// class Clock extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {date:new Date()}
//   }
//   componentDidMount(){
//     setInterval(() => {
//       this.setState({
//         date: new Date()
//       })
//     }, 1000);
//   }
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

export default Clock