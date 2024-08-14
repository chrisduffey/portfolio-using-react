import React from "react";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


function Footer() {
    return( 
    <footer className=" " >
        
       <div className="flex justify-center">
            <ul className=" text-[50px]  ">
                <a href="https://www.linkedin.com/in/chris-duffey-20555698/">
                    <li className=" px-0   ">
                        <FaLinkedin/>
                    </li>
                </a>
                
                    <a href="https://github.com/chrisduffey" >
                    <li className="">
                    <FaSquareGithub />
                    </li>                    
                    </a>                
            </ul>
        </div>
    </footer>
);
}

export default Footer;
