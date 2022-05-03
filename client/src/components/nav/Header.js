
import React, { useState } from 'react'

const Header = () => {
    const [current, setCurrent] = useState("home");

    // const handleClick = (e) => {
    //     // console.log(e.key);
    //     setCurrent(e.key);
    // };
    return (
        <div>

            <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
                <a className="navbar-brand" href="/" >Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item active" key="home">
                            <a className="nav-link" href="/">
                                <i class="fa fa-fw fa-home" />

                               
                                    Home
                               
                            </a>
                        </li>



                        <li className="nav-item dropdown" >
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown link
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>







                        <li className="nav-item " key="login" >
                            <a className="nav-link" href="/login">
                                <i class="fa fa-fw fa-user" />
                            
                                    Login
                                  

                            </a>
                        </li>
                        <li className="nav-item " key="register">
                            <a className="nav-link" href="/register">
                                <i class="fa fa-fw fa-user-plus" />

                               
                                    Register
                                  


                            </a>
                        </li>

                    </ul>
                </div>
            </nav>


        </div>
    )
}
export default Header;

