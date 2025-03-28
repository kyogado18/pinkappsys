document.addEventListener("DOMContentLoaded", function () {
    const buttonOrder = document.getElementById("buttondashboard");
    const item3 = document.getElementById("item-3");

    buttonOrder.addEventListener("click", function () {
        fetch("../dashboard/dashboarddisplay.html")
            .then(response => response.text())
            .then(data => {
                const tempDiv = document.createElement("div");
                tempDiv.innerHTML = data;
                const extractedContent = tempDiv.querySelector(".container");

                if (extractedContent) {
                    item3.innerHTML = "";
                    while (extractedContent.firstChild) {
                        item3.appendChild(extractedContent.firstChild);
                    }
                } else {
                    item3.innerHTML = data;
                }

                item3.style.opacity = "1";
                item3.style.display = "grid"; // Ensure it's visible
            })
            .catch(error => console.error("Error loading the content:", error));
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const buttonOrder = document.getElementById("buttonproduct");
    const item3 = document.getElementById("item-03");

    buttonOrder.addEventListener("click", function () {
        fetch("../products/products.html")
            .then(response => response.text())
            .then(data => {
                const tempDiv = document.createElement("div");
                tempDiv.innerHTML = data;
                const extractedContent = tempDiv.querySelector(".container");

                if (extractedContent) {
                    item3.innerHTML = "";
                    while (extractedContent.firstChild) {
                        item3.appendChild(extractedContent.firstChild);
                    }
                } else {
                    item3.innerHTML = data;
                }

                item3.style.opacity = "1";
                item3.style.display = "grid"; // Ensure it's visible
            })
            .catch(error => console.error("Error loading the content:", error));
    });
});



//
document.addEventListener("DOMContentLoaded", function () {
    const buttonOrder = document.getElementById("buttonorder");
    const item3 = document.getElementById("item-03");

    buttonOrder.addEventListener("click", function () {
        fetch("../Orders/orders.html")
            .then(response => response.text())
            .then(data => {
                const tempDiv = document.createElement("div");
                tempDiv.innerHTML = data;
                const extractedContent = tempDiv.querySelector(".container");
                console.log("n3")
                if (extractedContent) {
                    item3.innerHTML = "";
                    while (extractedContent.firstChild) {
                        item3.appendChild(extractedContent.firstChild);
                    }
                } else {
                    item3.innerHTML = data;
                }

                item3.style.opacity = "1";
                item3.style.display = "grid"; // Ensure it's visible
            })
            .catch(error => console.error("Error loading the content:", error));
    });
});
//
document.addEventListener('DOMContentLoaded', function () {
    // Function to display products content
    function reportsdisplay() {
        console.log('Attempting to load products.html from the "pages" folder...');

        fetch('../reports/reports.html') // Adjust path here to load from the "products" folder
            .then(response => {
                if (!response.ok) {
                    console.error('Network response was not ok', response);
                    throw new Error('Network response was not ok');
                }
                return response.text(); // Get the text content of the HTML file
            })
            .then(html => {
                console.log('HTML loaded successfully');
                const dashboardBody = document.getElementById('dashboardbody');

                if (dashboardBody) {
                    dashboardBody.innerHTML = html;
                    // Save the state to localStorage to persist it after a refresh
                    localStorage.setItem('reportLoaded', 'true');
                    localStorage.removeItem('dashboardLoaded'); // Optional: Reset dashboardLoaded state
                    localStorage.removeItem('productLoaded');
                    localStorage.removeItem('orderLoaded');
                } else {
                    console.error('Element with id "dashboardbody" not found');
                }
            })
            .catch(error => {
                console.error('Error loading report.html:', error);
            });
    }

    // Add event listener to buttonProduct
    const buttonReport = document.getElementById('buttonreport');
    if (buttonReport) {
        buttonReport.addEventListener('click', reportsdisplay);
    } else {
        console.error('Button with id "buttonorder" not found');
    }

    // Check localStorage when the page loads to see if the product content should be displayed
    if (localStorage.getItem('reportLoaded') === 'true') {
        console.log('Product content was previously loaded, loading it now...');
        // Automatically load the product content if it was previously loaded
        reportsdisplay();
    }
});


window.onload = function () {
    // Get the dashboardbody and other content
    const dashboard = document.querySelector('.dashboardbody');
    const otherContent = document.querySelector('.other-content');

    // Set the z-index to ensure the dashboardbody is on top
    if (dashboard) {
        dashboard.style.zIndex = '1'; // Ensure dashboard is on top
        dashboard.style.position = 'absolute';
        dashboard.style.width = '1500px';
        dashboard.style.height = '1403px';
        dashboard.style.top = '90px';
        dashboard.style.left = '310px';
    }

    // Hide other content initially, ensuring dashboard is visible first
    if (otherContent) {
        otherContent.style.visibility = 'hidden';
    }
};

