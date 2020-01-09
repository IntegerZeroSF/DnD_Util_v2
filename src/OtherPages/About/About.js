import React from "react";
import "./About.css";

function About() {

    return (
        <div className='aboutDiv'>
            <h1>This website was built from the ground up using <a className='aboutLink' href='https://reactjs.org/'>React</a></h1>
            <h2>An additonal uitlity, <a className='aboutLink' href='https://github.com/nfl/react-helmet'>React Helmet</a>, was also used.</h2>
            <h2>Data was pulled from <a className='aboutLink' href='https://www.dnd5eapi.co/'>D&D 5e API</a></h2>
            <h1>Built by Raymond Levengood</h1>
            <h2>See my profile on <a className='aboutLink' href='https://www.linkedin.com/in/raymondlevengood'>LinkedIn</a></h2>
        </div>
    )
}

export default About;