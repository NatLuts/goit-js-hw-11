// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const delay = +e.currentTarget.elements.delay.value;
  const stateInput = e.currentTarget.elements.state.value;

  createPromiseWithDelay(stateInput, delay)
    .then(delay => {
      iziToast.success({
        message: `✅ Fulfilled promise in ${delay}ms`,
        backgroundColor: '#59A10D',
        messageColor: '#fff',
        position: 'topRight',
      });
    })
    .catch(delay => {
      iziToast.error({
        message: `❌ Rejected promise in ${delay}ms`,
        backgroundColor: '#EF4040',
        messageColor: '#fff',
        position: 'topRight',
      });
    });
  e.currentTarget.reset();
}

function createPromiseWithDelay(btn, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (btn === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}
