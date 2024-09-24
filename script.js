// Modal functionality
var modal = document.getElementById("modal");
var featuresLink = document.getElementById("features-link");
var closeBtn = document.getElementsByClassName("close")[0];

featuresLink.addEventListener("click", function () {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

// URL Shortening functionality
function shortenUrl(longUrl) {
  const accessToken = "YOUR_BITLY_ACCESS_TOKEN"; // Replace with your Bitly access token
  const apiUrl = "https://api-ssl.bitly.com/v4/shorten";

  fetch(apiUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ long_url: longUrl }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.link) {
        var li = document.createElement("li");
        li.innerHTML = `<a href="${data.link}" target="_blank">${data.link}</a>`;
        document.getElementById("shortened-urls").appendChild(li);
        document.getElementById("url-input").value = ""; // Clear input field
      } else {
        alert("Failed to shorten the URL. Please try again.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    });
}
// JavaScript for modal functionality
var pricingModal = document.getElementById("pricing-modal1");
var pricingLink = document.getElementById("pricing-link");
var closePricingBtn = document.getElementsByClassName("close")[1]; // Assuming the close button index is 1

pricingLink.addEventListener("click", function () {
  pricingModal.style.display = "block";
});

closePricingBtn.addEventListener("click", function () {
  pricingModal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == pricingModal) {
    pricingModal.style.display = "none";
  }
});

// resorces page

// JavaScript for modal functionality

// resources javascript
document.addEventListener("DOMContentLoaded", function () {
  var resourcesModal = document.getElementById("resources-modal1");
  var resourcesLink = document.getElementById("resources-link");
  var closeResourcesBtn = document.getElementsByClassName("close")[0]; // Assuming the close button index is 0

  // Assuming you have modal functionality to open/close resourcesModal
  resourcesLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    resourcesModal.style.display = "block";
  });

  closeResourcesBtn.addEventListener("click", function () {
    resourcesModal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target == resourcesModal) {
      resourcesModal.style.display = "none";
    }
  });
});

// RESOURCE PAGE

document.addEventListener("DOMContentLoaded", function () {
  var resourcesLink = document.getElementById("resources-link");
  var resourcesSection = document.getElementById("resources-section");
  var closeResourcesBtn = document.getElementById("close-resources-btn");

  resourcesLink.addEventListener("click", function (event) {
    event.preventDefault();
    resourcesSection.style.display = "block";
  });

  closeResourcesBtn.addEventListener("click", function () {
    resourcesSection.style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var loginLink = document.getElementById("login-link");
  var loginSection = document.getElementById("login-id");
  var closeLoginBtn = document.getElementById("close-login-btn");

  loginLink.addEventListener("click", function (event) {
    event.preventDefault();
    loginSection.style.display = "block";
  });

  closeLoginBtn.addEventListener("click", function () {
    loginSection.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target == loginSection) {
      loginSection.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var signupLink = document.getElementById("signup-link");
  var signupSection = document.getElementById("signup-id");
  var closeSignupBtn = document.getElementById("close-signup-btn");

  signupLink.addEventListener("click", function (event) {
    event.preventDefault();
    signupSection.style.display = "block";
  });

  closeSignupBtn.addEventListener("click", function () {
    signupSection.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target == signupSection) {
      signupSection.style.display = "none";
    }
  });
});
