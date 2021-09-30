import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () =>{
    return(
        <section className="section bg-dark text-white footer">
            <div className="container">
                <div className="row">
                
                    <div className="col-md-4">
                        <h3>Company Information</h3>
                        <hr />
                        <ul type="square">
                            <li>วิทยาลัยเทคนิคตราด</li>
                            <li>480 หมู่ 9 ถนนสุขุมวิท ต.วังกระแจะ อ.เมือง จ.ตราด</li>
                        </ul>
                    </div>

                    <div className="col-md-4">
                        <h3>Quick Link</h3>
                        <hr />
                        <ul type="square">
                            <li><div><Link to="/">Home</Link></div></li>
                            <li><div><Link to="/about">About</Link></div></li>
                            <li><div><Link to="/contact">Contact</Link></div></li>
                            <li><div><Link to="/profile">Profile</Link></div></li>
                        </ul>
                    </div>

                    <div className="col-md-4">
                        <h3>Contact Information</h3>
                        <hr />
                        <ul type="square">
                            <li>480 หมู่ 9 ถนนสุขุมวิท ต.วังกระแจะ อ.เมือง จ.ตราด 23000</li>
                            <li>trat.ac.th@gmail.com</li>
                            <li>039-518-105</li>
                        </ul>
                    </div>

                </div>
                <hr />
                <div>Copyright &copy; 2020-2021 by Patipan | All rights reserved</div>
            </div>
        </section>
    )
}
export default Footer;