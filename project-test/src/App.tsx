import React, { useEffect, useState } from 'react';
import Table from './components/Table';
import { TableColumn, TableData } from './types/table';
import { fetchData } from './services/api';
import './App.css'

const App: React.FC = () => {
  const [data, setData] = useState<TableData[]>([]);
  const [columns, setColumns] = useState<TableColumn[]>([]);

  useEffect(() => {
    fetchData()
      .then(data => {
        setData(data);
        setColumns(Object.keys(data[0]).map(key => ({ key, label: key })));
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <h1>Teste - Tabela</h1>
      <div className='table-container'>
        <Table columns={columns} data={data} />
      </div>

    </>
  );
};

export default App;
