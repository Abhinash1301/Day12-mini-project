import React from 'react'
import './Companies.css'
import {Link} from 'react-router-dom';
function Event() {
  return (
    <div className='ticketbg'>
      <center><h1 className='jithu'>APPLIED</h1></center>
      <div className="ticket ticket-1 ticket-animation">
  <div className="date">
    <span className="day">46</span>
    <span className="month-and-time"> days ago</span>
  </div>

  <div className="artist">
    <span className="name">UX/UI Desginer</span><br/>
    <span className="live small">Google</span>
  </div>
  <div className="rip"></div>
  <div className="cta">
    <Link to="/"><button className="buy" href="#">Pending</button></Link>
  </div>
</div>
<div className="ticket ticket-2 ticket-animation">
  <div className="date">
    <span className="day">27</span>
    <span className="month-and-time">days ago</span>
  </div>

  <div className="artist">
    <span className="name">BUSSINESS LEAD</span><br />
    <span className="live small">Figms</span>
  </div>
  <div className="rip"></div>
  
  <div className="cta">
    <button className="buyis" href="#">Applied</button>
  </div>
</div>
<div className="ticket ticket-3 ticket-animation">
  <div className="date">
    <span className="day">07</span>
    <span className="month-and-time">days Ago</span>
  </div>

  <div className="artist">
    <span className="name">GRAPHIC DESIGNER</span><br />
    <span className="live small">Pinterest</span>
  </div>

  <div className="rip"></div>
  
  <div className="cta">
    <button className="buyid" href="#">Rejected</button>
  </div>
</div>
    </div>
  )
}

export default Event