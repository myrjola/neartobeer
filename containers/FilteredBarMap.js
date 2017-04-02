import { connect } from 'react-redux';
import BarMap from '../components/BarMap';
import { BEER_UNDER_30, BEER_UNDER_40, BEER_UNDER_50 } from '../reducers/maxBeerPriceCategory';

const getVisibleBars = (bars, maxBeerPriceCategory) => {
  switch (maxBeerPriceCategory) {
    case BEER_UNDER_40:
      return bars.filter(b => b.post_category !== BEER_UNDER_50);
    case BEER_UNDER_30:
      return bars.filter(b => b.post_category === BEER_UNDER_30);
    default:
    case BEER_UNDER_50:
      return bars;
  }
};

const mapStateToProps = state => ({
  bars: getVisibleBars(state.bars.items, state.maxBeerPriceCategory),
});

const FilteredBarMap = connect(
  mapStateToProps,
)(BarMap);

export default FilteredBarMap;

// Local Variables:
// mode: js2-jsx
// End:
