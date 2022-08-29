import { createContext,useState } from "react";

const SessionContext=createContext();

const SessionProvider=({children})=>{

  const [session, setSession] = useState(null);

  const changeSesion=(e)=>{
    if(session){
      setSession(null)
    }else{
      setSession(true)
    }
    console.log(e.target.value);
  }
  const data={session,changeSesion};

  return(
    <SessionContext.Provider value={data}>{children}</SessionContext.Provider>
  );

}

export {SessionProvider};

export default SessionContext;
