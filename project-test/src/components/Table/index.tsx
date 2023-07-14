import React from 'react';
import { TableColumn, TableData } from '../../types/table';
import './index.css'

interface TableProps {
  columns: TableColumn[];
  data: TableData[];
}

const Table: React.FC<TableProps> = ({ columns, data }) => {

  const labelMappings: Record<string, string> = {
    nome: 'Nome',
    data_nascimento: 'Data de Nascimento',
    cpf: 'CPF',
    endereco: 'Endereço',
    status: 'Status',
  };

  const getColumnLabel = (columnKey: string): string => {
    return labelMappings[columnKey]
      ||
      (columns.find(column => column.key === columnKey)?.label || '');
  };

  return (
    <table className='table'>
      <thead>
        <tr>
          {columns.map(column => (
            <th key={column.key}>{getColumnLabel(column.key)}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {
          data.map((item, index) => (
            <tr key={index}>
              {
                Object.values(item).map((valor) => (
                  <td key={valor}>{valor}</td>
                ))
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

export default Table;
