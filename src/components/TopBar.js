import React from 'react';
import foto from '../assets/images/jordan-walke.png';

function TopBar(){
    return(
        <React.Fragment>
				{/*<!-- Topbar -->*/}
				<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">


					<ul className="navbar-nav ml-auto">


						{/*<!-- Nav Item - User Information -->*/}
						<li className="nav-item dropdown no-arrow">
							<a className="nav-link dropdown-toggle"  href="http://localhost:8000/" id="userDropdown">
								<span className="mr-2 d-none d-lg-inline text-gray-600 small">Visitar artplace</span>
				
							</a>
						</li>

					</ul>

				</nav>
				{/*<!-- End of Topbar -->*/}

        </React.Fragment>
    )
}
export default TopBar;