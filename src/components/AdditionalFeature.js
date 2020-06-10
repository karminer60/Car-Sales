import React from 'react';
import {connect} from 'react-redux';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}

      
      <button className="button"onClick={() => props.dispatch({ type: "ADD" })}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    title: state.titleReducer.title,
    editing: state.titleReducer.editing
  };
};

export default connect(
  mapStateToProps,
  {}
)(AdditionalFeature);
