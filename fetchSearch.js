let btn = document.getElementById("btn");
let s = document.getElementById("browsers");
let output = document.getElementById("output");
let filterData = document.getElementById("btn-2");

btn.onclick = async () => {
    let response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();
    alert("Data fetched");
    localStorage.setItem("data", JSON.stringify(data));
    display(data);
}

filterData.onclick = () => {
    let category = document.getElementById("browser").value; 
    let data = JSON.parse(localStorage.getItem("data")) || [];
    if (data.length > 0) {
        if (category) {
            data = data.filter(obj => obj["category"] === category);
            displayData(data);
        } else {
            output.innerHTML = "Select category.";
        }
    } else {
        output.innerHTML = "Data is not available";
    }
}

function display(data) {
    output.innerHTML = "";
    data.forEach((obj, index) => {
        let information = document.createElement("div");
        information.className = "cards"
        information.innerHTML =
            `<p><b>Id : </b>${obj["id"]}</p>
            <p><b>Title : </b>${obj["title"]}</p>
            <p><b>Price : </b>${obj["price"]}</p>
            <p><b>Description : </b>${obj["description"]}</p>
            <p><b>Category : </b>${obj["category"]}</p>`;

        let deletebtn = document.createElement("button");
        deletebtn.innerText = "Delete";

        deletebtn.onclick = () => {
            deleteData(index);
        }
        let more = document.createElement("button");
        more.innerText = "more";
        more.onclick = () => {
            let newWindow;
            newWindow = window.open("./another.html","name","width=400px,height=200px"); 
            newWindow.my_special_setting = index;
        }
        information.appendChild(more);
        information.appendChild(deletebtn);
        output.appendChild(information);
    });
}

function deleteData(index) {
    let data = JSON.parse(localStorage.getItem("data"));
    data.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(data));
    displayData(data);
}

window.onload = () => {
    let data = JSON.parse(localStorage.getItem("data")) || [];
    if (data.length > 0) {
        displayData(data);
    } else {
        output.innerHTML = "Data is not available";
    }
}