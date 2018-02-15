export default () => {
  let
    side = '',
    buttonsContainer = document.querySelector('.menu'),
    sidebar = {
      left: document.querySelector('.sidebar_left'),
      right: document.querySelector('.sidebar_right')
    };

  let changeClass = (e) => {
    e.preventDefault();

    if(e.target.getAttribute('data-side')) {
      side = e.target.getAttribute('data-side');

      sidebar[side].classList.toggle('active');
    }
  };

  buttonsContainer.addEventListener('tap', changeClass);
};