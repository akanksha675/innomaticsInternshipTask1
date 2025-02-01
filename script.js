document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("input[type='button']").addEventListener("click", function () {
        let amount = document.querySelector("input[type='number']").value;
        let category = document.querySelector("#category").value;
        let description = document.querySelector("input[type='text']").value;
        let tableBody = document.querySelector("tbody");

       
        if (!amount || !description) {
            alert("Please enter all details!");
            return;
        }

        
        let newRow = document.createElement("tr");

     
        newRow.innerHTML = `
            <td>${category}</td>
            <td>${amount}</td>
            <td>${description}</td>
            <td>Completed</td>
             <td>
             <button onclick="editRow(this)">Edit</button>
             <button onclick="this.parentElement.parentElement.remove()">Delete</button>
             </td>
            
             
        `;

       
        tableBody.appendChild(newRow);

        
        document.querySelector("input[type='number']").value = "";
        document.querySelector("input[type='text']").value = "";
    });
});


