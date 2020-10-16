import React, { useContext } from 'react'
import { context } from '../store';

const Data = () => {

  const menuParent = [
    
    {
      title: "Child",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/childs",
    },
    {
      title: "Reservation",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/reserver",
    },
    {
      title: "Enseignants",
      to: "/teachers",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    {
      title: "About Us",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/about-us",
    },
  ];

  return (menuParent)
}
export default Data