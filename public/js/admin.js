const adminHomes = document.querySelector('#view');
const homes = document.querySelector('.homes');

const loadHouses = url => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = () => {
        if(xhr.status == 200) {
            const houses = JSON.parse(xhr.responseText);

            let output = '';
            houses.forEach(house => {
                output += `
                <div class="home" data-itemid="${house.id}">
                    <img src="../${house.img_url}" alt="House ${house.id}" class="home__img">
                    <svg class="home__like">
                        <use xlink:href="../img/sprite.svg#icon-heart-full"></use>
                    </svg>
                    <h5 class="home__name">${house.name}</h5>
                    <div class="home__location">
                        <svg>
                            <use xlink:href="../img/sprite.svg#icon-map-pin"></use>
                        </svg>
                        <p>${house.location}</p>
                    </div>
                    <div class="home__rooms">
                        <svg>
                            <use xlink:href="../img/sprite.svg#icon-profile-male"></use>
                        </svg>
                        <p>${house.rooms}</p>
                    </div>
                    <div class="home__area">
                        <svg>
                            <use xlink:href="../img/sprite.svg#icon-expand"></use>
                        </svg>
                        <p>325 m<sup>2</sup></p>
                    </div>
                    <div class="home__price">
                        <svg>
                            <use xlink:href="../img/sprite.svg#icon-key"></use>
                        </svg>
                        <p>${house.price}</p>
                    </div>
                    <div class="btn-wrap">
                        <button class="home__btn edit-btn">Edit</button>
                        <button class="home__btn delete-btn" id="delete">Delete</button>
                    </div>
                </div>
                `
            });
            homes.innerHTML = output;
        }
    }
    xhr.send();
}

const deleteItem = id => {
    const item = document.querySelector(`data-itemid=${id}`);
    item.parentElement.removeChild(item);
}
const deleteRequest = id => {
    const xhr = new XMLHttpRequest();
    xhr.open('DELETE', `http://localhost:3000/houses/${id}`, true);
    xhr.onload = () => {
        if(xhr.status === 200) {
            const item = document.querySelector(`[data-itemid="${id}"]`);
            item.parentElement.removeChild(item);
        }
    }
    xhr.send()

}

adminHomes.addEventListener('click', () => {
    loadHouses('http://localhost:3000/houses');
});

homes.addEventListener('click', e => {
    if (e.target.classList.contains('delete-btn')) {
        const id = e.target.closest('.home').dataset.itemid;
        deleteRequest(id);
    }
});