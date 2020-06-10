export const initialState = {

}
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
            const newItem = {
                name: action.name ,
                id: new Date(),
                completed: false
              };
            return [...state, newItem];
        case 'CLEAR':
            return state.filter(item => {
                if (item.completed) {
                  return false;
                } else {
                  return true;
                }
              })
            
        case 'TOGGLE':
             return state.map(item => {
                if (item.id === action.id) {
                  return {
                    ...item,
                    completed: !item.completed
                  };
                } else {
                  return item;
                }
              })
            
        default:
            return state;
    }
  };
