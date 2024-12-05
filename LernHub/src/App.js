// App.js

import React, { useState } from 'react';
import { Layout, Button, Row, Col, Typography, Space } from 'antd';
import TaskInput from './components/TaskInput';
import TaskCard from './components/TaskCard';
import './App.css';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Aufgabe hinzufügen
  const addTask = (taskName, taskDescription) => {
    setTasks([...tasks, { name: taskName, description: taskDescription, progress: 0, dueDate: null }]);
  };

  // Fortschritt erhöhen
  const handleProgress = (index) => {
    const updatedTasks = [...tasks];
    if (updatedTasks[index].progress < 100) {
      updatedTasks[index].progress += 25;
    }
    setTasks(updatedTasks);
  };

  // Aufgabe löschen
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((task, taskIndex) => taskIndex !== index);
    setTasks(updatedTasks);
  };

  // Aufgabe bearbeiten
  const editTask = (index, newName, newDescription) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = { ...updatedTasks[index], name: newName, description: newDescription };
    setTasks(updatedTasks);
  };

  // Datum ändern
  const handleDateChange = (index, date) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].dueDate = date ? date.format('DD.MM.YYYY') : null; // Datum formatieren
    setTasks(updatedTasks);
  };

  return (
    <Layout>
      <Header style={{ background: '#1890ff', padding: '0 20px' }}>
        <Title level={3} style={{ color: 'white', float: 'left' }}>LernHub</Title>
        <Space style={{ float: 'right' }}>
          <Button type="link" style={{ color: 'white' }}>Profil</Button>
          <Button type="link" style={{ color: 'white' }}>Impressum</Button>
        </Space>
      </Header>

      <Content style={{ padding: '20px' }}>
        <Row gutter={16}>
          <Col span={24}>
            <TaskInput onAddTask={addTask} />
          </Col>
        </Row>

        <Row gutter={16}>
          {tasks.map((task, index) => (
            <Col key={index} span={8}>
              <TaskCard
                task={task}
                onProgress={() => handleProgress(index)}
                onDelete={() => deleteTask(index)}
                onEdit={(newName, newDescription) => editTask(index, newName, newDescription)}
                onDateChange={(date) => handleDateChange(index, date)} // Datum ändern
              />
            </Col>
          ))}
        </Row>
      </Content>

      <Footer style={{ textAlign: 'center' }}>
        LernHub ©2024
      </Footer>
    </Layout>
  );
};

export default App;
