import React from 'react'
import './BeginnerGym.css'
import BeginnerBackground from '../assets/BeginnerBackground.jpeg'
import CardioImage from '../assets/CardioImage.jpeg'
import StrengthImage from '../assets/StrengthImage.jpeg'
import NutritionImage from '../assets/NutritionImage.jpeg'
import MembershipImage from '../assets/MembershipImage.jpeg'
function BeginnerGym() {
  return (
    <>
    <div className='Beginner'>
        <div className='Cardio'>
          <div className='picture'>
            <img src={CardioImage} alt="" />
          </div>
          <div className='title'>CARDIO</div>
        </div>
        <div className='Strength'>
          <div className='picture'>
            <img src={StrengthImage} alt="" />
          </div>
          <div className='title'>STRENGTH TRAINING</div>
        </div>
        <div className='Nutrition'>
          <div className='picture'>
            <img src={NutritionImage} alt="" />
          </div>
          <div className='title'>NUTRITION</div>
        </div>
        <div className='Membership'>
          <div className='picture'>
            <img src={MembershipImage} alt="" />
          </div>
          <div className='title'>MEMBERSHIP</div>
        </div>
    </div>
    </>
  )
}

export default BeginnerGym