
 import Card from './components/Card'
 

 const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://thumbs.dreamstime.com/b/google-logo-white-background-vector-format-available-google-logo-124289805.jpg?w=768",
    name: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Bengaluru, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZTcGdtn9wpg6gZyUUPJCIWzpsDZm-F_rQ5n_ufcX-Hw&s=10",
    name: "Microsoft",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd37QFyv4GzzqxSw5Otx1AI_OUJPOVoiaW3zZv2RMMBg&s=10",
    name: "Apple",
    datePosted: "1 week ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$72/hr",
    location: "Cupertino, USA",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYq7Q44IZaZV_veFoDZeJGgyTiED8noQ5lTNTkxfEqiA&s=10",
    name: "Meta",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: "$68/hr",
    location: "London, UK",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQPJbxi-R_rJqW-q79-avKLngCVovosMv1l3mvUKaS7g&s=10",
    name: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$46/hr",
    location: "Chennai, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVrjNLdc96EC-wh8zkwU27CUTvRisRZ2VK5WVPpCtbvA&s=10",
    name: "Netflix",
    datePosted: "4 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Los Angeles, USA",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnzVOviVcRaYFMMrjFXN6UtlHTyK8TmEIeC19ES2xsgw&s=10",
    name: "NVIDIA",
    datePosted: "10 days ago",
    post: "AI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Santa Clara, USA",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVhxIOBdwbEGXJ4d1Vp-TNJu_0_s7ur-TqW553Idjlxw&s=10",
    name: "Adobe",
    datePosted: "6 days ago",
    post: "UI/UX Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Noida, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvUKjFWDizIcm5drqniSODQ5YgztVV0sfUKv6H9tgjyA&s=10",
    name: "Uber",
    datePosted: "3 weeks ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$64/hr",
    location: "San Francisco, USA",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0w3oYgUovoisc6-xkWRwHdOEKxVxRWWZTpdCCSg5czg&s=10",
    name: "OpenAI",
    datePosted: "1 day ago",
    post: "Machine Learning Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "San Francisco, USA",
  },
];

  
   return (
     <div className='parent'>
      {jobOpenings.map(function(elem, idx){
        
        return 
        <div key={idx}>
          <Card brandLogo={elem.brandLogo} company={elem.name} post={elem.post} date={elem.datePosted} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location}/>
        </div>
      })}
       
     </div>
   )
 }
 
 export default App
 


