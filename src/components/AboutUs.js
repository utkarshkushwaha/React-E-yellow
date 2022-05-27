import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import './AboutUs.css';

export const AboutUs = () => {
    return (
        <div className='about'>
            <Navbar />
            <div className='about_container'>
                <div>
                    <section className='py-4'>
                        <div className='container_1'>
                            <div className='row'>
                                <div className='col-md-4 my-auto'>
                                    <h4>About Us</h4>
                                </div>
                                <div className='col-md-8 my-auto'>
                                    <h6 className='float-end'>
                                        Home / About Us
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='section bg-c-light border-bottom'>
                        <div className='container_2'>
                            <p>
                                <b>Yellowpages</b> is a business information portal where local businesses can list themselves so that the
                                people of their city can locate the right business for their needs conveniently and quickly.
                            </p>
                            <p>
                                <b>Yellowpages</b> goes beyond being a business listing portal by offering richer listings and a user
                                experience that today’s digital natives crave!
                            </p>
                            <p>
                                As a member of <b>Yellowpages</b>, you can unlock the opportunity to be discovered by customers interested
                                in your products and services, and reach them with targeted promotions and content. Not just that, your
                                <b>Yellowpages</b> listing is the hub of your online reputation as it consolidates reviews from users and
                                helps customers choose your business over your competitors!
                            </p>
                            <p>
                                Listing on <b>Yellowpages</b> is simple. Click <a href="/add-buisness">here</a> to get listed!
                            </p>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutUs;
