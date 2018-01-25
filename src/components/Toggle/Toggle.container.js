// src/component/Artist/Artist.container.js

import { connect } from 'react-redux';
import { selectToggle } from './Toggle.selectors';
import { toggle } from '../../components/Toggle/Toggle.actions';

import Toggle from './Toggle.component';
  
const mapStateToProps = (state) => ({
  isActive: selectToggle(state),  
});

const mapDispatchToProps = {
  toggle,
};

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
