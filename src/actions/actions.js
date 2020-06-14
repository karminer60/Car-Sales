export const ADD = 'ADD'

export const addFeature = (feature) => {
    return {type: ADD, feature }
}
export const CLEAR = 'CLEAR'

export const clearFeature = (feature) => {
    return {type: CLEAR, feature }
}