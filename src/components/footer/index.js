import React from 'react'
class Footer extends React.Component{
  constructor(props) {
    super(props)
    this.state = {num:1}
  }
  render() {
    const props = this.props;
    const activateLasers = () => {
      console.log('footer被点击了')
      this.setState({
        num: ++this.state.num
      })
    }
    return (
      <footer onClick={activateLasers}>footer,{props.name}{this.state.num > 2 ? this.state.num : 'no'}</footer>
    )
  }
  componentWillMount() {
    console.log('11')
  }
}

export default Footer