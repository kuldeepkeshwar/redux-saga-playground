import React from "react";
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

const btnStyle = {
  margin: 12,
};
const formStyle={
  display: 'flex',
  justifyContent: 'center'
}
class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    const { filters } = props;
    this.state = { filters };
  }
  changeFilter = (event, index, value) => {
    const type=value;
    this.setState(state => {
      return { filters: { ...state.filters, type} };
    });
  };
  search = () => {
    this.props.search(this.state.filters);
  };
  render() {
    const { clear, canClear } = this.props;
    return (
      <div style={formStyle}>
        <SelectField
          value={this.state.filters.type}
          onChange={this.changeFilter}
        >
          <MenuItem value={"users"} primaryText="Users" />
          <MenuItem value={"albums"} primaryText="Albums" />
        </SelectField>
        <RaisedButton style={btnStyle} onClick={this.search} label="Search" />

        {canClear ?
          <RaisedButton style={btnStyle} onClick={clear} label="Clear" />: null}
      </div>
    );
  }
}
export default SearchForm;
