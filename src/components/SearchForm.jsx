import React from "react";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    const { filters } = props;
    this.state = { filters };
  }
  changeFilter = event => {
    const type=event.target.value;
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
      <div>
        <select onChange={this.changeFilter} value={this.state.filters.type}>
          <option value="users">Users</option>
          <option value="albums">Albums</option>
        </select>
        <button onClick={this.search}> Search</button>
        {canClear ? <button onClick={clear}> Clear</button> : null}
      </div>
    );
  }
}
export default SearchForm;
