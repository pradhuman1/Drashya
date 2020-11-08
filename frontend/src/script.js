var lang_req;
document.querySelector('#lang').onchange = Translate;
async function Translate() {
    var websiteText = document.querySelectorAll('.text');

    lang_req = document.querySelector('#lang').value;
    websiteText.forEach(async (curr) => {
        var data = { "string": curr.textContent, "lang_id": lang_req }
        var options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        try {
            const res = await fetch('http://localhost:1100/changeLang', options);
            const data = await res.json();
            console.log(data);
            curr.textContent = data.converted;
        } catch (error) {
            console.log(error)
        }
        // break;
    })

}
