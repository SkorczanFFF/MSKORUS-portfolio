import React from "react"
import { BsGlobe2, BsGithub } from 'react-icons/bs'
export default function Projects(props) {
  const content = props.posts.map((post) => 
    <>
      <div className="gallery-item">
        <div className="gallery-pic-container" key={post.id}>
          <a href={post.live}>   
            <img className="gallery-item-pic" src={post.pic} alt='project'/>
          </a>
        </div>
        <div className="gallery-item-desc"> 
          <h3 className="project-name">{post.title}</h3>
            <p className="project-desc">{post.description}</p>
              <div className="links-container">
                <a href={post.live} className="project-link">
                  <BsGlobe2 className="link-icon" /><h1 className="link-text">LIVE DEMO</h1>
                </a>
                <a href={post.git} className="project-link">
                  <BsGithub className="link-icon" /><h1 className="link-text">GITHUB</h1>
                </a>
              </div>
          </div>
        </div>
    </>
  );

  return (
    <div className="projects-container">
      {content}
    </div>
  );
}