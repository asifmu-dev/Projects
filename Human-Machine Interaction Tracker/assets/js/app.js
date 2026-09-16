// document.getElementById("navbar").style.backgroundColor = "red";

document.getElementById("successRate").addEventListener("input", (e) => {
    document.getElementById("successRateValue").textContent = `${e.target.value}%`;
});

document.getElementById("submitData").addEventListener("click", () => {
    const interactionType = document.getElementById("interactionType").value;
    const satisfactionLevel = document.getElementById("satisfactionLevel").value;
    const successRate = document.getElementById("successRate").value;
    const ageGroup = document.getElementById("ageGroup").value;

    if (!interactionType) {
        alert("Interaction Type is required!");
        return;
    }

    const tableBody = document.querySelector("#data-table tbody");
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${tableBody.children.length + 1}</td>
        <td>${interactionType}</td>
        <td>${satisfactionLevel}</td>
        <td>${successRate}%</td>
        <td>${ageGroup}</td>
    `;

    tableBody.appendChild(row);

    // Reset Form
    document.getElementById("interaction-form").reset();
    document.getElementById("successRateValue").textContent = "50%";
});
