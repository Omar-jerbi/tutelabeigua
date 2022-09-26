import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {

    const [sideNav, setSideNav] = useState(false)


    const changecolor = (e) => {
        document.querySelectorAll('.nav-link-large').forEach((el) => { el.style.color = 'black'; el.style.fontWeight = '200' })
        e.target.style.color = '#808080'
        e.target.style.fontWeight = '600'
    }


    return (
        <nav>
            <div className="row" id='mainrow'>

                <div className="nav-title-large hide-on-med-and-down col l4 offset-l1">
                    <Link to='/'>
                        <h4 id='titolo-big' style={{ color: '#171717' }}>tutela<span style={{ color: 'grey' }}>beigua</span></h4>
                    </Link>
                </div>

                <div className="nav-menu-small show-on-medium-and-down hide-on-large-only col m4 s4 left">
                    <i class='fa-solid fa-bars' onClick={() => setSideNav(true)}></i>
                    <div className={`nav-links-small${sideNav ? ' show' : ''}`}>
                        <ul className='row'>
                            <li className='col s12 m12'>
                                <div className="close-nav">
                                    <i className="fa-solid fa-x" onClick={() => setSideNav(false)}></i>
                                </div>
                            </li>
                            <li className='col s12 m12'>
                                <Link className='nav-link-small' to='/' onClick={() => setSideNav(false)}>
                                    Home
                                </Link></li>
                            <li className='col s12 m12'>
                                <Link className='nav-link-small' to='/projs' onClick={() => setSideNav(false)}>
                                    Progetti
                                </Link>
                            </li>
                            <li className='col s12 m12'>
                                <Link className='nav-link-small' to='/tutela' onClick={() => setSideNav(false)}>
                                    TutelaBeigua
                                </Link>
                            </li>
                            <li className='col s12 m12'>
                                <Link className='nav-link-small' to='/about' onClick={() => setSideNav(false)}>
                                    Info
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="nav-title-small show-on-medium-and-down hide-on-large-only col m8 s8 right">
                    <Link to='/'>
                        <h4 className='right' id='titolo-big'>tutela<span style={{ color: 'grey' }}>beigua</span></h4>
                    </Link>
                </div>



                <div className="nav-menu-large col l6 hide-on-med-and-down">
                    <ul className='row'>
                        <li className='col l3'>
                            <Link className='nav-link-large' to='/' onClick={(e) => changecolor(e)}>
                                Home
                            </Link>
                        </li>
                        <li className='col l3'>
                            <Link className='nav-link-large' to='/projs' onClick={(e) => changecolor(e)} >
                                Progetti
                            </Link>
                        </li>
                        <li className='col l3'>
                            <Link className='nav-link-large' to='/tutela' onClick={(e) => changecolor(e)} style={{ padding: '25px 0 0 0' }}>
                                TutelaBeigua
                            </Link>
                        </li>
                        <li className='col l3'>
                            <Link className='nav-link-large' to='/about' onClick={(e) => changecolor(e)} >
                                Info
                            </Link>
                        </li>
                    </ul>
                </div>



            </div>
        </nav>
    )
}

export default Navbar