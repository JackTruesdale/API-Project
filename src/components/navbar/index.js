import React from "react";
import { Nav, NavLink, NavMenu }
    from "./navBarElements";

const Navbar = () => {
    return (
 
        

        <div className="NavBar">
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                        
                    </div>
                        <div style={{textAlign: 'center'}}>
                            <p style={{ color: 'purple', fontSize: '60px', fontFamily: 'Cursive' }}>Jack's Api Weather Project</p>
                        </div>

                        {/* Adds more fancy texts+styles */}




                    <ul class="nav navbar-nav">

                    
                   <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <NavLink to="/finder" activeStyle={{ fontSize: '60px', fontFamily: 'Bookman' }}>
                            Finder
                        </NavLink>
                        <NavLink to="/newYork" activeStyle={{ fontSize: '60px', fontFamily: 'Bookman' }}>
                            New York
                        </NavLink>

                        {/* Creating a navigation bar at the top of the code */}
                        <NavLink to="/boston" activeStyle={{ fontSize: '60px', fontFamily: 'Bookman' }}>
                            Boston
                        </NavLink>
                        </div>
                    </ul>
                </div>
            </nav >
        </div >

    );
};

export default Navbar;