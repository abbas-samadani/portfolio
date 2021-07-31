import axios from 'axios'

// export default axios.create({
    
//     withCredentials: false,
//         headers: {
//           'Access-Control-Allow-Origin':'*',
//           'Accept': 'application/json',
//           'Content-Type': 'application/json',
//           'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',          
//           'Access-Control-Allow-Credentials': 'true'
//       }  
 
//   });


axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1/';
axios.defaults.headers.post['Accept'] = 'application/json';
//axios.defaults.headers.post['Access-Control-Allow-Origin'] = 'http://localhost:3000';
// axios.defaults.headers.post['Access-Control-Allow-Headers'] = 'Special-Request-Header';
// axios.defaults.headers.post['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE,PATCH,OPTIONS';
//axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.headers.post['Access-Control-Allow-Credentials'] = 'true';

export function get(url , config={}){
    return axios.get(url , config)
    .then(res => res.data)
    .catch(error => console.log(error))
}

export function post(url , data , config={}){
    return axios.post(url , data, config)
    .then(res => res.data)
    .catch(error => console.log(error))
}

