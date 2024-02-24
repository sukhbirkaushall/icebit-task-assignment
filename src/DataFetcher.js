import React, { useState, useEffect } from 'react'

const DataFetcher = ({ setData }) => {

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=100')
            .then(response => response.json())
            .then(data => setData(data.results))
            .catch(error => console.log('Error fetching data'))
    }, [setData]);

    return null

}

export default DataFetcher
