document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('searchButton').addEventListener('click', function() {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
          var currentTab = tabs[0];
          var currentUrl = currentTab.url;
          var searchQueries = ['new year 2024', 'bpsc', 'upsc']; // Add your search queries here
          
          for (var i = 0; i < searchQueries.length; i++) {
            var searchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(searchQueries[i]);
            chrome.tabs.create({ url: searchUrl, index: currentTab.index + i + 1, active: false });
            
          }
        });
      });
    

})
  