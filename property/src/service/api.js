import axios from "axios";
const base = "http://localhost:8080"
class api
{
    createproperty(content)
    {
        return  axios.post(base+"/createproperty",content)
      }
    veriftuser(name,phoneno){
        
        return axios.post(`${base}/Verifyuser/${name}/${phoneno}`);
    }
    createuser(content)
    {
        return  axios.post(base+"/createtask",content)
      }
    getpropertybyid(phoneno){
        return axios.get(`${base}/getproperty/${phoneno}`);
    }
    findbycity(city){
        return axios.get(base+"/getpropertybycity/"+{city})
    }
    getproperty(){
        return axios.get(base+'/getall')
    }
    }
export default new api();