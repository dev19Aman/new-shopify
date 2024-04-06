import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';

const columns = [
  {
    width: 200,
    label: 'ID',
    dataKey: 'id',
  },
  {
    width: 200,
    label: 'Amount',
    dataKey: 'amount',
  },
  {
    width: 200,
    label: 'Test Mode',
    dataKey: 'testmode',
  },
  {
    width: 200,
    label: 'Shop Name',
    dataKey: 'payment_method.data.cancel_url',
  },
  {
    width: 200,
    label: 'Custom Name',
    dataKey: 'customer.billing_address.given_name',
  },
  {
    width: 200,
    label: 'Email',
    dataKey: 'customer.email',
  },
  // Add more columns as needed
];

function getColumnData(row, dataKey) {
  const getNestedValue = (obj, keyPath) => {
    const keys = keyPath.split('.');
    let value = obj;
    for (const key of keys) {
      if (value && value.hasOwnProperty(key)) {
        value = value[key];
      } else {
        return '';
      }
    }
    return value;
  };

  if (dataKey === 'payment_method.data.cancel_url') {
    const cancelUrl = getNestedValue(row, 'payment_method.data.cancel_url');
    if (cancelUrl) {
      const hostname = new URL(cancelUrl).hostname;
      return hostname;
    }
    return '';
  } else if (dataKey === 'amount') {
    const amount = getNestedValue(row, 'amount');
    return amount ? amount.toFixed(2) : ''; // Format amount to two decimal points
  } else if (dataKey === 'testmode') {
    const testmode = getNestedValue(row, 'testmode');
    return testmode ? 'True' : 'False';
  } else {
    return getNestedValue(row, dataKey);
  }
}

function VirtualizedTable({ currentItems }) {
  const navigate = useNavigate(); 

  function handleCellClick(id) {
    navigate(`/magento/checkout-request/${id}`);
  }

  return (
    <Paper style={{ height: 400, width: '100%', marginTop: 40, border: '1px solid #ccc' }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <TableCell key={index} align="left" style={{ width: column.width }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {currentItems.map((row, rowIndex) => (
              <TableRow key={rowIndex}
              onClick={() => handleCellClick(row.id)} 
              style={{ cursor: 'pointer' }} 
              className="hover:bg-gray-300" 
              >
                {columns.map((column, columnIndex) => (
                  <TableCell
                    key={columnIndex}
                    align="left"
                  >
                    {getColumnData(row, column.dataKey)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default VirtualizedTable;
