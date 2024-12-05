// components/TaskDatePicker.js

import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

const TaskDatePicker = ({ value, onChange }) => {
  return (
    <DatePicker
      value={value ? moment(value, 'DD.MM.YYYY') : null} // Wenn bereits ein Datum gesetzt wurde, zeige es an
      onChange={onChange} // Ändere das Datum beim Auswahl
      style={{ width: '100%' }}
    />
  );
};

export default TaskDatePicker;
