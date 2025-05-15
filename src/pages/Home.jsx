import imageMaiker from '../../public/IMG_5774.JPG'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
const Home = () => {
  return (
    <div className='container'>
      <NavBar/>
      <div className='containerContent'>
              <div className='content'>
                <h1 className='text-5xl' ><span>Software Developer</span> </h1>
                <p>As a passionate software developer with hands-on experience in Laravel 7, JavaScript, and team-oriented projects, I am eager to contribute my skills to meaningful and challenging work. During my time with the Chamber of Commerce of the Huila Department, I not only strengthened my technical foundation but also learned the value of collaboration, adaptability, and responsibility in a professional environment. I’m prepared to face any situation with determination and problem-solving focus, and above all, I’m driven by a strong desire to keep learning and growing every single day. Whether it’s developing robust backend systems or dynamic user interfaces, I’m ready to bring value, dedication, and curiosity to your team.
                </p>
              </div>
              <div className='contentImage'>
                    <img src={imageMaiker}/>
              </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
