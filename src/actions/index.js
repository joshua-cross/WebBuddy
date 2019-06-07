export const addMessage = (messageContent) => {
    console.log("Addind the action: " + messageContent);
    return {
        type: 'POST_USER_MESSAGE',
        payload: messageContent
    }
}

export const addAiMessage = (messageContent => {
    return {
        type: 'POST_AI_MESSAGE',
        payload: messageContent
    }
})