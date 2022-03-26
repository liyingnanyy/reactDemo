import React, { useState, useEffect } from 'react';
import { Table, Tag, Space, Button, Modal, Form, Input, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function TodoList(props) {
  const dataSource = [
    // {
    //   key: '1',
    //   name: '胡彦斌',
    //   age: 32,
    //   address: '西湖区湖底公园1号',
    // },
    // {
    //   key: '2',
    //   name: '胡彦祖',
    //   age: 42,
    //   address: '西湖区湖底公园1号',
    // },
  ];
  const [num, setNum] = useState(1);
  const [edit, setEdit] = useState(null)
  const [list, setList] = useState(dataSource);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [form] = Form.useForm();
  // 获取列表数据
  const getList = () => {
    axios.get('http://localhost:3004/list',{
      params: {}
    }).then((res)=> {
      console.log(res)
      setList(res.data)
    })
  }
  // 新增列表数据
  const addItem = (data) => {
    axios.post('http://localhost:3004/list',{
      ...data
    }).then((res)=> {
      getList()
    })
  }
  // 页面挂载
  useEffect(() => {
    getList()
  }, []);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    // setIsModalVisible(false);
    form.validateFields().then((value)=> {
      console.log(value)
      if(edit) {
        const newList = [...list]
        const index = newList.findIndex((item) => {
          return edit.key == item.key
        })
        value.key = newList[index].key
        value.id = newList[index].id
        // newList[index]=value
        // setList(newList)
        axios.put(`http://localhost:3004/list/${value.id}`,{
          ...value
        }).then(()=> {
          getList()
          setEdit(null) //把编辑状态设置为false
        })
      } else {
        // 新增列表
        value.key=parseInt(Math.random()*100)
        value.id=parseInt(Math.random()*100)
        // const newList = [...list]
        // newList.push(value)
        // setList(newList)
        addItem(value)
      }
      
      form.resetFields()
      handleCancel()
    })
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const activateLasers = () => {
    console.log('header被点击了');
    // setNum( num + 1);
  };
  const List = [
    {name:1},
    {name:2},
    {name:3},
    {name:4}
  ]
  
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '操作',
      dataIndex: 'action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <span onClick={()=> {editItem(record)}}>编辑</span>
          <span onClick={()=> {delItem(record)}}>删除</span>
          <Link to={`/todolist/detail?id=${record.id}`}>详情</Link>
        </Space>
      ),
    },
  ];
  const newItem = {
    key: '3',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  }
  const addTable = () => {
    // const newList = [...list]

    // newList.push(newItem)
    // setList(newList)
    showModal()
  }
  const delItem = (item) => {
    console.log('delItem')
    // const newList = [...list]
    // const index = list.indexOf(item)
    // console.log(index)
    // newList.splice(index,1)
    // setList(newList)
    axios.delete(`http://localhost:3004/list/${item.id}`,{
      params: {}
    }).then(()=> {
      getList()
    })
  }
  const editItem = (item) => {
    setEdit(item)
    form.setFieldsValue(item)
    showModal()
  }
  
  // const listItems = List.map((number,index) => <li key={index}>{number.name}</li>

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <header>
      <Button type="primary" onClick={addTable}>添加</Button>
      <Table dataSource={list} columns={columns} />
      <Modal title="添加用户" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="姓名"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="年龄"
        name="age"
        rules={[
          {
            required: true,
            message: 'Please input your age!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="地址"
        name="address"
        rules={[
          {
            required: true,
            message: 'Please input your address!',
          },
        ]}
      >
        <Input />
      </Form.Item>
    </Form>
      </Modal>
    </header>
  );
}

export default TodoList;
