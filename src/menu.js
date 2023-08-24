
const createMenuPage = () => 
{
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('pageContent');
    pageContent.classList.add('menuPage');

    const heading = document.createElement('h1');
    heading.textContent = 'Menu';
    pageContent.appendChild(heading);

    const image = document.createElement('img');
    image.src = '/images/flavors.jpg';
    image.id = 'flavors';
    image.height = '300';
    pageContent.appendChild(image);

    const menuList = document.createElement('ul');

    for(let i = 0; i < 4; i++)
    {
        const item = document.createElement('li');
        item.textContent = 'Item ' + (i+1);
        menuList.appendChild(item);
    }

    pageContent.appendChild(menuList);

    content.appendChild(pageContent);

}

export default createMenuPage;