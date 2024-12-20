import React from 'react'
import '../Css/Main.scss'
import { IoLogoLinkedin, IoIosMail } from "react-icons/io";
import { FaSquareGithub } from "react-icons/fa6";


function Footer() {
    return (
        <>
            <hr />
            <div className='flexFooter'>
                <div>
                    <p><a className='footerAlign' href="mailto:sercanuzun0707@gmail.com"><IoIosMail className='footerSymbol' />
                        Mail Me !</a></p>
                </div>

                <div>
                    <p><a className='footerAlign' href="https://github.com/SercaNisUzun"><FaSquareGithub className='footerSymbol' />
                        My GitHub !</a></p>
                </div>

                <div>
                    <p><a className='footerAlign' href="https://www.linkedin.com/in/sercan-uzun-235990139/"><IoLogoLinkedin className='footerSymbol' />My Linkedin !</a></p>
                </div>

            </div>
            <p className='sign'>2024 - Sercan UZUN</p>
            <hr />
        </>
    )
}

export default Footer
