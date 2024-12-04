import React from 'react';
import { Bar } from '@ant-design/charts';

const ProgressChart = ({ tasks }) => {
  const generateChartData = (tasks) => {
    return tasks.map((task) => ({
      taskName: task.name,
      progress: task.progress,
    }));
  };

  return (
    <Bar
      height={400}
      data={generateChartData(tasks)}
      xField="taskName"
      yField="progress"
      color="#1890ff"
    />
  );
};

export default ProgressChart;
