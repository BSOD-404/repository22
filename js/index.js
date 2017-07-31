document.getElementById('loaded').innerHTML =
    (new Date()).toLocaleTimeString();

//document.getElementById('btn-get-data').addEventListener('click', getData);

setInterval(getData, 1000);

function getData() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            document.getElementById('name').innerHTML = data.name;
            document.getElementById('address').innerHTML = data.address;
            document.getElementById('salary').innerHTML = data.salary;
            if (data.gender === 'male') {
                document.getElementById('title').innerHTML = 'Mister';
            }
            else {
                document.getElementById('title').innerHTML = 'Missis';
            }
        }
    }
    const url = 'data.json?t=' + Math.random();
    xhr.open('get', url, true);
    xhr.send();
}
