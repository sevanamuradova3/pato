let form = document.getElementById('form');
form.addEventListener('submit', formPost);

let namee = document.getElementById("name")
let phone = document.getElementById("phone")
let email = document.getElementById("email")
function formPost(e) {
    e.preventDefault()
    let data = {
        name: namee.value,
        phone: phone.value,
        email:email.value
    }
    axios.post("https://655f2b37879575426b44b8f7.mockapi.io/basket", data)
    .then(() => displaySeen())
    namee.value = ""
    phone.value = ""
    email.value = ""
}

let displayProduct = document.getElementById('display');

async function displaySeen() {
    displayProduct.innerHTML = ""
    let res = await axios.get("https://655f2b37879575426b44b8f7.mockapi.io/basket");
    let data = res.data;
    data.forEach((item) => {
        let div = document.createElement("div");
        div.className = "box"
        div.innerHTML = `
        <p><span>Name</span> : ${item.name} </p>
        <p><span>phone</span>: ${item.phone}</p>
        <p><span>email</span>: ${item.email}</p>
        <button onclick="deletePost(${item.id})">Delete</button>
        `
        displayProduct.appendChild(div)
    })
}
displaySeen();
function deletePost(id) {
    axios.delete(`https://655f2b37879575426b44b8f7.mockapi.io/basket/${id}`)
    .then(() => displaySeen())
}