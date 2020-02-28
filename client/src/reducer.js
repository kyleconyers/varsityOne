export default function reducer(state, action){
    switch (action.type) {
        case 'TOGGLE_TAG':
            const tags = new Set(state.tags);
            if(action.tag === 'all'){
                if(tags.has('all')){
                    return state;
                }
                else{
                    return {
                        ...state,
                        tags: new Set(['all'])
                    };
                }
            }
            else{
                tags.delete('all');
            }

            if(tags.has(action.tag)){
                tags.delete(action.tag);
                if(tags.size === 0){
                    tags.add('all');
                }
            }
            else{
                tags.add(action.tag);
            }
            return {
                ...state,
                tags: tags
            };
        default:
            return state;
    }
}