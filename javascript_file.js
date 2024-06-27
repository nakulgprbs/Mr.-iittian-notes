document.getElementById('checkbtn').addEventListener('click', function() {
    const ul = document.querySelector('nav ul');
    if (ul.style.left === '0px') {
      ul.style.left = '-100%';
    } else {
      ul.style.left = '0px';
    }
  });
  