import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'

const DataTable = ({ data }) => {
    return (

        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Gender</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell>{item.name.first}{item.name.last}</TableCell>
                            <TableCell>{item.gender}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </TableContainer>

    )
}

export default DataTable
