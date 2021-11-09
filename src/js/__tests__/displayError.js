export default function displayErrorElement(error = true, errorMessage) {
    const errorElement = document.querySelector('#error');

    if (!error) {
        errorElement.style.display = 'none';
    }

    if (errorMessage) {
        errorElement.innerHTML = errorMessage;
    }

    errorElement.style.display = 'block';

    return true;
}
