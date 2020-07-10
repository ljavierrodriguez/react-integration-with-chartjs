import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const Sidebar = props => {
    return (
        <>
            <div className="bg-light border-right" id="sidebar-wrapper">
                <div className="sidebar-heading">LOGO</div>
                <div className="list-group list-group-flush">
                    <Link to="/" className="list-group-item list-group-item-action bg-light">Dashboard</Link>
                    <Link to="/contact" className="list-group-item list-group-item-action bg-light">Contact</Link>
                    <Link to="/#" className="list-group-item list-group-item-action bg-light">Overview</Link>
                    <Link to="/#" className="list-group-item list-group-item-action bg-light">Events</Link>
                    <Link to="/#" className="list-group-item list-group-item-action bg-light">Profile</Link>
                    <Link to="/#" className="list-group-item list-group-item-action bg-light">Status</Link>
                </div>
            </div>
        </>
    )
}

export default withRouter(Sidebar);