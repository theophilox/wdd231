const formInfo = new URLSearchParams(window.location.search);
console.log(formInfo)

console.log(formInfo.get("business"));

document.getElementById("output").innerHTML = `
<p><strong>First Name:</strong> ${formInfo.get("fname")}</p>
<p><strong>Last Name:</strong> ${formInfo.get("lname")}</p>
<p><strong>Email:</strong> ${formInfo.get("email")}</p>
<p><strong>Phone:</strong> ${formInfo.get("phone")}</p>
<p><strong>Business:</strong> ${formInfo.get("business")}</p>
<p><strong>Timestamp:</strong> ${formInfo.get("timestamp")}</p>
`;