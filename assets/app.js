

function closeLightBox(node) {

    let lightBox = node.parentNode.parentNode;
    lightBox.style.width = '1px';
    let lightBoxHeader = node.parentNode;
    lightBoxHeader.style.opacity = 0;
    lightBoxHeader.style.display = 'none';
}


function showLightBox() {
    let lightBox = document.querySelector('.lightbox');
    lightBox.style.width = '100vw'
    lightBox.style.opacity = '1';
    let lightBoxHeader = document.querySelector('#lightbox-header');
    lightBoxHeader.style.opacity = '1';
    lightBoxHeader.style.display = 'block';
}



function getAndSetContents(destination) {

    let veryParentNode = destination.parentNode.parentNode.parentNode;
    let imageNode = veryParentNode.firstElementChild.firstElementChild;
    let titleNode = veryParentNode.childNodes[3].firstElementChild.firstElementChild;

    let imageSource = imageNode.getAttribute('src');
    let title = titleNode.textContent;
    console.log(titleNode);
    
    let headerImage = document.getElementById('header-attractions');
    headerImage.style.background = `url(${imageSource})`;
    headerImage.style.backgroundSize = 'cover';
    
    let headerTitle = document.querySelector('#header-description h1');
    headerTitle.textContent = title;

    // auq na header na lng muna
    // to be continued......
   
}


const destinationsContainer = document.getElementById('destinations-container');

destinationsContainer.addEventListener('click', function(event) {
    event.preventDefault();
    
    let clickedDestination = event.target;

    if(clickedDestination.tagName === 'A') {
       getAndSetContents(clickedDestination);
       showLightBox();
    }

});
