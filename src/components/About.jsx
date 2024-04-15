import { Link } from 'react-router-dom'
import Abd2 from '../assets/Abdullah2.jpg'
const About = () => {
    return (
        <>
        <div className="main-container pt-16 bg-green-50">
            <h1 className="text-center text-4xl font-bold underline">About Me</h1>
            <div className='flex'>
                <div className='w-full p-20'>
                    <img src={Abd2} className='w-fit rounded-full' />
                </div>
                <div className='w-full p-20 space-y-4'>
                    <h1 className='text-4xl font-semibold'>React Native Developer & UI UX Designer</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat quis voluptate ea nemo exercitationem ullam. Praesentium aspernatur laborum inventore! Aperiam.</p>
                    <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aliquam praesentium nam facilis reiciendis dolor quos, at expedita iure. Eveniet reprehenderit ut, iste eaque ducimus nostrum a. Doloribus, incidunt aliquam. Magnam, optio mollitia! Assumenda a harum similique maiores labore officia accusamus culpa iste, iusto inventore nulla fuga fugit ratione ducimus.</p>
                    <Link to='/about' className='text-black no-underline bg-orange-500 rounded-full px-3 py-1'>Read more...</Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default About