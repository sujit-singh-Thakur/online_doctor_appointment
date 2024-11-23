import React from 'react'
import {Link} from 'react-router-dom'
import aboutImg from '../../assets/images/about.png'
import aboutCardImg from '../../assets/images/about-card.png'

function About() {
    return (
        <>
        {/* =============About Section Start================ */}
        <section>
            <div className="container">
                <div className="flex justify-between gap-[50px] lg:[130px] xl:gap-0 flex-col lg:flex-row  ">
                    {/* ======About Image========= */}
                    <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1 ">
                        <img src={aboutImg} alt="" />
                        <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%] ">
                            <img src={aboutCardImg} alt="" />
                        </div>
                    </div>

                    {/*=========About Content========== */}
                    <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2 ">
                    <h2 className='heading'>Proud to be one of the Nations Best</h2>
                    <p className="text_para">For 30 years in a row, U.S. News & World Report has recognized us as one of the best publics hospitals in the Nation and #1 in Texas. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, nemo?</p> 
                    <p className="text_para mt-[30px]">For 30 years in a row, U.S. News & World Report has recognized us as one of the best publics hospitals in the Nation and #1 in Texas. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, nemo?</p>

                    <Link to='/'>
                    <button className="btn">Learn More</button>
                    </Link>
                    </div>
                </div>
            </div>
        </section>
        {/* =============About Section End================ */}
        </>
    )
}

export default About
