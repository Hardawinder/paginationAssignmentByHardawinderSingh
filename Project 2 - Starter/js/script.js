var fullPageContent = document.querySelectorAll('.contact-item');
var contactList = document.querySelector('.contact-list');
var currentPageContent = "";
var outerButtonElements = document.querySelector('#p1');

function getDefaultPage() {

    for (var i = 0; i < 10; i++) {
        currentPageContent += `<li class="contact-item cf"> ${fullPageContent[i].innerHTML} </li>`;
    }
    contactList.innerHTML = currentPageContent;

}

function getPageCount() {

    var length = fullPageContent.length;
    var numberOfPages = Math.trunc(length / 10);
    return numberOfPages;
}
getDefaultPage();

function getButtons() {

    for (var i = 0; i < getPageCount(); i++) {
        outerButtonElements.innerHTML += `<button id="${i}" class="t" onclick="addPage(${i})">${i}</button>`; 4
}
}

function addPage(pageNumber) {
    startIndex = pageNumber * 10;
    endIndex = startIndex + 10;
    contactList.innerHTML = "";
    for (startIndex; startIndex < endIndex; startIndex++) {

        contactList.innerHTML += `<li class="contact-item cf"> ${fullPageContent[startIndex].innerHTML} </li>`;
    }
}


getButtons();
