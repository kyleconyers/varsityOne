import React from "react";
import { store } from "../Center/center";

function About(){
    return(
    
    <div>
        <div class="aboutText">
            <div>
                <h3>ConstantLi Version 1</h3>

                {/* <h1>ConstantLi Version 1</h1> */}
                <h5>First Updated 3/14/2020</h5>
            </div>

            <div>
                <h5>Latest Update 3/17/2020</h5>
                <p>There is a lot of work that humanity needs to accomplish, and ConstantLi is a tool to divide that work into manageable pieces by location and topic. It is a tool for anybody to use in order to learn  how different locations are organizing to address their needs, as well as to provide a platform to get involved.</p>
            </div>
        </div>
        <div class="aboutText">
            <div>
                <p>This current hosted version of ConstantLi does not have all working features that it ideally would. If this project interests you and if you have any skills that you would like to offer to make  it run better, please contact the project organizers. Alternatively, if you know anybody who has skills to offer on this project, please reach out to them and ask if they would like to contribute support. The site is built using MongoDB, Express, React and NodeJS, so any of those skills would be most helpful. </p>
                <p>This version of the project is functional, but to learn how it could be more useful, please use it and give insight into features it could incorporate to meet your needs and interests.(email in footer)</p>
            </div>

            <div class="aboutFooterText">
                <p class="aboutFooterText">-Kyle Conyers: Conyersky@gmail.com</p>
                {/* <p class="aboutFooterText">Conyersky@gmail.com</p> */}
            </div>
        </div>
    </div>
    
    )
}

export default About