import React from 'react';
import {connect} from 'react-redux';
import {addFeature} from '../actions/actions.js';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => props.dispatch({ type: "CLEAR" })}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
   
  };
};


export default connect(
  mapStateToProps,
  {addFeature}
)(AddedFeature);