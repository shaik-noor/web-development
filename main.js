// Function to fetch and render the content from a given URL
function fetchContent(url) {
  if (url === 'index.html') {
    window.location.href = url;
    return;
  }

  fetch(url)
    .then(response => response.text())
    .then(content => {
      const mainContent = document.getElementById('main-content');
      mainContent.innerHTML = content;
    })
    .catch(error => {
      console.error('Error fetching content:', error);
    });
}

// Event listener for navigation links
const navigationLinks = document.querySelectorAll('#navigation a');
navigationLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const url = this.getAttribute('href');
    fetchContent(url);
  });
});
