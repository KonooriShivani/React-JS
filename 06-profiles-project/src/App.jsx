import React from 'react'
import Profile from './components/Profile'

const App = () => {

  const jobProfiles = [
  {
    id: 1,
    availability: "Available",
    name: "Maria Johnson",
    jobTitle: "UI/UX Designer",
    company: "Epic Coders",
    src: "https://img.magnific.com/free-photo/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses_176420-13176.jpg?semt=ais_hybrid&w=740&q=80",
    pay: "$48/hr",
    skill1: "Figma",
    skill2: "Adobe XD",
    skill3: "Prototyping",
    moreSkills: "+4",
    intro:
      "Maria is a UI/UX designer who has been creating intuitive digital experiences for over 6 years. She enjoys transforming complex ideas into simple, user-friendly designs."
  },

  {
    id: 2,
    name: "David Kim",
    jobTitle: "Mobile App Designer",
    company: "Visual Madness",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx2MPl0cP4JCKyDUZalUI22n5kjPSKM6BUfWmpLaIeeA&s=10",
    pay: "$52/hr",
    skill1: "Android",
    skill2: "iOS",
    skill3: "Flutter",
    moreSkills: "+6",
    intro:
      "David specializes in mobile-first design and has worked on award-winning Android and iOS applications for startups and enterprise companies."
  },

  {
    id: 3,
    availability: "Available",
    name: "Sophia Brown",
    jobTitle: "Interactive Designer",
    company: "Freelancer",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRzA_YGw2tw2nQHSfddefY9DX9oBsu0WCUrKORyieXfQ&s",
    pay: "$45/hr",
    skill1: "After Effects",
    skill2: "Figma",
    skill3: "Animation",
    moreSkills: "+3",
    intro:
      "Sophia creates engaging interactive experiences and animations that improve user engagement across websites and mobile applications."
  },

  {
    id: 4,
    name: "James Wilson",
    jobTitle: "Frontend Developer",
    company: "Epic Coders",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQgPBTVf9po1q7h9kFRwDBxWTKlPPZqS6m2hoYV6GwKIHx3VVOJO5loyA&s",
    pay: "$58/hr",
    skill1: "React",
    skill2: "JavaScript",
    skill3: "Tailwind CSS",
    moreSkills: "+7",
    intro:
      "James is a frontend developer passionate about building fast, accessible, and responsive web applications using modern JavaScript frameworks."
  },

  {
    id: 5,
    availability: "Available",
    name: "Emma Garcia",
    jobTitle: "Product Designer",
    company: "Visual Madness",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5uvsvkF0AnLTsBUEgV_Sm0Td4_U-Xav0grdUO15h8cwHvkDRhZi6JmFA&s",
    pay: "$54/hr",
    skill1: "Figma",
    skill2: "Wireframing",
    skill3: "User Research",
    moreSkills: "+5",
    intro:
      "Emma has helped launch multiple SaaS products by combining user research with modern design principles to create delightful user experiences."
  },

  {
    id: 6,
    name: "Noah Anderson",
    jobTitle: "Full Stack Developer",
    company: "Freelancer",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0T9oNrMKcYTQ6GIEPql26GYkqFKl3cZ-2cnypsc95mHbsF4lHZyipKFc&s",
    pay: "$65/hr",
    skill1: "Node.js",
    skill2: "React",
    skill3: "MongoDB",
    moreSkills: "+8",
    intro:
      "Noah builds scalable web applications from frontend interfaces to backend APIs and enjoys solving challenging technical problems."
  },

  {
    id: 7,
    availability: "Available",
    name: "Olivia Martinez",
    jobTitle: "Graphic Designer",
    company: "Visual Madness",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfd834DcqKcny5gtla6rEfZDnc1-LKliWUqdUB-wTeaNNaIf6b6QOfYgE&s",
    pay: "$43/hr",
    skill1: "Photoshop",
    skill2: "Illustrator",
    skill3: "Branding",
    moreSkills: "+2",
    intro:
      "Olivia creates memorable brand identities, marketing materials, and digital graphics that help businesses stand out."
  },

  {
    id: 8,
    name: "Ethan Carter",
    jobTitle: "Android Developer",
    company: "Epic Coders",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8EFp1CMUW4_vfNkomQv70o28zFQi41xdtWLok6uBe2SCmcse5oJ0Ad5Y&s",
    pay: "$60/hr",
    skill1: "Kotlin",
    skill2: "Android",
    skill3: "Firebase",
    moreSkills: "+5",
    intro:
      "Ethan has over five years of experience developing high-performance Android applications with a focus on clean architecture and smooth user experiences."
  },

  {
    id: 9,
    availability: "Available",
    name: "Ava Thompson",
    jobTitle: "iOS Developer",
    company: "Freelancer",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbkxEZG6CZZeVjCjBM0Mfhc5Wjra7CmjgCQIOtwqMWgx3M--57SIfF1tM&s",
    pay: "$57/hr",
    skill1: "Swift",
    skill2: "SwiftUI",
    skill3: "Xcode",
    moreSkills: "+4",
    intro:
      "Ava develops elegant iOS applications and enjoys crafting intuitive interfaces while optimizing app performance for Apple devices."
  },

  {
    id: 10,
    name: "Liam Harris",
    jobTitle: "Motion Designer",
    company: "Visual Madness",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0PmcW6QpVxtWXOhqIIs8Cdwmjvyf79fPD9Y33Vxxe1A&s=10",
    pay: "$50/hr",
    skill1: "After Effects",
    skill2: "Cinema 4D",
    skill3: "Motion Graphics",
    moreSkills: "+9",
    intro:
      "Liam creates eye-catching motion graphics and animated product videos that bring digital brands to life across multiple platforms."
  }
];


  return (
    <div className='parent'>
      {jobProfiles.map(function(elem,idx){
          return (
            <div key={idx}>
              <Profile availability={elem.availability} pay={elem.pay} image = {elem.src} name={elem.name} jobTitle={elem.jobTitle} company={elem.company} skill1={elem.skill1} skill2={elem.skill2} skill3={elem.skill3} moreSkills={elem.moreSkills} intro={elem.intro}/>
            </div>
          )
      })}
    </div>
  )
}

export default App
