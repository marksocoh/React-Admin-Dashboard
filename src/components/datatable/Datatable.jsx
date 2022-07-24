import React from 'react'
import './datatable.scss'
import {DataGrid} from '@mui/x-data-grid';
import { userColumns,userRows } from '../../datatablesource';
import { Link } from 'react-router-dom';

const actionColumn =[
{field:'action', headerName:'Action',width:200,
   renderCell:()=>{
    return(
      <div className='cellAction'>
        <Link to='/users/single' style={{textDecoration:"none"}}>
            <div className='viewButton'>view</div>
        </Link>
        <Link to='/' style={{textDecoration:"none"}}>
          <div className='deleteButton'>Delete</div>
        </Link>
      </div>

    )
   }
}
]
const Datatable = () => {
  return (
    <div className='datatable'>
      <div className="datatableTitle">
        Add new user
        <Link to ="/users/new" className='link'>Add new</Link>
      </div>
        <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable