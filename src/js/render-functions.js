import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const input = document.querySelector('#datetime-picker');
const display = document.querySelector('.timer');
const startBtn = document.querySelector('[data-start]');

let userSelectedDate;
startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];

    if (userSelectedDate < Date.now()) {
      showErrorMessage();
      startBtn.disabled = true;
      return;
    }
    startBtn.disabled = false;
  },
};

flatpickr(input, options);

startBtn.addEventListener('click', onBtnClick);

function onBtnClick() {
  startBtn.disabled = true;
  input.disabled = true;

  const timerInterval = setInterval(() => {
    const dif = userSelectedDate - Date.now();
    const { days, hours, minutes, seconds } = convertMs(dif);
    addLeadingZero(days, hours, minutes, seconds);

    if (dif < 900) {
      clearInterval(timerInterval);
      input.disabled = false;
      showSuccessMessage();
    }
  }, 1000);
}

function addLeadingZero(days, hours, minutes, seconds) {
  display.querySelector('[data-days]').textContent = String(days).padStart(
    2,
    '0'
  );
  display.querySelector('[data-hours]').textContent = String(hours).padStart(
    2,
    '0'
  );
  display.querySelector('[data-minutes]').textContent = String(
    minutes
  ).padStart(2, '0');
  display.querySelector('[data-seconds]').textContent = String(
    seconds
  ).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function showErrorMessage() {
  return iziToast.error({
    title: 'Error',
    message: 'Please choose a date in future',
    position: 'topRight',
  });
}

function showSuccessMessage() {
  return iziToast.success({
    title: 'Ok',
    message: 'Success',
    position: 'topRight',
  });
}
