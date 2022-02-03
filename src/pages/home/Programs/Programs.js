import React from 'react'
import './Programs.css'
// import '../../../images/'

export default function Programs() {
  return (
    <div className="programs">
      <div className="programs_title">
        Youth Tennis Programs
      </div>

      <div className="programs_description">
        The mission of the Brooklyn Youth Tennis Association is to help young people develop into socially responsible, well-rounded, engaged citizens by providing quality free and low-cost tennis instruction that promotes physical fitness and mental alertness. BYTA develops school partnerships that encourage and support academic achievement.
      </div>

      <div className="programs_grid">

        <div className="programs_grid_card">
          <div className="afterschool_img"></div>
          <h1>BYTA AfterSchool Programs</h1>
          <p>BYTA works with local schools to bring a tennis program to their students. Sessions start after school and are typically held in the school’s gymnasium. Our program runs through the full school year.</p>
          <a href="/programs/afterschool" className="programs_gridcard_button">Read More</a>
        </div>

        <div className="programs_grid_card">
          <div className="community_img"></div>
          <h1>Community Youth Lessons</h1>
          <p>Sessions go for 90 minutes and are held on tennis courts at local parks. The program’s curriculum is tailored to accommodate different ages and skill levels. Incorporate life skills like teamwork + sportsmanship.</p>
          <a href="/programs/communitylessons" className="programs_gridcard_button">Read More</a>
        </div>

      </div>


    </div>
  )
}
