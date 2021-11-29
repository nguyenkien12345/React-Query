export const getAllBooks = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_SERVER}/books`);
    if (!response.ok){
        throw new Error(response.json().message);
    }
    const data = await response.json();
    return data;
}

export const removeBook = async (id) => {
    const response = await fetch(`${process.env.REACT_APP_API_SERVER}/books/${id}`, {method: "DELETE"});
    if (!response.ok){
        throw new Error(response.json().message);
    }
    return true;
}

export const getBook = async ({ queryKey }) => {
    // /* eslint-disable no-unused--vars */
    const [_key, {id}] = queryKey; 
    // Bằng cách sử dụng dấu _ cạnh chữ key tôi đang biểu thị rằng tôi sẽ không sử dụng nó (key), nó sẽ là 1 biến không được sử dụng
    const response = await fetch(`${process.env.REACT_APP_API_SERVER}/books/${id}`);
    if (!response.ok){
        throw new Error(response.json().message);
    }
    const data = await response.json(); 
    return data;
}

export const updateBook = async ({id, ...data}) => {
    const response = await fetch(`${process.env.REACT_APP_API_SERVER}/books/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    if(!response.ok){
        throw new Error(response.json().message);
    }
    const dt = await response.json();
    return dt;
}

export const createBook = async (data) => {
    const response = await fetch(`${process.env.REACT_APP_API_SERVER}/books/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
    if(!response.ok){
        throw new Error(response.json().message);
    }
    const dt = await response.json();
    return dt;
}