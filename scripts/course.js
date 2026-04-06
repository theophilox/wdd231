const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

const courseCard = document.querySelector('#cert-card');

function createCourseCard(filteredCourses) {
    courseCard.innerHTML = ""; 
    filteredCourses.forEach(course => {
        const card = document.createElement("section");
        card.classList.add("course-card");

        const h3 = document.createElement("h3");

        if (course.completed == true) {
            card.setAttribute('style', "background-color: #88ffa2;");
        }
        else {

            card.setAttribute('style', "background-color: #ff8888;");

        }

        h3.textContent = `${course.subject} ${course.number}`;

        const title = document.createElement("p");
        title.textContent = course.title;

        card.appendChild(h3);
        card.appendChild(title);
        card.addEventListener('click', () => {
            displayCourseDetails(course);   
        });
        courseCard.appendChild(card)
            
        });
    const total = filteredCourses.reduce((sum, course) => sum + course.credits, 0);

    document.querySelector('#total-credits').innerHTML = `${total}`;

   
}

createCourseCard(courses);

const wddButton = document.querySelector("#show-wdd");
wddButton.addEventListener("click", () => {
    const filteredWdd = courses.filter(course => course.subject === "WDD" && course.completed === true);
    createCourseCard(filteredWdd);
    });

const allButton = document.querySelector("#show-all");
allButton.addEventListener("click", () => {
    createCourseCard(courses);
    });

const cseButton = document.querySelector("#show-cse");
cseButton.addEventListener("click", () => {
    const filteredCse = courses.filter(course => course.subject === "CSE" && course.completed === true);
    createCourseCard(filteredCse);
        });


function displayCourseDetails(course) {
    const courseDetails = document.querySelector("#course-dialog");
    courseDetails.innerHTML = "";
    courseDetails.innerHTML = `
        <h2>${course.subject} ${course.number}</h2>
        <button id="closeModal">❌</button>
        <h3>${course.title}</h3>
        <p><strong>Credits:</strong> ${course.credits}</p>
        <p><strong>Certificate:</strong> ${course.certificate}</p>
        <p>${course.description}</p>
        <p><strong>Technologies:</strong> ${course.technology.join(', ')}</p>
    `;

    courseDetails.showModal();

    const closeModal = document.getElementById("closeModal");
    closeModal.addEventListener("click", () => {
        courseDetails.close();
    });
}