import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 450,
  },
});

export default function ClientsList(props) {
  const clientsList = props.list; 
  const navigate =  useNavigate();
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  const columns = [
    { id: 'seq', label: 'Seq', minWidth: 170 },
    { id: 'name', label: 'Name', minWidth: 100 },
    { id: 'address',label: 'Address',minWidth: 170,align: 'center'},
    { id: 'city',label: 'City',minWidth: 170,align: 'center'},
    { id: 'state',label: 'State',minWidth: 170,align: 'center'},
  ];





  return (
    <>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {clientsList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row , index) => {
              return (
                <TableRow onClick={() => navigate(`/wizard/carePlan/${row.userID}`) } hover role="checkbox" tabIndex={-1} key={index}>
                  {columns.map(column => {
                    let counter = index + 1;
                    const value = row[column.id] ;
                    
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {typeof value != "undefined" ? value : counter}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={clientsList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}



