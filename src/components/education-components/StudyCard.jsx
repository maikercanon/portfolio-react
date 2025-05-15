import { motion } from "motion/react";
const studies = [
  {
    title: "Software Engineering",
    institution: "Universidad Surcolombiana",
    year: "2020 - Present (final semester)",
    description: "here i have learned many valuables skills that can be very helpful to you, such as WORKING IN TEAMS, FUNDAMENTALS CONCEPT OF ENGEENIERING, NETWORKS, AI and more",
  },
  {
    title: "Autodidact Student",
    institution: "Books and oficial documentation",
    year: "From the beginning - Now",
    description:"i believe that knowledge is power, and i can use it to help others. For that reason, i explore in well-known such as, Udemy, tutorial videos and official documentation of technologies."
  }
];

const StudyCard = () => {
  return (
    <div className="p-7 mt-30">
      <div className="flex  justify-center min-h-200px ">
          <h2 className=" w-[300px] bg-black text-white p-4 rounded-4xl text-5xl font-bold bg- mb-6 text-center max ">My Studies</h2>
      </div>  
      
      
      <div  
      
      className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {studies.map((study, index) => (
          <motion.div
            whileHover={{rotate: 5}}
            transition={{ type: 'spring', stiffness: 10 }}
            key={index}
            className="bg-black b-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
          >
            <img src="src/assets/nova3.png"/>
            <h3 className="text-5xl font-semibold text-[#C0C0C0]">{study.title}</h3>
            <p className="text-9xl text-white  mt-1">{study.institution}</p>
            <p className="text-xs text-white mb-2">{study.year}</p>
            <p className="text-black bg-[#C0C0C0] p-4 text-sm rounded-4xl">{study.description}</p>
          </motion.div>
          
        ))}
        <br/>
        <br/>
        <br/>
      </div>
    </div>
  );
};

export default StudyCard;
