
const createMenuPage = () => 
{
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const heading = document.createElement('h1');
    heading.textContent = 'Menu';
    pageContent.appendChild(heading);

    const menuList = document.createElement('ul');

    for(let i = 0; i < 3; i++)
    {
        const item = document.createElement('li');
        item.textContent = 'Item ' + (i+1);
        menuList.appendChild(item);
    }

    pageContent.appendChild(menuList);

    content.appendChild(pageContent);

}

export default createMenuPage;