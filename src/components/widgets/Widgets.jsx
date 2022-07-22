import './widgets.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
const Widgets = ({type}) => {
  let data;
// temp values
const amount = 126320
const perc = 30
  switch(type){
    case"user":
      data={
        title:'USERS',
        isMoney:false,
        link:"See all users",
        icon:<PersonOutlineOutlinedIcon className='icon' style={{color:"white",backgroundColor:"green"}}/>
    };
    break;
    case 'fee':
      data={
        title:'FEES',
        isMoney:true,
        link:'view detail',
        icon:<PersonOutlineOutlinedIcon className='icon' style={{color:"white",backgroundColor:"rgba(0,128,0,0.2)"}}/>
      };
      break;
      case 'balance':
        data={
          title:"BALANCE",
          isMoney:true,
          link: 'view all balances',
          icon:<PersonOutlineOutlinedIcon className='icon' style={{color:"white",backgroundColor:"rgba(255,0,0,0.2)"}}/>
      };
      break;
      case 'staff':
        data={
          title:'STAFF',
          isMoney:false,
          link:'see all staff',
          icon:<PersonOutlineOutlinedIcon className='icon' style={{color:"white",backgroundColor:"rgba(218,165,32,0.2)"}}/>
        };
        break;
      default:
        break;
  }

  return (
    <div className='widget'>
        <div className="left">
            <span className='title'>{data.title}</span>
            <span className='counter'>{data.isMoney && "ksh."} {amount}</span>
            <span className='link'>{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpIcon/>
                {perc}%
            </div>
            {data.icon}
        </div>
    </div>
  )
}
 
export default Widgets