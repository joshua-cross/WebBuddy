//action creater that creates a human message
export const addUserMessage = (messageContent) => {
    //console.log("Addind the action: " + messageContent);
    return {
        type: 'POST_USER_MESSAGE',
        payload: messageContent
    }
}

//action creater that creates an ai message.
export const addAiMessage = (messageContent) => {
    return {
        type: 'POST_AI_MESSAGE',
        payload: messageContent
    }
}

//action creater that creates any type of message (both AI and user.)
export const addMessage = (messageContent, userType) => {
    return {
        type: 'POST_MESSAGE',
        payload: {
            message: messageContent,
            userType: userType
        }
    }
}