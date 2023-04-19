import React from 'react';

function Project() {
  return (
  <section class="subsection-alternative" id="Projects">
  <h2> Projects</h2>
  <div className="project-container">
     <div className="project-box">
        <img className="project-image" src={require("../images/portfolio.png")} alt="Project-one image"/>
        <h3> Project One</h3>
        <p className="subtext"> This is my first project</p>
        <hr/>
        <p className="subtext"><button> <a href="https://pietroxero.github.io/Recipe_Design_Project/"> Click Here</a></button></p>
        </div>

     <div className="project-box">
        {/* <img className="project-image"src={} alt="Project-two image"/> */}
        <h3> Project Two</h3>
        <p className="subtext"> This is my second project</p>
        <hr/>
        <p className="subtext"><button><a href="https://librarygp-app.herokuapp.com/"> Click Here </a></button></p>
     </div>
        <div className="project-box">
        {/* <img className="project-image" src={} alt="Project-three image"/> */}
        <h3> Project Three</h3>
        <p className="subtext"> This is my third project</p>
        <hr/>
        <p className="subtext"> <button> <a href="https://tweetwee1810.github.io/Horiseon-refactor/"> Click Here </a></button></p>
        </div>
        <div className="project-box">
        {/* <img className="project-image" src={} alt="Project-four image"/> */}
        <h3> Project Four</h3>
        <p className="subtext"> This is my fourth project</p>
        <hr/>
        <p className="subtext"><button><a href="https://tweetwee1810.github.io/Horiseon-refactor/"> Click Here</a></button></p>
        </div>
  </div>
</section>
)
}

export default Project;