(function () {
  var loginUrl = "https://fotoku.store/login";

  document.addEventListener('keydown', function (event) {
    var key = (event.key || '').toLowerCase();

    if (key === 'tab') {
      event.preventDefault();
      window.location.href = loginUrl;
      return false;
    }

    if (
      event.key === 'F12' ||
      (event.ctrlKey && event.shiftKey && ['i', 'j', 'c'].indexOf(key) !== -1) ||
      (event.ctrlKey && ['u', 's'].indexOf(key) !== -1)
    ) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    }
  }, true);

  document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    return false;
  }, true);
})();
