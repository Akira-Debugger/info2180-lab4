document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('searchSuperhero');

  btn.addEventListener('click', () => {
    fetch('superheroes.php')
      .then(response => response.text())
      .then(SupesList => {

        alert(SupesList);
      })
      .catch(() => alert('Error occurred in getting superheroes.'));
  });
});
