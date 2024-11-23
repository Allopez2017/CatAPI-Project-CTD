
let url = "https://api.thecatapi.com/v1/images/search/";
const APIKey = "qtF8i5RMB20EeoW4MXHYJW96rwzcfyxtbuHipAWYy32AM5iHam4lpQQIBzCE34VH"
let h = new Headers();
h.append('Accept', 'application/json');

let req = new Request(url, {
    method: 'GET',
    headers: h,
    mode: 'cors', 
    "x-Auth-Token": APIKey
})

function fetchCatImage() {
    let image = document.getElementById("cat-image")
    fetch(req)
    .then(resp => resp.json())
    .then(json => image.src = json[0].url)

}

function buttonClick() {
    let button = document.getElementById("cat-button")
    button.addEventListener("click", fetchCatImage)
}
document.addEventListener("DOMContentLoaded", () => {
    fetchCatImage()
    buttonClick()
})


