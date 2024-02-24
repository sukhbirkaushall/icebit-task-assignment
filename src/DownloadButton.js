import React from 'react';
import { Button } from  '@mui/material';

const DownloadButton = ({ historyData }) => {
    const handleDownload = () => {
        const json = JSON.stringify(historyData);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'historyData.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    return <Button onClick={handleDownload}>Download History Data</Button>;
};

export default DownloadButton;