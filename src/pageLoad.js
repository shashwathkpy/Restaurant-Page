import createRestaurantHomePage from './restaurant';
import createContactPage from './contact';
import createMenuPage from './menu';

function headerTabs()
{
    const header = document.querySelector('#header');
    // header.classList.add('heading');

    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    header.appendChild(homeButton);

    const menuButton = document.createElement('button');
    menuButton.textContent = 'Menu';
    header.appendChild(menuButton);

    const contactButton = document.createElement('button');
    contactButton.textContent = 'Contact';
    header.appendChild(contactButton);

    homeButton.addEventListener("click", function(e) {
        pageClear();
        createRestaurantHomePage();
    })

    menuButton.addEventListener("click", function(e) {
        pageClear();
        createMenuPage();
    })

    contactButton.addEventListener("click", function(e) {
        pageClear();
        createContactPage();
    })

}

function initialLoad() 
{
    headerTabs();
    createRestaurantHomePage();
}

function pageClear()
{
    const content = document.querySelector('#content');
    while(content.lastElementChild)
    {
        content.removeChild(content.lastElementChild);
    }
}

export default initialLoad;