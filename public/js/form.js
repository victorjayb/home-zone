const form = document.querySelector('#postForm');




form.addEventListener('submit', e => {
    e.preventDefault();
        e.preventDefault();
        const name = document.querySelector('input[name="name"]').value;
        const location = document.querySelector('input[name="location"]').value;
        const price = document.querySelector('input[name="price"]').value;
        const rooms = document.querySelector('input[name="rooms"]').value;
        const description = document.querySelector('input[name="description"]').value;
        const img_url = document.querySelector('input[name="img_url"]').value;
        const data = `name=${name}&location=${location}&price=${price}&rooms=${rooms}&description=${description}&img_url=${img_url}`;
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                
            }
        }
        xhr.open('POST', 'http://localhost:3000/houses', true)
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
        xhr.send(data)
    });