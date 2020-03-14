export default function reducer(state, action){
    switch (action.type) {
        case 'TOGGLE_TAG':
            let tag = action.tag;
            return {
                ...state,
                tag: tag
            };
        case 'SET_MESSAGES':
            const messages = state.messages
            return {
                ...state,
                messages: messages
            }
        default:
            return state;
    }
}