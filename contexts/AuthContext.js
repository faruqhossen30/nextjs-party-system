import {createContext, useEffect, useReducer} from 'react';
import axios from '../lib/axios';


export const AuthContext = createContext();

export const authReducer = (state, action)=>{
    switch(action.type){
        case 'LOGIN':
           return {user: action.payload} 
        case 'USER':
           return {user: action.payload} 
        case 'LOGOUT':
           return {user: null}
           default:
            return state
    }
}




export const AuthContextProvider = ({children})=>{
    const [state, dispatch]= useReducer(authReducer, {
        user: null
    });
    

    useEffect(()=>{
        // const user = JSON.parse(localStorage.getItem('user'))
        const token = localStorage.getItem('token')
        if(token){
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                  }
              };
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/user`)            
            .then((res)=>{
                console.log(res.data);
                dispatch({type: 'USER', payload: res.data});
            })
            
        }
        // dispatch({type: 'LOGIN', payload: 'some'});
    },[]);

    // console.log('AutchContext state = ', state);

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )

}