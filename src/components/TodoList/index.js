import React, { useState } from 'react';
import { Table, Tag, Space, Button, Modal, Form, Input, Checkbox } from 'antd';
import 'antd/dist/antd.css';

function Header(props) {
  const [num, setNum] = useState(1);
  const [edit, setEdit] = useState(null)

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
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
        newList[index]=value
        setList(newList)
        setEdit(null)
      } else {
        value.key=parseInt(Math.random()*100)
        const newList = [...list]
        newList.push(value)
        setList(newList)
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
  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ];
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
        </Space>
      ),
    },
  ];
  const [list, setList] = useState(dataSource);
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
    const newList = [...list]
    const index = list.indexOf(item)
    console.log(index)
    newList.splice(index,1)
    setList(newList)
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
      {/* header{props.name}
      {num}
      <ul>
        {listItems}
      </ul> */}
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

export default Header;
