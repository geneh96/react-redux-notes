const initState = {
    notes: [
        {
            id: '1',
            title: 'title1',
            content: 'content1'
        },
        {
            id: '2',
            title: 'title2',
            content: 'content2'
        },
    ]
}

const noteReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_NOTE':
            console.log('created project', action.note)
            return state
        
        case 'CREATE_NOTE_ERROR': 
            console.log('create project error', action.err)
            return state

        default:
            return state
    }
}

export default noteReducer