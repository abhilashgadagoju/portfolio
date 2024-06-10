import Sarah from './Sarah.jpg';
import David from './David.jpg';
import Emily from './Emily.jpg';


const contactInfo = {
    "number": "+91 9030587771",
    "email": "abhilash.gaddagoju@gmail.com"
};
const roles = ['Full Stack Developer', 'Java Developer'];
const greeting = `Hello 👋, I\'m Abhilash, A passionate Full Stack Developer with  Java, AWS, Kafka, 
Spring Boot, Microservices, React based in USA/India📍`;

const comments = [
    {
        id: 1,
        username: "David",
        name: "David Rodriguez",
        image: David,
        date: "11:10 AM Nov 30, 2023",
        clientComment: `Working with Abhilash has been a fantastic experience. His expertise in both front-end and back-end 
        development is evident in the seamless functionality of our project. He is responsive, collaborative, and dedicated
         to meeting project goals.`,
        liked: false,
        views: 28,
        saved: false
    },
    {
        id: 2,
        username: "Sarah",
        name: "Sarah Johnson",
        image: Sarah,
        date: "3:45 PM Sep 14, 2023",
        clientComment: `Abhilash is a highly skilled developer who consistently delivers high-quality code. 
        His attention to detail and problem-solving abilities are exceptional. He communicates effectively and 
        is always willing to go the extra mile to ensure project success.`,
        liked: false,
        views: 27,
        saved: false
    },
    {
        id: 3,
        username: "Emily",
        name: "Emily Chen",
        image: Emily,
        clientComment: `Abhilash is a reliable and talented developer who exceeded our expectations. 
        His ability to quickly grasp complex requirements and translate them into elegant solutions is impressive. 
        I would highly recommend him for any development project.`,
        date: "9:25 AM Oct 22, 2023",
        liked: false,
        views: 12,
        saved: false
    }/*,
    {
        id: 4,
        username: "Smith",
        name: "Jane Smith",
        image: David,
        clientComment: `Abhilash is a highly skilled developer who consistently delivers exceptional results. 
        His ability to tackle complex problems with creativity and efficiency sets him apart. 
        I wholeheartedly endorse him for any development project.`,
        date: "2:10 PM Mar 5, 2023",
        liked: false,
        views: 11,
        saved: false
    },
    {
        id: 5,
        username: "Mark",
        name: "Mark Johnson",
        image: Sarah,
        clientComment: `Working with Abhilash was a pleasure. 
        His expertise in coding and his dedication to delivering top-notch solutions make him stand out. 
        I look forward to collaborating with him again in the future.`,
        date: "10:30 AM Apr 18, 2024",
        liked: false,
        views: 17,
        saved: false
    },
    {
        id: 6,
        username: "Lee",
        name: "Sarah Lee",
        image: Sarah,
        clientComment: `Abhilash is an outstanding developer with a sharp mind and a strong work ethic. 
        He consistently goes above and beyond to meet project requirements and exceed expectations. 
        I highly recommend him without hesitation.`,
        date: "3:55 PM Jun 22, 2024",
        liked: false,
        views: 16,
        saved: false
    },
    {
        id: 7,
        username: "Michael",
        name: "Michael Brown",
        image: Sarah,
        clientComment: `I've had the pleasure of working with Abhilash on multiple projects, and he never disappoints. 
        His technical expertise and attention to detail ensure that every project is a success. 
        I recommend him more highly.`,
        date: "8:20 AM Aug 7, 2024",
        liked: false,
        views: 5,
        saved: false
    },
    {
        id: 8,
        username: "Jennifer",
        name: "Jennifer Kim",
        image: Sarah,
        clientComment: `Abhilash is simply phenomenal. 
        His problem-solving skills and dedication to excellence make him an invaluable asset to any team. 
        I feel fortunate to have had the opportunity to work with him.`,
        date: "6:40 PM Sep 15, 2024",
        liked: false,
        views: 10,
        saved: false
    }*/
];


const skills = [
    {
        "title": "Frontend",
        "technologies": ["JavaScript", "Typescript", "ES6+", "Angular", "React"]
    },
    {
        "title": "Backend ",
        "technologies": ["C", "Java", "JDBC", "SpringBoot", "Hibernate", "JPA", "SQL",
            "Oracle", "PL/SQL", "MongoDB", "Microservices", "Kafka", "CQRS", "Saga"]
    },
    {
        "title": "Software/Tools",
        "technologies": ["Restful web Services", "SOAP", "XML", "JSON", "Agile", "JIRA"]
    },
    {
        "title": "Cloud",
        "technologies": ["AWS", "IAM", "S3", "EC2", "SNS", "SQS", "APIGateway", "Lambda", "CI/CDpipeline",
            "Docker", "Jenkins", "CVS", "Git", "GitHub"]
    },
    {
        "title": "Testing",
        "technologies": ["Postman", "SoapUI", "Swagger", "JUnit5", "Mockito", "Selenium", "BDD", "Cucumber"]
    }
]

/*const experience = [
    {
        "role": "Senior Java Full Stack Developer",
        "company": "SPS Commerce, MN",
        "dates": "April 2023 to Present"
    },
    {
        "role": "Sr. Software Engineer",
        "company": "Ameriprise Financials, MN",
        "dates": "January 2021 – December 2022"
    },
    {
        "role": "Java Full Stack Developer",
        "company": "Magnaquest, Hyderabad, India",
        "dates": "July 2018 – December 2020"
    },
    {
        "role": "Java Full Stack Developer",
        "company": "KIOT Communication LLP, Hyderabad, India",
        "dates": "January 2017 – June 2018"
    }
];*/
const experience = [
    {
        "role": "Senior Software Engineer",
        "company": "Orange Data Cloud, TX, USA",
        "dates": "March 2023 to Present"
    },
    {
        "role": "Senior Java Developer",
        "company": "Magnaquest Technologies, Hyderabad, India",
        "dates": "July 2021 – March 2023"
    },
    {
        "role": "Java Developer",
        "company": "KIOT Communication, Hyderabad, India",
        "dates": "Jun 2020 – July 2021"
    },
    {
        "role": "Research Assistant",
        "company": "University Of Hyderabad, Hyderabad, India",
        "dates": "July 2019 – June 2021"
    }
];
const Keywords = ['HTML', 'CSS', 'JS', 'React', 'SpringBoot', 'JPA', 'Hibernetes', 'Java', 'Microservices', 'Kafka', 'Kubernetes', 'AWS'];
const aboutMe = `Focused professional having excellent technical and communication skills, 
and offering 4+ years of experience in the Computer industry. Proficient at 
designing and formulating test automation frameworks, writing code in various 
languages. feature development and implementation. Specialize in 
thinking outside the box to find unique solutions to difficult engineering problems.`;



export { experience, skills, Keywords, aboutMe, comments, greeting, roles, contactInfo };
