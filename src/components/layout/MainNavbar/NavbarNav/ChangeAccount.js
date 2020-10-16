import React, { useContext } from 'react'
import {
    DropdownItem,
  } from "shards-react";
import { context } from '../../../../store';
import { stat } from 'fs';
const ChangeAccount = ()=>{
    
    const [state, setState] = useContext(context);
    const changeAccount = async ()=>{
        console.log(state.activeAccount)
        if(state.activeAccount==="parent"){
            setState(
                {activeAccount: "teacher"}
            )
        }
        else{
            setState(
                {activeAccount: "parent"}
            )
        }
        localStorage.setItem("activeAccount",state.activeAccount)
    }

    return(
        <DropdownItem onClick={changeAccount} >
        <i className="material-icons">&#xE8B8;</i> Change Account
      </DropdownItem>
    )
}

export default ChangeAccount;