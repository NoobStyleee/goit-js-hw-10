import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
let userSelectedDate;
let intervalId = null;
const startBtn = document.querySelector('[data-start]');
const inputBtn = document.querySelector('#datetime-picker');
startBtn.disabled = true;
const daysBtn = document.querySelector('[data-days]');
const hourstBtn = document.querySelector('[data-hours]');
const minutesBtn = document.querySelector('[data-minutes]');
const secondsBtn = document.querySelector('[data-seconds]');
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const futureTrueDate = new Date();

    if (selectedDate <= futureTrueDate) {
      startBtn.disabled = true;
      iziToast.destroy();
      iziToast.show({
        id: null,
        class: '',
        title: '',
        titleColor: 'black',
        titleSize: '',
        titleLineHeight: '',
        message: `
  <div style="display:flex;align-items:center;gap:8px">
    <svg width="40" height="40">
      <use href="../img/sprite.svg#icon-close"></use>
    </svg>
    <span>Please choose a date in the future</span>
  </div>
  `,
        messageColor: 'black',
        messageSize: '',
        messageLineHeight: '',
        backgroundColor: '',
        theme: 'dark', // dark
        color: 'red', // blue, red, green, yellow
        icon: '',
        iconText: '',
        iconColor: 'black',
        iconUrl: null,
        image: '',
        imageWidth: 50,
        maxWidth: null,
        zindex: null,
        layout: 1,
        balloon: false,
        close: false,
        closeOnEscape: false,
        closeOnClick: false,
        displayMode: 0, // once, replace
        position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
        target: '',
        targetFirst: true,
        timeout: 0,
        rtl: false,
        animateInside: true,
        drag: true,
        pauseOnHover: true,
        resetOnHover: false,
        progressBar: false,
        progressBarColor: '',
        progressBarEasing: 'linear',
        overlay: false,
        overlayClose: false,
        overlayColor: 'rgba(0, 0, 0, 0.6)',
        transitionIn: 'fadeInUp',
        transitionOut: 'fadeOut',
        transitionInMobile: 'fadeInUp',
        transitionOutMobile: 'fadeOutDown',
        buttons: {},
        inputs: {},
        onOpening: function () {},
        onOpened: function () {},
        onClosing: function () {},
        onClosed: function () {},
      });
      return;
    } else {
      iziToast.destroy();
      userSelectedDate = selectedDate;
      startBtn.disabled = false;
      return;
    }
  },
};

flatpickr('#datetime-picker', options);

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

startBtn.addEventListener('click', () => {
  startBtn.disabled = true;
  inputBtn.disabled = true;
  intervalId = setInterval(() => {
    if (userSelectedDate - new Date() <= 0) {
      clearInterval(intervalId);
      inputBtn.disabled = false;
      return;
    }
    let days, hours, minutes, seconds;
    days = convertMs(userSelectedDate - new Date()).days;
    hours = convertMs(userSelectedDate - new Date()).hours;
    minutes = convertMs(userSelectedDate - new Date()).minutes;
    seconds = convertMs(userSelectedDate - new Date()).seconds;
    daysBtn.textContent = days.toString().padStart(2, '0');
    hourstBtn.textContent = hours.toString().padStart(2, '0');
    minutesBtn.textContent = minutes.toString().padStart(2, '0');
    secondsBtn.textContent = seconds.toString().padStart(2, '0');
  }, 1000);
});