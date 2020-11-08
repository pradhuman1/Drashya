var Storedata, id;
fetch('https://my-json-server.typicode.com/pradhuman1/SafeMedData/data')
    .then((res) => {
        res.json().then((data) => {
            Storedata = data[0];
        })
    })
document.querySelector('.city').addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        var city = document.querySelector('.city').value;
        city = city.toUpperCase();
        ShowStores(city);
    }
})

function ShowStores(city) {
    removeOldData();
    if (Storedata && Storedata[city]) {
        var data = Storedata[city];
        data.forEach((curr) => {
            var html = '<div class="card"><img src="./Image/Crop_Pic.jpg" class="dummy"><div class="storeName text">CROP 1</div><div class="address"></div><div class="general-info"><table><tr class="info text"><td>Soil</td></tr><tr class="info text"><td>Rain</td></tr><tr class="info text"><td>Season</td></tr></table></div></div>'
            html = html.replace('%name%', curr.name);
            html = html.replace('%address%', curr.address);
            document.querySelector('.cards').insertAdjacentHTML('beforeend', html);
        })
    } else if (Storedata) {
        var html = '<div class="notAvailable">OOPS! SERVICE NOT AVAILABLE</div><div>Currently service available only in Delhi,Mumbai,Bangalore,Hydrabad and Chennai.'
        document.querySelector('.cards').insertAdjacentHTML('beforeend', html);

    } else {
        var html = '<div class="notAvailable">Check Your Internet Connection</div>'
        document.querySelector('.cards').insertAdjacentHTML('beforeend', html);
    }
}
function removeOldData() {
    var list = document.querySelector('.cards');
    if (list.childNodes.length > 1) {
        for (var i = 1; i < list.childNodes.length + i - 1; i++)
            list.removeChild(list.childNodes[1]);
    }
}
document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id && e.target.id != 'book') {
        id = e.target.id;
    } else if (e.target.id) {
        if (id) {
            ShowBooking(id);
        } else {
            console.log('SELECT A SLOT');
        }
    } else {
        id = null;
    }
})
function ShowBooking(time) {
    removeOldData();
    var id = new Date();
    id = id.getTime();
    var html = '<div class="confirmed">BOOKING CONFIRMED</div><div class="time">TIME : %time%</div><div class="customerID">Your ID : %id%</div>'
    html = html.replace('%time%', time);
    html = html.replace('%id%', id);
    document.querySelector('.cards').insertAdjacentHTML('beforeend', html);
}