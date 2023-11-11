
const getTodos = async() => {

    const response1 = await fetch('todos.json');

    if(response1.status !== 200){
        throw new Error('Could not fetch the data');
    }

    const data1 = await response1.json();

    return data1;

};


getTodos()
.then(data1 => console.log(data1))
.catch(err => console.log(err.message));


// const getTodos = async () => {
//     try {
//       const response1 = await fetch('todos.json');
  
//       if (response1.status !== 200) {
//         throw new Error('Could not fetch the data from the first file');
//       }
  
//       const data1 = await response1.json();
  
//       // Fetch data from another JSON file
//       const response2 = await fetch('mukit.json');
  
//       if (response2.status !== 200) {
//         throw new Error('Could not fetch the data from the second file');
//       }
  
//       const data2 = await response2.json();
  
//       return { data1, data2 };
//     } catch (error) {
//       throw new Error(`Error fetching data: ${error.message}`);
//     }
//   };
  
//   getTodos()
//     .then(({ data1, data2 }) => {
//       console.log('Data from the first file:', data1);
//       console.log('Data from the second file:', data2);
//     })
//     .catch((err) => console.log(err.message));
  




// fetch('todos.json').then((response) => {
//     console.log(response);
//     return response.json();
// }).then(data => {
//     console.log(data);
// }).catch(err =>{
//     console.log(err);
// });














// ################################################################

// const getTodos = ( url ) =>{

//     return new Promise((resolve,reject) => {
//         const request = new XMLHttpRequest();

//         request.addEventListener('readystatechange', () => {
//             // console.log(request, request.readyState);
//             if(request.readyState === 4 && request.status === 200){
//                 const data = JSON.parse(request.responseText);
//                 resolve(data);
//             } else if(request.readyState === 4){
//                 reject('error getting data');
//             }
//         });
        
//         request.open('GET', url);
        
//         request.send(); 
//     });

  
// };

// getTodos('todos.json').then(data => {
//     console.log(data);
//     return getTodos('mukit.json');

// }).then(data => {
//     console.log(data);
//     return getTodos('db.json');
// }).then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })




// const getSomething = () => {

//     return new Promise((resolve,reject) => {
//         //fetch something data
//         resolve('some data');
//         // reject('some error');

//     });

// };

// getSomething().then((data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err);
// });

// getSomething().then((data) => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });