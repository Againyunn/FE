import axios from "axios";

export default{
    methods: {
        async $callAPI(url, method, data){
            return (await axios({
                method: method,
                url,
                data
            }).then(
                el=>{
                    data = el;
                    return data
                }
            ).catch(
                e => {
                    console.log(e);
                }
            ))
        }
    }
}