import Sarah from './Sarah.jpg';
import David from './David.jpg';
import Emily from './Emily.jpg';


const contactInfo = {
    "number": "+1 (832) 221-1196",
    "email": "abhilashg716@gmail.com"
};
const roles = ['Full Stack Developer', 'Java Developer'];
const greeting = `Hello 👋, I\'m Abhilash, A passionate Full Stack Developer with  Java, AWS, Kafka, 
Spring Boot, Microservices, React based in USA📍`;

const comments = [
    {
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
        username: "Emily",
        name: "Emily Chen",
        image: Emily,
        clientComment: `Abhilash is a reliable and talented developer who exceeded our expectations. 
        His ability to quickly grasp complex requirements and translate them into elegant solutions is impressive. 
        I would highly recommend him for any development project.`,
        date: "9:25 AM Oct 22, 2023",
        liked: false,
        views: 20,
        saved: false
    }
    // Add more comment objects as needed
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
and offering 6 years of experience in the Computer industry. Proficient at 
designing and formulating test automation frameworks, writing code in various 
languages. feature development and implementation. Specialize in 
thinking outside the box to find unique solutions to difficult engineering problems.`;



export { experience, skills, Keywords, aboutMe, comments, greeting, roles, contactInfo };
