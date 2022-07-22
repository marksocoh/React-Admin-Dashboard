import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SchoolIcon from '@mui/icons-material/School';
import FactoryIcon from '@mui/icons-material/Factory';
import FaxIcon from '@mui/icons-material/Fax';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import './sidebar.scss'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'> 
        <span className='logo'>EAIHM</span>
      </div>
      <hr/>
      <div className='center'>
        <ul>
          <p className="title">MAIN</p>
            <li>
                <DashboardIcon className='icon'/>
                <span>Dashboard</span>
            </li> 
            <li>
                <GroupAddIcon className='icon'/>
                <span>Users</span>
            </li> 
            <li>
                <PeopleAltIcon className='icon'/>
                <span>Students</span>
            </li>
            <li>
                <AssignmentIndIcon className='icon'/>
                <span>Instructors</span>
            </li> 
            <li>
                <SchoolIcon className='icon'/>
                <span>Academics</span>
            </li> 
            <p className="title">ACADEEMICS</p>
            <li>
                <FactoryIcon className='icon'/>
                <span>Hostels</span>
            </li> 
            <li>
                <FaxIcon className='icon'/>
                <span>Front office</span>
            </li>
            <li>
                <FaxIcon className='icon'/>
                <span>Stats</span>
            </li> 
            <p className="title">LIST</p>
            <li>
                <FaxIcon className='icon'/>
                <span>Notifications</span>
            </li> 

            <li>
                <FaxIcon className='icon'/>
                <span>Logs</span>
            </li> 
            <li>
                <FaxIcon className='icon'/>
                <span>Settings</span>
            </li> 
            <li>
                <FaxIcon className='icon'/>
                <span>Log out</span>
            </li> 
        </ul>
      </div>
      <div className="bottom">
          <div className='colorOptions'></div>
          <div className='colorOptions'></div>
      </div>
 
    </div>

  )
}

export default Sidebar