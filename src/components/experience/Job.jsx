import { motion } from "motion/react"
import certificado from '../../../public/certificado_camara.pdf'
import '../experience/Job.css'

const Job = ({image, title,tecs, description}) => {
  
  return (
    <motion.div  whileHover={{rotate:3}} 
    transition={{ type: 'spring', stiffness: 300 }}className="job">

      {image && <img src={image} alt={title} className="job-image" id='image_job'/>}
     
      <div className="job-content">
        <h1 className="text-5xl bg-[#112244] p-4 rounded-4xl" >{title}</h1>
        <h1 className="text-7xl  rounded-3xl">{tecs}</h1>
        <p id='p-of-job-content'>{description}</p>
      <motion.a href={certificado} download
        whileHover={{ scale: 1.05, color: '#007bff' }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 300 }}
        style={{
          display: 'inline-block',
          padding: '0.5rem 1rem',
          background: 'white',
          color: 'black',
          borderRadius: '8px',
          textDecoration: 'none',
        }}
      >
        Descargar certificado

      </motion.a>
      </div>
      
    </motion.div>
  )
}

export default Job
