import videoGirando from '../../public/planeta_girando.mp4'
import '../assets/about/style.css'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

const About = () => {
  return (
    <div className="relative flex flex-col min-h-screen">
      <NavBar />

      {/* Top Half: Video */}
      <div className="h-1/2 w-full overflow-hidden">
        <video
          id="video-about"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={videoGirando} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-3xl font-bold  mx-auto max-w-6xl bg-black/50 p-4 rounded-lg">
            I'm a enthusiastic English learner.
            <br/>
            My life has not been easy but i love talking with people, i love helping others and i'm always looking for solutions.
            <br/>
            <br/>
          </h2>
      </div>
      <Footer />
    </div>
  )
}

export default About
