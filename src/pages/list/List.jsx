import React from 'react'
import './list.scss'
import SideBar from '../../components/sidebar/Sidebar.jsx'
import Navbar from '../../components/navbar/Navbar.jsx'
import Datatable from '../../components/datatable/Datatable'
const List = () => {
  return (
    <div className='list'>
      <SideBar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default List 