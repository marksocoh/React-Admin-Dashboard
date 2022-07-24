import Sidebar from '../../components/sidebar/Sidebar.jsx'
import Navbar from '../../components/navbar/Navbar.jsx'
import "./home.scss"
import Widgets from '../../components/widgets/Widgets.jsx'
import Featured from '../../components/featured/Featured.jsx'
import Chart from '../../components/chart/Chart.jsx'
import Table from '../../components/table/Table.jsx'

const Home = () => {
  return (
    <div className='home'>
        <Sidebar/>
        <div className='homeContainer'>
        <Navbar/>
         <div className="widgets">
            <Widgets type="user"/>
            <Widgets type="fee"/>
            <Widgets type="balance"/>
            <Widgets type="staff"/>
         </div>
         <div className="charts">
            <Featured/>
            <Chart aspect={2 / 1} title="Last 6 months"/>
         </div>
         <div className="listContainer">
          <div className="listTitle">
            Latest transactions
            <Table/>
          </div>
         </div>
        </div>
    </div>
  )
}

export default Home