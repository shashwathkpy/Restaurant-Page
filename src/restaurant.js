
const createRestaurantHomePage = () =>
{
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const image = document.createElement('img');
    image.src = '/images/smoothie.jpg';
    image.height = '300';
    pageContent.appendChild(image);

    const headline = document.createElement('h1');
    headline.textContent = "Welcome to our smoothie bar!";
    pageContent.append(headline);

    const copy = document.createElement('p');
    copy.textContent = "This is the best smoothie place in the world!";
    pageContent.appendChild(copy);

    content.appendChild(pageContent);
}

export default createRestaurantHomePage;