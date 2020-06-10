export const ADD = 'ADD'

export const addFeature = (featureName) => {
    return {type: ADD, payload: featureName}
}