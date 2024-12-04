import React, { useState } from 'react';
import { Input, Button, Space } from 'antd';

const TaskInput = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleSubmit = () => {
    if (taskName && taskDescription) {
      onAddTask(taskName, taskDescription);
      setTaskName('');
      setTaskDescription('');
    } else {
      alert('Bitte fülle beide Felder aus!');
    }
  };

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Input
        placeholder="Aufgabenname"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <Input.TextArea
        placeholder="Beschreibung"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        rows={4}
      />
      <Button type="primary" onClick={handleSubmit}>
        Aufgabe hinzufügen
      </Button>
    </Space>
  );
};

export default TaskInput;

