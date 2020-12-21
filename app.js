console.log('Fetch API')

async function  getAPI(){
    const api = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log(api, 'api')

    const json = await api.json();
    console.log(json)
}
 
// getAPI();

async function postAPI(){
    const api = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'PIAIC',
            body: 'JS',
            userID: 1
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }
    })
    console.log(api, 'api')
    const json = await api.json();
    console.log(json)
}

postAPI();