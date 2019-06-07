export default (state = [], action) => {
    switch(action.type) {
        case 'POST_USER_MESSAGE':
            //console.log("Adding the message: " + action.payload + " to the state");
            return [...state, action.payload]
        default: 
            return state;
    }
}