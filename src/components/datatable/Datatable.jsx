import React from 'react'
import './datatable.scss'
import {DataGrid} from '@mui/x-data-grid';
import { userColumns,userRows } from '../../datatablesource';

const actionColumn =[
{field:'action', headerName:'Action',width:200,
   renderCell:()=>{
    return(
      <div className='cellAction'>
        <div className='viewButton'>view</div>
        <div className='deleteButton'>Delete</div>
      </div>

    )
   }
}
]
const Datatable = () => {
  return (
    <div className='datatable'>
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