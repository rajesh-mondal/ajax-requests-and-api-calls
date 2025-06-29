// document.getElementById('fetch-get').addEventListener('click', function(){
//     const apiEndPoint = 'https://jsonplaceholder.typicode.com/posts/16'
//     fetch(apiEndPoint)
//         .then(response=>response.json())
//         .then(data=>{
//             // console.log(data)
//             // console.log(data.id, data.title)
//             console.table(data)
//         })
// })

// document.getElementById('axios-get').addEventListener('click', function () {
//     console.log('axios')
//     const apiEndpoint = 'https://jsonplaceholder.typicode.com/posts/16'
//     axios.get(apiEndpoint)
//         .then(response => {
//             console.log(response.data)
//         })
// })


// document.getElementById('fetch-get').addEventListener('click', async function () {
//     const apiEndpoint = 'https://jsonplaceholder.typicode.com/posts/invalid'
//     const response = await fetch(apiEndpoint)
//     const data = await response.json()
//     console.table(data)
// })

document.getElementById('fetch-get').addEventListener('click', async function(){
    const apiEndPoint = 'https://jsonplaceholder.typicode.com/posts/invalid'
    const response = await fetch(apiEndPoint)
    if(!response.ok){
        console.log("Error");
        return;
    }
    const data = await response.json()
    console.table(data)
})

// document.getElementById('axios-get').addEventListener('click', async function(){
//     console.log('axios')
//     const apiEndPoint = 'https://jsonplaceholder.typicode.com/posts/16'
//     const response = await axios.get(apiEndPoint)
//     // const data = response.data
//     console.table(response.data)
// })

document.getElementById('axios-get').addEventListener('click', async function(){
    console.log('axios')
    const apiEndPoint = 'https://jsonplaceholder.typicode.com/posts/invalid'
    try {
        const response = await axios.get(apiEndPoint)
        const data = response.data
        console.table(data)
    } catch (error) {
        // console.table(error)
        console.table(error.message)
    }
})

document.getElementById('fetch-post').addEventListener('click', async function(){
    const apiEndPoint = 'http://localhost:8000/backend.php'
    const data = {
        'username' : 'admin@example.com',
        'password' : 'admin123'
    }
    const response = await fetch(apiEndPoint, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const output = await response.json()
    console.table(output)
})

document.getElementById('axios-post').addEventListener('click', async function () {
    const apiEndpoint = 'http://localhost:8000/backend.php'
    const data = {
        'username': 'admin@example.com',
        'password': 'password123'
    } //payload
    const response = await axios.post(apiEndpoint, data, {
        'Content-Type': 'application/json'
    })
    const result = response.data
    console.table(result)
})