import { connect } from "react-redux";
import App from "./../components/App";
import {
  actions as SearchActions,
  selectors
} from "./../reducers/search";

const props = state => ({
  results: selectors.getSearchResult(state),
  filters: selectors.getFilter(state),
  isLoading: selectors.isLoading(state),
  isError: selectors.isError(state),
  canClear: selectors.canClear(state)
});
const actions = { ...SearchActions };

export default connect(props, actions)(App);
