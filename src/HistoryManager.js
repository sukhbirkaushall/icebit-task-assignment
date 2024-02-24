import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';

const HistoryManager = ({ historyData, setHistoryData }) => {
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('historyData')) || [];
    setHistoryData(storedData);
  }, [setHistoryData]);

  const saveToHistory = (data) => {
    const dataArray = Array.isArray(data) ? data : [data];
    const newData = dataArray.map(item => ({ name: item.name, gender: item.gender }));
    const newHistoryData = [...historyData, { data: newData, visitedTime: new Date().toLocaleString() }];
 
    setHistoryData(newHistoryData);
    localStorage.setItem('historyData', JSON.stringify(newHistoryData));
  };

  const handleViewHistory = () => {
    console.log(historyData);
  };

  return (
    <div>
      <Button variant="contained" onClick={saveToHistory}>
        Save to History
      </Button>
      <Button variant="contained" onClick={handleViewHistory}>
        View History
      </Button>
    </div>
  );
};

export default HistoryManager;