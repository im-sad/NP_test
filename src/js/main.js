document.addEventListener('DOMContentLoaded', function() {
  'use strict';

  // SEARCH
  (function() {
    const searchFillTags = document.getElementById('js-fill-tags');

    if (!searchFillTags) return;

    const searchFillTagsList = searchFillTags.children;

    for (let i = 0; i < searchFillTagsList.length; i++) {
      searchFillTagsList[i].addEventListener('click', function() {
        this.remove();
      });
    }
  })();



  // MODAL
  (function() {
    const startFillBtn = document.getElementById('js-fill');
    const modalFillBlock = document.getElementById('modal-fill');
    const formFill = document.getElementById('js-from-send');

    if (!startFillBtn || !modalFillBlock) return;

    const modalFill = new Modal(modalFillBlock);

    startFillBtn.addEventListener('click', function() {
      modalFill.open();
    }, false);

    if (formFill) {
      formFill.addEventListener('submit', function(e) {
        e.preventDefault();
        modalFill.close();
      });
    }
  })();


  function Modal(scope) {
    const _body = document.body;
    const modalEl = scope;
    const modalCloseBtn = modalEl.getElementsByClassName('js-modal-close')[0];


    init();

    function init() {
      if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', function() {
          closeModal();
        });
      }

      document.addEventListener('keyup', function(e) {
        if ((e.keyCode === 27) && (document.getElementsByClassName('is-opened').length > 0)) {
          e.stopPropagation();
          closeModal();
        }
      });
    }

    function openModal() {
      _body.classList.add('body--overflow');
      modalEl.classList.add('is-opened');
    }

    function closeModal() {
      _body.classList.remove('body--overflow');
      modalEl.classList.remove('is-opened');
    }

    this.open = function() {
      openModal();
    }
    this.close = function() {
      closeModal();
    }
  }
});
