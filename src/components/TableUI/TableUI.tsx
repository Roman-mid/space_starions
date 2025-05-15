import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import type { DataType } from '../../services/types';

interface TableUIType {
  data: DataType[];
}

const TableUI = ({ data }: TableUIType) => {
  const isPrevPrice = data[0]?.artifacts[0].history;
  const table = data.map((row) => {
    const artifactsItems = row.artifacts.map((art) => {
      const prevPrices = isPrevPrice ? art.history.join(', ') : '';

      return (
        <TableRow key={art.name}>
          <TableCell align='left'>{art.name}</TableCell>
          <TableCell align='left'>{art.price}</TableCell>
          {isPrevPrice && <TableCell align='left'>{prevPrices}</TableCell>}
        </TableRow>
      );
    });

    return (
      <TableContainer component={Paper} key={row.name}>
        <Table
          sx={{ minWidth: 650, tableLayout: 'fixed' }}
          aria-label='simple table'
        >
          <TableHead>
            <TableRow>
              <TableCell colSpan={isPrevPrice ? 3 : 2} align='center'>
                {row.name}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='left'>Artifact</TableCell>
              <TableCell align='left'>Price</TableCell>
              {isPrevPrice && (
                <TableCell align='left'>Previus prices</TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>{artifactsItems}</TableBody>
        </Table>
      </TableContainer>
    );
  });

  return <div className='table-wrap'>{table}</div>;
};

export default TableUI;
