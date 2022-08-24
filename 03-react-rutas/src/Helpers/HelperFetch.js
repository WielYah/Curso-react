/* es un helper y no un hook ya que no utilizamos los hooks de useState o useEfect, etc? */

export const HelperFetch=()=>{

    const fetchPersonalizado= async(url,options)=>{
        const defaultheaders = {
            accept: "application/json",
        };

        const controller=new AbortController();     
        options.signal=controller.signal; //averiguar sobre fetch la propiedad "signal" (vienen con el metodo del abortt() para utilizar el metodo del abort())

        options.method= options.method||"GET";
        options.headers=options.headers?{...defaultheaders,...options.headers}:defaultheaders;
        options.body=JSON.stringify(options.body)||false;
        //console.log(options);
        if(!options.body) delete options.body;
        setTimeout(() => controller.abort(), 2000);

        return fetch(url,options)
        .then((res)=>res.ok?res.json():Promise.reject({
          err:true,
          statusText:res.statusText||"Error al consumir la API",
          status:"400"
        }))
        .catch((err)=>err)
        
      /*   let res= await fetch(url,options);
         return !res.ok? Promise.reject({
                err:true,
                statusText:res.statusText||"Error al consumir la API",
                status:"400"
            }):await res.json(); */
            
    }

    const get=(url,options={})=>{
        return fetchPersonalizado(url,options);
    }
    const post=(url,options={})=>{ 
        options.method="POST"
        return fetchPersonalizado(url,options);
    }
    const put=(url,options={})=>{
        options.method="PUT"
        return fetchPersonalizado(url,options); 
    }
    const dele=(url,options={})=>{
        options.method="DELETE"
        return fetchPersonalizado(url,options);
    }

    return{
        get,
        post,
        put,
        dele
    }

}




















































/* 
export const HelperFetch=()=>{

    const customFetch = (url, options) => {
      const defaultheaders = {
        accept: "application/json",
      };
  
      const controller = new AbortController();
      options.signal = controller.signal;
  
      options.method = options.method || "GET";
      options.headerss = options.headerss
        ? { ...defaultheaders, ...options.headerss }
        : defaultheaders;
  
      options.body = JSON.stringify(options.body) || false;
      if (!options.body) delete options.body;
  
      //console.log(options);
      setTimeout(() => controller.abort(), 3000);
  
      return fetch(url, options)
        .then((res) =>
          res.ok
            ? res.json()
            : Promise.reject({
                err: true,
                status: res.status || "00",
                statusText: res.statusText || "Ocurrió un error",
              })
        )
        .catch((err) => err);
    };
  
    const get = (url, options = {}) => customFetch(url, options);
  
    const post = (url, options = {}) => {
      options.method = "POST";
      return customFetch(url, options);
    };
  
    const put = (url, options = {}) => {
      options.method = "PUT";
      return customFetch(url, options);
    };
  
    const del = (url, options = {}) => {
      options.method = "DELETE";
      return customFetch(url, options);
    };
  
    return {
      get,
      post,
      put,
      del,
    };
  };
 */









