const initialState = {
    results: [],
    pictures:[],
    path:{}
}
  
const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ALL_MENU':
            return {...state, results: action.payload}
        case 'ALL_PICTURES':
        	return {...state, pictures: action.payload}
        case 'ADD_PICTURE':
        	return {...state,path: action.payload}
        default:
            return state
    }
}

export default menuReducer