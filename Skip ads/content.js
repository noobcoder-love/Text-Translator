// Function to skip the ad
function skipAd() {
    const skipButton = document.querySelector('.ytp-ad-skip-button');
    if (skipButton) {
      skipButton.click();
    }
  }
  
  // Check for ads every second
  setInterval(skipAd, 1000);
  