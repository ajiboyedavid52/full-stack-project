const friends = document.getElementById("friends");
const advert = document.querySelectorAll(".sidebar-title a");
const back = document.getElementById("back");
const moreInfo = document.getElementById("more")
const dropDown = document.querySelector(".settings-menu")
const darkBtn = document.getElementById("dark-btn");
const nav = document.getElementById("setThings");
const settings1 = document.querySelector(".interface1");

function unvail() {
    if (moreInfo.style.display == "none") {
        moreInfo.style.display = "block";
        advert[0].textContent = "show less";
    }
    else {
        moreInfo.style.display = "none";
        advert[0].textContent = "see all";
    }
}

function hideVert() {
    if (back.style.display != "none") {
        back.style.display = "none";
        advert[1].textContent = "open"
    }
    else {
        back.style.display = "block";
        advert[1].textContent = "close"
    }
}


function hideFriend() {
    if (friends.style.display != "none") {
        friends.style.display = "none";
        advert[2].textContent = "show";
    }
    else {
        friends.style.display = "block";
        advert[2].textContent = "hide chat";
    }
}

function dropDownMenu() {
    dropDown.classList.toggle("settings-menu-height");
    const hideBar = document.getElementById('dropDown');
    hideBar.style.display = 'none';
}

function showBar() {
    const showBar = document.getElementById('dropDown');
    showBar.style.display = 'flex';
    dropDown.classList.remove("settings-menu-height")
}

function hideBar() {
    const hideBar = document.getElementById('dropDown');
    hideBar.style.display = 'none';
}

darkBtn.onclick = function () {
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");
    }
    else {
        localStorage.setItem("theme", "light");
    }
}

if (localStorage.getItem("theme") == "light") {
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme")
}
else if (localStorage.getItem("theme") == "dark") {
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme")
}

else {

    localStorage.setItem("theme", "light");
}

function valuelike() {
    settings1.classList.add("interface-on");
}
