export default (state = [], action) => {
    switch(action.type) {
        case "POST_AI_MESSAGE":
            return [...state, action.payload];
        default:
            return state;
    } 
};