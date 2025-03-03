function addTodo() {
    const title = document.getElementById('title').value
    const description = document.getElementById('description').value
    // const originalHTML = document.querySelector(".store").innerHTML;
    // document.querySelector('.store').innerHTML = originalHTML + `
    // <div>
    // <div>${title}</div>
    // <div>${description}</div>
    // <button>mark as done</button>
    // </div>`
    const outerDiv = document.createElement('div');
    // outerDiv.innerHTML = title;
    const titleDiv = document.createElement('div').innerHTML = title;
    // const descriptionDiv = document.createElement('div').innerHTML = description;
    outerDiv.appendChild(titleDiv);
    // outerDiv.appendChild(descriptionDiv);
    document.querySelector('.store').appendChild(outerDiv);
}