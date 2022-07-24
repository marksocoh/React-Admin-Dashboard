import React from 'react'
import "./single.scss"
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Chart from '../../components/chart/Chart'
import List from '../../components/table/Table'

const Single = () => {
  return (
    <div className='single'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOvIuFVvPFU596919Aj3EZMWryh0BAgjXX16N1kBboyn9Algcsl_hdUApl6j8qBcTE2nI&usqp=CAU" alt="" className="itemImg" />
              <div className="detail">
                <h1 className="itemTitle">John Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+254 718 282 544</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">kahawa Sukari, Garrissa Rd.</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">County:</span>
                  <span className="itemValue">Nairobi</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1 } title="Users Expenditure [last 6 months]"/>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transaction</h1>
          <List/>
        </div>
      </div>
    </div>
  )
}

export default Single