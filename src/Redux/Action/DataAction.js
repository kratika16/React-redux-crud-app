export const enterData  =(data)=>{
    return{
        type: "CREATE",
        payload: data
    };
}

export const editData = (data, id)=>{
    return{
        type: "EDIT",
        payload: data, id,
    };
}

export const deleteData = (id)=>{
    return{
        type: "DELETE",
        payload: id,
    };
}