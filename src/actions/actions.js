export const ADD = 'ADD'

export const addFeature = (featureName, id, price) => {
    return {type: ADD, payload: featureName, hereload: id, aceload: price }
}