document.addEventListener('click', function (e) {
  if (e.target.classList.contains('edit-me')) {
    let userInput = prompt('enter the new text');
    axios
      .post('/update-item', { text: userInput })
      .then(function () {
        //do something herre
      })
      .catch(function () {
        console.log('try again later');
      });
  }
});
