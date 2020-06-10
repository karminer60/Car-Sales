import React, { useState, useReducer } from "react";


import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {connect} from 'react-redux';





const App = (props) => {
 

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.descriptionCar.car} />
        <AddedFeatures car={props.descriptionCar.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.descriptionCar.additionalFeatures} />
        <Total car={props.descriptionCar.car} additionalPrice={props.descriptionCar.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = (state)=> {
  debugger;
  return {
    descriptionCar: state.descriptionCar
  }
}
export default connect (mapStateToProps, {})( App);
