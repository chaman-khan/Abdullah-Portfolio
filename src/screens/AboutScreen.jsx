import React from 'react'
import Abd from '../assets/Abdullah2.jpg'

const AboutScreen = () => {
  return (
    <div className='main-container'>
      <div className='w-full flex justify-center my-10'> <img src={Abd} className='w-1/3 rounded-3xl' /></div>
      <div className='flex justify-center'><h1 className=' w-2/6 text-center'>React Native Developer & UI UX Designer</h1></div>
      <div className='flex justify-center'>
        
      <p className='w-4/6 text-center'> I'm a passionate React Native developer who loves diving deep into the world of JavaScript. When I'm not coding, you'll often find me gaming or exploring the exciting realm of game development. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nemo at? Reprehenderit necessitatibus voluptas sapiente consequuntur quam earum, a harum dolorem amet eaque, dolorum quo. Repellendus fuga id tenetur expedita.</p>
      
      </div>
      <div className='flex justify-center'><p className='w-2/3'>👨‍💻 I'm a React Native enthusiast, always eager to learn and create awesome mobile apps.
🌐 Exploring the intricate web of JavaScript is my idea of a good time.
🎮 Gaming is not just a hobby; it's a way of life! Let's talk gaming strategies and epic wins!
🕹️ Game development is my secret passion; stay tuned for my exciting game projects.</p></div>
    </div>
  )
}

export default AboutScreen
