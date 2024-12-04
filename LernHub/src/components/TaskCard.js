import React, { useState, useEffect } from 'react';
import { Card, Button, Space, Modal, Input } from 'antd';

const TaskCard = ({ task, onProgress, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(task.name);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleEditSubmit = () => {
    onEdit(newName, newDescription);
    setIsEditing(false);
  };

  // Funktion zum Zeichnen des Fortschrittsdiagramms
  const drawProgressChart = (progress) => {
    const canvas = document.getElementById(`progress-chart-${task.name}`);
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const radius = canvas.width / 2;
    const startAngle = -Math.PI / 2;
    const endAngle = startAngle + (progress / 100) * 2 * Math.PI;

    // Hintergrundkreis (grau)
    ctx.beginPath();
    ctx.arc(radius, radius, radius - 10, 0, 2 * Math.PI);
    ctx.fillStyle = '#e0e0e0';
    ctx.fill();

    // Fortschrittskreis (blau)
    ctx.beginPath();
    ctx.arc(radius, radius, radius - 10, startAngle, endAngle);
    ctx.lineTo(radius, radius);
    ctx.fillStyle = '#1890ff';
    ctx.fill();
  };

  // Zeichne das Diagramm nach jeder Änderung des Fortschritts
  useEffect(() => {
    drawProgressChart(task.progress);
  }, );

  return (
    <Card
      title={task.name}
      extra={<span>{task.progress}%</span>}
      style={{ width: '100%' }}
    >
      <p>{task.description}</p>
      {/* Donut-Diagramm anzeigen */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <canvas
          id={`progress-chart-${task.name}`}
          width={100}
          height={100}
          style={{ borderRadius: '50%' }}
        ></canvas>
      </div>
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
