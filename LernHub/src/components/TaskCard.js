import React, { useState } from 'react';
import { Card, Button, Progress, Space, Modal, Input } from 'antd';

const TaskCard = ({ task, onProgress, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(task.name);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleEditSubmit = () => {
    onEdit(newName, newDescription);
    setIsEditing(false);
  };

  return (
    <Card
      title={task.name}
      extra={<span>{task.progress}%</span>}
      style={{ width: '100%' }}
    >
      <p>{task.description}</p>
      <Progress percent={task.progress} />
      <Space style={{ marginTop: '10px' }}>
        <Button type="primary" onClick={onProgress} disabled={task.progress === 100}>
          {task.progress === 100 ? 'Erledigt' : 'Fortschritt erhöhen'}
        </Button>
        <Button danger onClick={onDelete}>Löschen</Button>
        <Button type="default" onClick={() => setIsEditing(true)}>Bearbeiten</Button>
      </Space>

      {/* Bearbeitungsmodal */}
      <Modal
        title="Aufgabe bearbeiten"
        visible={isEditing}
        onOk={handleEditSubmit}
        onCancel={() => setIsEditing(false)}
      >
        <Input
          placeholder="Aufgabenname"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <Input.TextArea
          placeholder="Beschreibung"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          rows={4}
        />
      </Modal>
    </Card>
  );
};

export default TaskCard;
