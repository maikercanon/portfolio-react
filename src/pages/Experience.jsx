import imageCamara from "../assets/camara_comercio_real.png";
import imagePortfolio from "../assets/portfolio.jpg";
import Job from '../components/experience/Job';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import '../pages/experience_style/style.css';

  const Experience = () => {
    const jobs =[
      {
        image: imageCamara,
        title: "Full-stack Developer(Camara de Comercio del Huila)",
        tecs: "Laravel 7 + Blade template + LiveWire + Native JS + Alpine.js + GitHub",
        description: "This was a truly enriching experience, because thanks to it, I now feel capable of helping you in any area of web development. I also learned to always look for solutions, because time is too valuable to waste on complaints"
      },
      {
        image: imagePortfolio,
        title: "Portfolio Development",
        tecs: 'React.js + CSS3 + Tailwind CSS + GitHub',
        description: "This is the entire page you're looking at now. It was inspired by my journey as a frontend developer"
      },
     

  ]
  return (
    <div className='container'>
        <NavBar/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      <div className='container_experience'>
        {jobs.map((job, index)=>(
          <Job
          key={index}
          image={job.image}
          title={job.title}
          tecs={job.tecs}
          description={job.description}
          />
        ))} 
        
      </div>
      <Footer/>
      <br/>
      <br/>
      <br/>
    </div>
  )
}

export default Experience
