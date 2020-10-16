import React, { useState, useEffect } from 'react'

export const context = React.createContext();

const initialState = {
    firstName: "tchatseu",
    lastName: "frank",
    type:"parent",
    activeAccount:localStorage.getItem("activeAccount")
}
const Store = ({children})=>{

    const [state, setState]= useState(initialState);
    /* useEffect(
        () =>{
            setState({
                firstName: "tchatseu",
                lastName: "frank",
                type:"parent",
                activeAccount:localStorage.getItem("activeAccount")
            })
        }
      ) */
    return (
        <context.Provider value={[state,setState]}> {children} </context.Provider>
    )
}
export default Store;