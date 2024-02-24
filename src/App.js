import React, { useState } from 'react';
import DataFetcher from './DataFetcher';
import DataTable from './DataTable';
import Pagination from './Pagination';
import SortButton from './SortButton';
import HistoryManager from './HistoryManager';
import DownloadButton from './DownloadButton';

const App = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [historyData, setHistoryData] = useState([]);

  const itemsPerPage = 10;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);
  const totalPages = (data.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSortByGender = () => {
    const sortedData = [...data].sort((a, b) => a.gender.localeCompare(b.gender));
    setData(sortedData);
  };

  return (
    <div>
      <DataFetcher setData={setData} />
      <HistoryManager historyData={historyData} setHistoryData={setHistoryData} />
      <SortButton onSort={handleSortByGender} />
      <DownloadButton historyData={historyData} />
      <DataTable data={paginatedData} />
      <Pagination totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default App;