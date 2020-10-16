import React, { useContext } from 'react'
import { context } from '../../../store'
import SidebarNavItems from './SidebarNavItems'
import SidebarNavItemsTeacher from './SidebarNavItemsTeacher'

 const ActiveSidebarNavItem = ()=>{

    const [state, setState]= useContext(context)

    return (
        state.activeAccount=== "parent"? <SidebarNavItems />: <SidebarNavItemsTeacher />
    )
}

export default ActiveSidebarNavItem