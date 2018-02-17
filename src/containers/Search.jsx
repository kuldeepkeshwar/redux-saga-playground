import { connect } from 'react-redux';
import { SearchComponent } from 'components/Search';
import { actions, selectors } from 'reducers/search';

const props = state => ({
  userData: selectors.getUserData(state),
  albumData: selectors.getAlbumData(state),
  filters: selectors.getFilter(state)
});

export default connect(props, actions)(SearchComponent);
