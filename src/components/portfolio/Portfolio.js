import React from 'react';
import PolonezAutodrive from '../../assets/img/projects/polonez_autodrive.PNG';
import QuestionMarks from '../../assets/img/projects/question_marks.png';
import './Portfolio.scss';
export default function Portfolio() {

    return (
        <section>
            <div className="container-portfolio">
                <div className="arrow-down white" />
                    <div class="portfolio-heading">
                        <h3 className="left-heading">PORTFOLIO</h3>
                    </div> 
                        <p className="portfolio-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat aliquam deserunt harum rem earum assumenda perspiciatis expedita. Aliquid distinctio tenetur fugiat qui recusandae obcaecati voluptates.</p>
                            <div class="portfolio-content">
                                <div className="portfolio-item">
                                    <img src={PolonezAutodrive} alt="Polonez Autodrive" />
                                    <div className="item-desctiption">POLONEZ AUTODRIVE</div> 
                                </div>
                                <div className="portfolio-item">
                                    <img src={QuestionMarks} alt="Polonez Autodrive" />
                                    <div className="item-desctiption">TO BE CONTINUED</div>
                                </div>
                                <div className="portfolio-item">
                                    <img src={QuestionMarks} alt="Polonez Autodrive" />
                                    <div className="item-desctiption">TO BE CONTINUED</div>
                                </div>
                                <div className="portfolio-item">
                                    <img src={QuestionMarks} alt="Polonez Autodrive" />
                                    <div className="item-desctiption">TO BE CONTINUED</div>
                                </div>
                            </div>
            </div>
        </section> 
  );
}
