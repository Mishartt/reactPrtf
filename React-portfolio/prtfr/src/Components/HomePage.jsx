import React from "react";

const HomePage = ({face}) =>{



    return(
        <div className="home section" id="home">
        <div className="hero-wrapper">
            <div className="inf">
                <p className="anim-items">HI THERE &nbsp;  I'M     </p>
                <h1  className="z anim-items">Artiushkin Mikhail</h1>
                 <h3 className="anim-items">Front-End DEVELOPER</h3>
                 <p className="anim-items">I'm a junior Front-end developer</p>
                 <div  className="hire__me anim-items">
                    <a href="#Contact"> <p>HIRE ME</p></a>
                 </div>
            </div>
            <div classN="pht">
                <img className="im anim-items " src={face} alt=""/>
            </div>
        </div>
    </div>
    )
}


export default HomePage