window.onload = function() {
    document.getElementById('btn-home').onclick=function() {
        setActive(this);
        getMenuContent("content-home");
    };

    document.getElementById('btn-shop').onclick=function() {
        setActive(this);
        getMenuContent("content-shop");
    };

    document.getElementById('btn-profile').onclick=function() {
        setActive(this);
        getMenuContent("content-profile");
    };
}

//putter klassen bot-list-item-active (gør den grøn) på det element der bliver klikket på
function setActive(listItem) {
    document.getElementById('btn-home').classList.remove("bot-list-item-active");
    document.getElementById('btn-shop').classList.remove("bot-list-item-active");
    document.getElementById('btn-profile').classList.remove("bot-list-item-active");
    listItem.classList.add("bot-list-item-active");
}

//fjerner klassen hidden, så content bliver vist
function getMenuContent(menuContent) {
    document.getElementById("content-profile").classList.add("hidden");
    document.getElementById("content-shop").classList.add("hidden");
    document.getElementById("content-home").classList.add("hidden");
    document.getElementById(menuContent).classList.remove("hidden");
}



