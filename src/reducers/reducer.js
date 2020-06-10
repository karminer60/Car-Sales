import {ADD} from '../actions/actions';

export const initialState = {
  descriptionCar: {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  
  }

};
export const reducer = (state = initialState, action) => {
    // build a case for each action type that could possibly be passed in tothe reducer
    // if (action.type === 'INCREMENT_YEAR') {
    //   return {
    //     ...state,
    //     year: state.year + 1
    //   }
    // } else if (action.type === 'UPDATE_MODEL') {
    //   // ?????
    //   // sometimes I create something here... const newItem
    //   return {
    //     ...state,
    //     model: action.payload
    //   }
    // } else {
    //   return state;
    // }

    // same as if, else if, ... , else
    switch (action.type) {
        case 'ADD':            
            return {
              ...state,
              descriptionCar: {
                ...state.descriptionCar,
                car:{
                  ...state.descriptionCar.car,
                  features:[ 
                    ...state.descriptionCar.car.features,
                    action.payload
                ]
                }
              }
            };
        case 'CLEAR':
          
          return {
            ...state,
            descriptionCar: {
              ...state.descriptionCar,
              car:{
                ...state.descriptionCar.car,
                features: 
                  state.descriptionCar.car.features.filter( item =>{
                    if (item.id == action.id) {
                      return false;
                    } else {
                      return true;
                    }
                  }),
                  
              
              }
            }
          };
            
        default:
            return state;
    }
  };
