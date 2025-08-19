
var btn = document.getElementById('btn')

function leftclick() {
    btn.style.left = '0'

}

function rightclick() {
    btn.style.left = '110px'

}


//dropdown-for login//
document.getElementById('dropdown').addEventListener('click', function(event) {
    var content = this.querySelector('.dropdown-content');
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
    event.stopPropagation(); // Prevents the click event from propagating to parent elements
  });
  
  // Close the dropdown when clicking outside of it
  document.addEventListener('click', function(event) {
    var dropdown = document.getElementById('dropdown');
    var content = dropdown.querySelector('.dropdown-content');
    if (!dropdown.contains(event.target)) {
      content.style.display = 'none';
    }
  });
  