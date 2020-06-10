import React from 'react';
import {connect} from 'react-redux';
import {addFeature} from '../actions/actions.js';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => props.addFeature( props.newFeature )}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  console.log(state);
  
};

export default connect(
  mapStateToProps,
  {addFeature}
)(AddedFeature);