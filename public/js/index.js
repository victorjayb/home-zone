// Variables
const homes = document.querySelector('#homes');
const viewAllBtn = document.querySelector('.btn--navy');
const searchBtn = document.querySelector('#submit');
const search = document.querySelector('#text');

// Functions
const loadHouses = url => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = () => {
        if(xhr.status == 200) {
            const houses = JSON.parse(xhr.responseText);

            let output = '';
            houses.forEach(house => {
                output += `
                <div class="home">
                    <img src="${house.img_url}" alt="House ${house.id}" class="home__img">
                    <svg class="home__like">
                        <use xlink:href="img/sprite.svg#icon-heart-full"></use>
                    </svg>
                    <h5 class="home__name">${house.name}</h5>
                    <div class="home__location">
                        <svg>
                            <use xlink:href="img/sprite.svg#icon-map-pin"></use>
                        </svg>
                        <p>${house.location}</p>
                    </div>
                    <div class="home__rooms">
                        <svg>
                            <use xlink:href="img/sprite.svg#icon-profile-male"></use>
                        </svg>
                        <p>${house.rooms}</p>
                    </div>
                    <div class="home__area">
                        <svg>
                            <use xlink:href="img/sprite.svg#icon-expand"></use>
                        </svg>
                        <p>325 m<sup>2</sup></p>
                    </div>
                    <div class="home__price">
                        <svg>
                            <use xlink:href="img/sprite.svg#icon-key"></use>
                        </svg>
                        <p>${house.price}</p>
                    </div>
                    <button class="home__btn">View house</button>
                </div>
                `
            });
            homes.innerHTML = output;
        }
    }
    xhr.send();
}

// Event Listeners
viewAllBtn.addEventListener('click', () => {
    loadHouses('http://localhost:3000/houses');
    viewAllBtn.style.display = 'none';
});

searchBtn.addEventListener('click', () => {
    loadHouses(`http://localhost:3000/houses?q=${search.value}`)
});