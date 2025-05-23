import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa6'

function Footer() {
  return (
    <>
    <hr />
    <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
            <div className="flex flex-col items-center justify-center">
                <div className="flex space-x-4">
                    <a href="https://www.facebook.com/" target="_blank">
                    <FaFacebook size={24}/>
                    </a>
                    <a href="https://www.instagram.com/invites/contact/?igsh=16rewmyh9s28z&utm_content=ngjsiwe" target="_blank">
                    <FaInstagram size={24}/>
                    </a>
                    <a href="https://www.linkedin.com/in/suman-kumar-80938631a" target="_blank">
                    <FaLinkedin size={24}/>
                    </a>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col">
                    <p className="text-sm">&copy;JAN 2025 Webincoder. All rights reserved</p>
                    <p className="text-sm text-center"> Created by ❤️ Suman kumar.</p>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
