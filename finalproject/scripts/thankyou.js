const formInfo = new URLSearchParams(window.location.search);
console.log(formInfo)

console.log(formInfo.get("business"));

document.getElementById("output").innerHTML = `
<p><strong>Mr/Mrs:</strong> ${formInfo.get("name")}</p>
`;