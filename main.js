// Function to toggle the mobile navigation
function toggleNavigation() {
  var navigation = document.getElementById("navigation");
  navigation.classList.toggle("show");
}

// fetch function start

// Function to fetch and render the content from a given URL
function fetchContent(url) {
  // Check if the URL is 'index.html', if yes, redirect to it
  if (url === 'index.html') {
    window.location.href = url; // Redirect to 'index.html'
    return; // Stop the function execution here
  }

  // Fetch the content from the URL using the fetch() function
  fetch(url)
    .then(function(response) {
      // Convert the response to text format
      return response.text();
    })
    .then(function(content) {
      // Get the 'main-content' element from the HTML
      const mainContent = document.getElementById('main-content');
      // Set the fetched content as the innerHTML of 'main-content'
      mainContent.innerHTML = content;
    })
    .catch(function(error) {
      // If an error occurs during fetching, log the error to the console
      console.error('Error fetching content:', error);
    });
}

// Event listener for navigation links
const navigationLinks = document.querySelectorAll('#navigation a');
navigationLinks.forEach(function(link) {
  // Add a click event listener to each navigation link
  link.addEventListener('click', function(event) {
    // Prevent the default link behavior (e.g., navigating to a new page)
    event.preventDefault();
    // Get the target URL from the 'href' attribute of the clicked link
    const url = this.getAttribute('href');
    // Fetch and render the content from the target URL
    fetchContent(url);
  });
});
// fetch function end
