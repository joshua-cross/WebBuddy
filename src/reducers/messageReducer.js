export default (state = [], action) => {
    switch(action.type) {
        case 'POST_MESSAGE':
            console.log(`Adding the message ${action.payload.message}`);
            return [...state, action.payload];
        default:
            return state;
    }
}