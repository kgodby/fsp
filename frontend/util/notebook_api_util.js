export const createNotebook = notebook =>{
    return($.ajax({
        url: `api/users/${userId}/notebooks`,
        method: "POST",
        data: {notebook}
    }))
}

export const fetchNotebook = () => {
    return($.ajax({
        url: `api/users/${userId}/notebooks/${id}`,
        method: "GET"
    }))
}

export const fetchNotebooks = () => {
    return ($.ajax({
        url: `api/users/${userId}/notebooks`,
        method: "GET"
    }))
}