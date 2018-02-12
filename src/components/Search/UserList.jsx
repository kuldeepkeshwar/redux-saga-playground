import React from "react";
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

export default ({ results }) =>
  results.length > 0 ? (
    <Table>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn>ID</TableHeaderColumn>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Email</TableHeaderColumn>
          <TableHeaderColumn>Phone</TableHeaderColumn>
          <TableHeaderColumn>Website</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {results.map(user => (
          <TableRow key={user.id}>
            <TableRowColumn>{user.id}</TableRowColumn>
            <TableRowColumn>{user.name}</TableRowColumn>
            <TableRowColumn>{user.email}</TableRowColumn>
            <TableRowColumn>{user.phone}</TableRowColumn>
            <TableRowColumn>{user.website}</TableRowColumn>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ) : null;
