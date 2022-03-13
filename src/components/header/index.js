import React, { useState } from 'react';

function Header(props) {
  const [num, setNum] = useState(1);

  const activateLasers = () => {
    console.log('header被点击了');
    setNum( num + 1);
  };
  return (
    <header onClick={activateLasers}>
      header{props.name}
      {num}
    </header>
  );
}

export default Header;
