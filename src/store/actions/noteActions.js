export const createNote = (note) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //Make async call to db
        const firestore = getFirestore()
        firestore.collection('Notes').add({
            ...note,
            authorFirstName: 'Gene',
            authorLastName: 'Hernandez',
            authorID: '12345',
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_NOTE', note})
        }).catch((err)=>{
            dispatch({ type: 'CREATE_PROJECT_ERROR', err})
        })

        
    }
}