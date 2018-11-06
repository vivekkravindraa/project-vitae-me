# Vitae-Me
## Introduction:

Generally, having spent so much amount of time in designing and setting up the alignments of the resumes in the never used third-party tools on the most important days of my career. I understood the importance of having a tool which gets us the job done by taking enough textual inputs that are needed to build a quality resume and by providing a few additional and advanced features that minimize the time that has to be spent over building resumes or curriculum vitae(s).
This piece of work mainly concentrates on providing features that help a user to build a resume of his own with all the necessary fields that need to be there in a good well-written resume and also gives the feature of generating the resume with different design templates. Thus, helps the users to produce the resumes of their likes and as of industry standards.

## Project Description:

Web app development is the creation of application programs that reside on remote servers and are delivered to the user's device over the Internet. I was familiar and comfortable working with the MERN stack technology. Hence, I decided to begin the app development by understanding node’s runtime environment, implementing the express web application framework provided functions and implementing databases locally with MongoDB. React was taken care once the backend was in place and I concentrated on it in isolation since it’s the popularly available modern library and being valued a lot in the industry.
Node.js is a low-level platform. To make things easier and more interesting for developers, thousands of libraries were built upon Node.js. Node provides non-blocking I/O primitives, and generally, libraries in Node.js are written using non-blocking paradigms, making a blocking behavior an exception rather than the normal.
Express is the most popular framework for Node apps. Express is unopinionated. We can insert almost any compatible middleware of our like into the request handling chain, in almost any order we like. We can structure the app in one file or multiple files, and using any directory structure. You may sometimes feel that you have too many choices!
As a NoSQL database, organizations of all sizes use MongoDB to quickly and easily develop, scale and operate applications. Instead of storing data in rows and columns as one would with a relational database, MongoDB stores a binary form of JSON documents (BSON).
A curriculum vitae is a written overview of a person's experience and other qualifications for a job opportunity. With this web application one can design the vitae on his own and hence there’s a little of ME included in it. So, I named it: Vitae-ME.
With the base idea of node-express web app development, I started my work on this project. To begin, I referred to various resumes of the industry people and had discussions with them. With all the required inputs which I have received from them, I took my first initiative of setting up the basic minimum requirements of the backend design and development.

## Design & Development:

Initially, I started off setting up a local working environment of my node-express application. Once it was in place, I began to write the actual set of code that is required to do the rest of the work. Even before I could proceed with bringing actual and advanced scenarios into it. I concentrated more on having the schemas in place. Since it gives us the basic implementation of what exactly our work is speaking about.
It took a while for me to figure out the necessary fields and the data structures that are required in this project. But as and when I put in more thoughts and had discussions with the relevant people, I began to explore lot more needed parts of my application. I started to break it down into pieces and that helped me to classify the schemas that I had planned.
And then, I have decided to incorporate several models and break it down into pieces so that the readability becomes easier to understand for anyone who gets into it at any point of development. As I chunked the models, I ended up having six models in place. The models are:
    1. User
    2. Applicant
    3. Certification
    4. Education
    5. Experience
    6. Project
    
### User:

Be it any application across the web, you need the users who use it on a frequent basis. When that becomes a reality handling the user with role management will play a crucial role. Hence, my idea was to have a user model that provides us the options to differentiate the role of him as an admin/user. With this, we can also maintain and prevent the access to the parts to our web application.
Since security becomes very important, I included the token authentication and authorization system, even before I begin modeling the other parts of the application. It ended up having the security element being set in the form of middleware in which I made use of the most commonly and widely used ‘bcryptjs’ and ‘jwt’ packages.
With the addition of ‘bcryptjs’ package, implementing a one-way hash password mechanism, a server does not store plaintext passwords to authenticate a user. Here, a password has a hashing algorithm applied to it to make it more secure.
Using JWT you can have a single login system, and that is the trending way of using API Nowadays for the less overhead. Each Request to Login Server generates a token, which can have total or custom permissions for Routes, Directories, Services, and other resources.

### Applicant:

Applicant model becomes an important and most required model for this application designing. Since it is being built by keeping them at the center of this whole process.
The applicant can have a different set of fields as mentioned here: name, email, mobile, his social profile links, about him, relevant skills that he possesses, languages that he’s familiar with, his various interests and his achievements.

### Certification:

In the current competitive world, the candidate is required or demanded to prove his skills. And this can be achieved probably in various different places but not in the places where he has studied. Since the companies these days are hiring the talents of great skill set it will become important to have certifications in hand. The applicant can have many certifications with these relevant fields: name of the institution, certified by the body, start date and end date of the undergone certification course.

### Education:

The major factor which describes whether a candidate is eligible for a designation or not can only be found by blocks of his education and the skills that he has. Education will fall at the first place in front of any viewer even before he looks into any other aspects of it. Since the applicant can have multiple educations over his time of the study, I decided to put it in segregation and added fields. That is: the institution in which he has studied, the university to which the institute belongs, the study type which explains the combinations he has preferred, the start date, the end date, the place where the institute is situated and the type of grade and actual grade value.

### Experience:

The experience becomes a major block in proving and showcasing the progress that the candidate has made in his lifetime. It acts as an element that takes a person from a level above in this career from what he’s been doing so far. It has the biggest impact when it comes to any individual. Since many applicants have worked under multiple organizations. It becomes important to have a model as experience along with the type of fields that are described here: name of the company, the position or designation in which he has worked, the website of the company for the transparency and to future contact, the start date, the end date of work duration, the place where the company is situated and the projects the he has been associated with.
### Project:

It’s equally important to think about the quality of work and the number of projects that the applicant has worked with his hands on. By keeping the projects in line and at one place. The progress path or the graph of an applicant can be well understood and that could also help the viewer to understand on the type of work in which he spent enough amount of time to gain good rate of experience. Projects are required to have these fields: the title of the project, the technologies used, the brief description about the project and its work, and the link to it if it’s up and running in the real time.
Finally, a collective work on the above-specified aspects brought the required schema design in place. And to proceed, the next part of the work is to design the frontend, UI design.
I found more insight about the schema design on the internet with the required format and with the technology I was familiar with: 
https://jsonresume.org/schema/

## UI:

UI plays a major role in designing the web which makes the application looks more differentiated with the design and styles that has been applied to it. With the interactivity, we can bring in using the modern web frameworks it has been given higher priority to make the look and feel of the application to stand out in the sea of web applications that are racing on the net each day. It is equally important to have a user-friendly UI to help the user identify the places that he’s interested in.
The following places on the internet have helped me to have a better understanding of bringing the quality UI design in this project.
It was with my intentions of developing this application, I was advised to understand the need of having advanced features in it. When it comes to the frontend designing part of an application it’s predictable these days that the users will look for more unique designs to be in place. Hence, I brought in the feature of adding the template in the application which solves the need of an advanced feature and brings more value to the work that the application accomplishes by the end of the day. And the reference to it can be found here:
	http://registry.jsonresume.org/
	https://jsonresume.org/themes/

### Accomplishment:

The backend is in place and it’s few modifications away to be perfect for the further set of improvements to be performed on it. The relevant code that has been worked upon till now can be found in the GitHub repository. And the link to it is below:
https://github.com/vivekravindra4/project-vitaeME

### References:
    • https://jsonresume.org/
    • https://represent.io/
    • http://www.doyoubuzz.com/us/
    • https://resumefodder.com/generate.html
    • https://velocv.com/
    • https://www.google.co.in/images
