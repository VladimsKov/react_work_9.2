export const getData = async (url, setFunc)=> {
     fetch(url)
    .then(response => response.json())
    .then(data => setFunc(data))
    .catch(e => {console.error(e); setFunc([])});   
}

export const postData = async (url, body)=> {
    const response = await fetch(url, {
        method: "POST",
        headers: {'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify(body)
    })
    .catch(e=> {console.error(e)});
    return response;
}

export const delData = async (url, setFunc) => {
    const response = await fetch(url, {
        method: "DELETE"
    });
    return response;
}