let index = window.my_special_setting;
let output = document.getElementById('output'); 

window.onload = () => {
    let data = JSON.parse(localStorage.getItem("data")) || [];

    if (data.length > 0) {
        displayData(data);
    } else {
        output.innerHTML = "No Data Available";
    }
}
function displayData(data) {
    let img =document.createElement('img');
    img.setAttribute('src',`${data[index]["image"]}`);
    img.style.height = '200px';
    img.style.width ='200px'
    output.innerHTML = `
    <p><b>Id : </b>${data[index]["id"]}</p>
    <p><b>Title : </b>${data[index]["title"]}</p>
    <p><b>Price : </b>${data[index]["price"]}</p>
    <p><b>Description : </b>${data[index]["description"]}</p>
    <p><b>Category : </b>${data[index]["category"]}</p>
    <p><b>Rating :</b> rate: ${data[index]["rating"]['rate']}, count : ${data[index]['rating']['count']}</p>
    `;
    document.body.appendChild(output);
    output.appendChild(img);
}