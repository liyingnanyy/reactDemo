import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { getUrlParam } from '../../utils';


function Detail() {
  const [content, setContent] = useState(null);
  // 获取数据
  const getItem = () => {
    axios.get(`http://localhost:3004/list/${getUrlParam('id')}`).then((res) => {
      setContent(res.data)
    })
  }
  useEffect(()=>{
    getItem()
  },[])
  return (
    <div>
      {content&&Object.keys(content).map((item) => {
        return <div>{item}:{content[item]}</div>
      })}
    </div>
  )
}

export default Detail