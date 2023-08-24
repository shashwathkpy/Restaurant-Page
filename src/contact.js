
const createContactPage = () => 
{
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const form = document.createElement('form');
    form.classList.add('contact-form');

    const nameInputLabel = document.createElement('label');
    nameInputLabel.textContent = 'Name:';
    pageContent.appendChild(nameInputLabel);
    
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Bruce Lee';
    pageContent.appendChild(nameInput);

    const emailInputLabel = document.createElement('label');
    emailInputLabel.textContent = 'Email:';
    pageContent.appendChild(emailInputLabel);

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.placeholder = 'someone@gmail.com'
    pageContent.appendChild(emailInput);

    const phoneInputLabel = document.createElement('label');
    phoneInputLabel.textContent = 'Phone Number:';
    pageContent.appendChild(phoneInputLabel);

    const phoneInput = document.createElement('input');
    phoneInput.type = 'number';
    phoneInput.placeholder = 'XXX-XXX-XXXX';
    pageContent.appendChild(phoneInput);

    content.appendChild(pageContent);
}

export default createContactPage;