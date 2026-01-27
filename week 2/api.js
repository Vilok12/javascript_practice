//  make api request 

fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(err=>console.log('err is',err))


// modern syntax for api request 
async function getdata() {
    // make api req and get res
    let res=await fetch('https://jsonplaceholder.typicode.com/posts')
    // extract data from res
    let data=await res.json()
    console.log('data is ',data)
}
getdata()