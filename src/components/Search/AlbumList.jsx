import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

// const rowStyles = {
//   display: "flex",
//   border: "#bb9797 solid 2px",
//   alignItems: "center",
//   margin: "10px",
// };
// const cellStyles = {
//   margin: "10px",
// };
// const containerStyles = {
//   margin: "10px"
// };
export default ({ results }) =>
  results.length > 0 ? (
    <Table>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn>ID</TableHeaderColumn>
          <TableHeaderColumn>User Id</TableHeaderColumn>
          <TableHeaderColumn>Title</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {results.map(album => (
          <TableRow key={album.id}>
            <TableRowColumn>{album.id}</TableRowColumn>
            <TableRowColumn>{album.userId}</TableRowColumn>
            <TableRowColumn>{album.title}</TableRowColumn>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ) : null;
