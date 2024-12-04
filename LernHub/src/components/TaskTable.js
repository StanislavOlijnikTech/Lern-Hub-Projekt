import React from 'react';
import { Table } from 'antd';

const TaskTable = ({ tasks }) => {
  const columns = [
    { title: 'Task', dataIndex: 'name', key: 'name' },
    { title: 'Progress', dataIndex: 'progress', key: 'progress' },
    {
      title: 'Progress Bar',
      dataIndex: 'progress',
      key: 'progressBar',
      render: (progress) => (
        <div style={{ width: '100px', height: '10px', backgroundColor: '#e0e0e0' }}>
          <div style={{ width: `${progress}%`, height: '100%', backgroundColor: '#1890ff' }}></div>
        </div>
      ),
    },
  ];

  return <Table dataSource={tasks} columns={columns} rowKey="name" />;
};

export default TaskTable;
