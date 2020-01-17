export const createNote = (note) => {
    return( $.ajax({
        url: `api/users/${userId}/notes`,
        method: "POST",
        data: {note}
    }))
}



export const fetchNotes = () => {
    return( $.ajax({
        url: `api/users/${userId}/notes`,
        method: "GET"
    }))
}

export const fetchNote = () => {
    return ($.ajax({
        url: `api/users/${userId}/notes/${id}`,
        method: "GET"
    }))
}