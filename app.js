document.addEventListener('DOMContentLoaded', () => {
  const super_Form = document.getElementById('searchForm');
  let super_result = document.getElementById('result');

  super_Form.addEventListener('submit', (e) => {
    e.preventDefault();
    const super_input = document.getElementById('searchInput').value;

    let super_url = super_input? `superheroes.php?query=${encodeURIComponent(super_input)}` : 'superheroes.php';

    fetch(super_url)
      .then(response => response.text())
      .then(SupesList => {

        super_result.innerHTML = SupesList;
      })
      .catch(() => alert('Error occurred in displaying list.'));
  });
});
