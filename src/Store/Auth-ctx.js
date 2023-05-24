import { createContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const Context = createContext({
    isLogin : false,
})

export const ContextProvider = (props)=>{
    // const [islogin, setIslogin] = useState(false)
    const tokenfromstorage = localStorage.getItem('idToken')
    const [idToken, setIdToken]=useState(tokenfromstorage)
    let islogin = !!idToken;
    console.log(islogin)
    // const navigate = useNavigate();

    const loginhandler = (data)=>{
        setIdToken(data.idToken)
        localStorage.setItem('email',data.email)
        localStorage.setItem('idToken',data.idToken)
        localStorage.setItem('name',data.displayName)
        // navigate('/welcome')
       
        
    }

    const context = {
        isLogin : islogin,
        loginhandler : loginhandler,
    }
    return(
        <Context.Provider value={context}>
            {props.children}
        </Context.Provider>
    )
}

export default Context