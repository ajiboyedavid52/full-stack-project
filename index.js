const navLink = document.querySelectorAll(".center-nav a");


navLink.forEach(element => {
    element.addEventListener("click", (event) => {
        event.target.addEventListener("click", () => {
            element.classList.toggle("active-link");
        })


    })

});
const initiate = document.querySelector(".initiate")
const profile = document.querySelector(".view-profile");
const exitProfile = document.querySelector(".body");
const initiate2 = document.querySelector(".initiate2")
const profileMenu = document.getElementById("profileMenu");


initiate.addEventListener("click", event => {
    profile.classList.toggle("view-profile-on");

})


initiate2.addEventListener("click", event => {
    profile.classList.toggle("view-profile-on");

})

function toggleMenu() {
    profileMenu.classList.toggle("open-menu")

}

function showBar() {
    const showBar = document.getElementById('dropDown');
    showBar.style.display = 'flex';
}

function hideBar() {
    const hideBar = document.getElementById('dropDown');
    hideBar.style.display = 'none';
}
