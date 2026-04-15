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