
const createContactPage = () => 
{
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('pageContent');
    pageContent.classList.add('contactPage');

    const form = document.createElement('form');
    form.classList.add('contact-form');

    const nameInputLabel = document.createElement('label');
    nameInputLabel.textContent = 'Name:';
    form.appendChild(nameInputLabel);
    
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Davy Jones';
    form.appendChild(nameInput);

    const emailInputLabel = document.createElement('label');
    emailInputLabel.textContent = 'Email:';
    form.appendChild(emailInputLabel);

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.placeholder = 'blackbeard@pirates.com'
    form.appendChild(emailInput);

    const phoneInputLabel = document.createElement('label');
    phoneInputLabel.textContent = 'Phone Number:';
    form.appendChild(phoneInputLabel);

    const phoneInput = document.createElement('input');
    phoneInput.type = 'number';
    phoneInput.placeholder = 'XXX-XXX-XXXX';
    form.appendChild(phoneInput);

    pageContent.appendChild(form);

    content.appendChild(pageContent);
}

export default createContactPage;