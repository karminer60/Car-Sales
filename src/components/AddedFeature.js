import React from 'react';
import {connect} from 'react-redux';
import {clearFeature} from '../actions/actions.js';


const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => props.clearFeature(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};




export default connect(
  null,
  {clearFeature}
)(AddedFeature);