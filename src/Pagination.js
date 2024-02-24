import React from 'react'
import { Button } from '@mui/material'

const Pagination = ({ totalPages, onPageChange }) => {
    return (
        <div>
            {Array.from({ length: totalPages }, (_, index) => (
                <Button key={index} onClick={() => onPageChange(index)}>{index + 1}</Button>
            ))}
        </div>
    )
}

export default Pagination
