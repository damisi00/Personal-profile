import React from 'react'
import Slack from '../assets/slack.svg';
import Github from '../assets/github.svg';
import Header from '../components/Header';
import Profile from '../components/Profile';

const ProfilePage = () => {
  return (
    <div>
        <main className="profile">
        {/* Profile Section */}
            <Header />
        
        {/* The Links section */}
            <Profile />

        <section className='social-section'>
          <a href='https://slack.com'>
            <img src={Slack} alt='slack icon' />
          </a>

          <a  href='https://github.com/damisi00'>
            <img src={Github} alt='github icon' />
          </a>

        </section>
        </main>
    </div>
  )
}

export default ProfilePage