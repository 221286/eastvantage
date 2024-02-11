import axios, * as others from 'axios';


 const fetchurls = async (url)=>{
    const response = await axios.get(url);
   // const Json = await data.json();
    return response.data;

}

export default fetchurls;