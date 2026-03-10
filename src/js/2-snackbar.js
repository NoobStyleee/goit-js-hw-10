import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

iziToast.destroy();
const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = Number(form.elements.delay.value);
  const state = form.elements.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(delay => {
      iziToast.destroy();
      iziToast.show({
        id: null,
        class: '',
        title: '',
        titleColor: 'black',
        titleSize: '',
        titleLineHeight: '',
        message: `✅ Fulfilled promise in ${delay}ms`,
        messageColor: 'black',
        messageSize: '',
        messageLineHeight: '',
        backgroundColor: '',
        theme: 'dark', // dark
        color: 'green', // blue, red, green, yellow
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
        timeout: delay,
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
    })
    .catch(delay => {
      iziToast.destroy();
      iziToast.show({
        id: null,
        class: '',
        title: '',
        titleColor: 'black',
        titleSize: '',
        titleLineHeight: '',
        message: `❌ Rejected promise in ${delay}ms`,
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
        timeout: delay,
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
    });
});