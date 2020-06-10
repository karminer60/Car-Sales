export const ADD = 'ADD'

export const addFeature = (feature) => {
    return {type: ADD, payload: feature }
}
export const CLEAR = 'CLEAR'

export const clearFeature = (id) => {
    return {type: CLEAR, payload: id }
}