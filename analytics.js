// Vercel Web Analytics Initialization
// This script initializes Vercel Web Analytics for tracking page views
// Documentation: https://vercel.com/docs/analytics

(function() {
  // Initialize the analytics queue
  window.va = window.va || function () { 
    (window.vaq = window.vaq || []).push(arguments); 
  };
  
  // Load the analytics script from Vercel CDN
  var script = document.createElement('script');
  script.defer = true;
  script.src = 'https://cdn.vercel-insights.com/v1/script.js';
  
  // Append the script to the document head
  document.head.appendChild(script);
})();
