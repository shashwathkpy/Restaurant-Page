
const createRestaurantHomePage = () =>
{
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('pageContent');
    pageContent.classList.add('homePage');

    const headline = document.createElement('h1');
    headline.textContent = "ARGH! Welcome to Smuggler's Smoothie!";
    pageContent.append(headline);

    const image = document.createElement('img');
    image.src = './images/smoothie.jpg';
    image.height = '300';
    pageContent.appendChild(image);

    const copy = document.createElement('p');
    copy.textContent = "Ahoy, mateys! Drop anchor at Smuggler's Smoothie for a taste adventure like no other. Sail in and savor – where every gulp be a pirate's delight!";
    pageContent.appendChild(copy);

    content.appendChild(pageContent);
}

export default createRestaurantHomePage;