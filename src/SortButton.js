import React from 'react';
import { Button } from '@mui/material';

const SortButton = ({ onSort }) => {
    return <Button onClick={onSort}>Sort by Gender</Button>;
};

export default SortButton;