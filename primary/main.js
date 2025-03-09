// try {
//     const nav = document.querySelector('.nav');
//     const display = document.querySelector('main');
//     const buttons = document.querySelectorAll('.btn'); //selects all buttons with the class btn.
//     const aboutUsToggle = document.getElementById('aboutUsToggle');
//     const aboutUsContent = document.getElementById('aboutUsContent');

//     if (aboutUsToggle && aboutUsContent) {
//         aboutUsToggle.addEventListener('click', () => {
//             if (aboutUsContent.style.display === 'none') {
//                 aboutUsContent.style.display = 'block';
//             } else {
//                 aboutUsContent.style.display = 'none';
//             }
//         });
//     }

//     if (nav && display) {
//         nav.addEventListener('click', () => {
//             if (display.style.display === 'none') {
//                 display.style.display = 'block';
//             } else {
//                 display.style.display = 'none';
//             }
//         });
//     }

//     console.log('try block');

//     const hide = () => alert('hello'); //Declared but not called.

// } catch (error) {
//     console.log('this =>> ', error);
// }