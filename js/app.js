$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: false,
        enter: true,
        items: 2,
        loop: true,
        margin: 10,
        responsive: {
            480: {
                items: 1
            },
            800: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
});
function copyClipboard(i) {
    let getCode = document.getElementById("code" + i);
    navigator.clipboard.writeText(getCode.innerText);
    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        setTimeout(function () {
            document.getElementsByClassName("alertMsg")[0].style.display = "block";
        }, 200);
        setTimeout(function () {
            document.getElementsByClassName("alertMsg")[0].style.display = "";
        }, 3200);
        setTimeout(function () {
            document.getElementsByClassName("fa")[i].classList.toggle('fa-check');
            document.getElementsByClassName("fa")[i].classList.toggle('fa-clone');
        }, 0);
        setTimeout(function () {
            document.getElementsByClassName("fa")[i].classList.toggle('fa-check');
            document.getElementsByClassName("fa")[i].classList.toggle('fa-clone');
        }, 3000);

    } catch (err) {
        setTimeout(function () {
            document.getElementsByClassName("alertErrorMsg")[0].style.display = "block";
        }, 200);
        setTimeout(function () {
            document.getElementsByClassName("alertErrorMsg")[0].style.display = "";
        }, 3200);
    }
}
let getCodeTag = document.getElementsByTagName('code');
let getCopyBtn = document.getElementsByClassName('copyCode');
for (i = 0; i <= getCodeTag.length; i++) {

    getCopyBtn[i].setAttribute("id", "copyCode" + i);
    getCodeTag[i].setAttribute("id", "code" + i);
}
