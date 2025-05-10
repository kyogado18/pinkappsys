document.addEventListener('DOMContentLoaded', function () {
    // Function to display dashboard content
    function dashboarddisplay() {
        // Use the fetch API to load the content of dashboarddisplay.html
        fetch('dashboarddisplay.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text(); // Get the text content of the HTML file
            })
            .then(html => {
                const dashboardBody = document.getElementById('dashboardbody');
                dashboardBody.innerHTML = html;

                // Save the state to localStorage to persist it after a refresh
                localStorage.setItem('dashboardLoaded', 'true');
                localStorage.removeItem('productLoaded'); // Optional: Reset productLoaded key
            })
            .catch(error => {
                console.error('Error loading dashboarddisplay.html:', error);
            });
    }

    // Add event listener to buttonDashboard
    const buttonDashboard = document.getElementById('buttondashboard');
    if (buttonDashboard) {
        buttonDashboard.addEventListener('click', dashboarddisplay);
    }

    // Check localStorage when the page loads to see if the dashboard should be displayed
    if (localStorage.getItem('dashboardLoaded') === 'true') {
        // Automatically load the dashboard content if it was previously loaded
        dashboarddisplay();
    } else {
        // If dashboard is not loaded previously, load it by default
        dashboarddisplay();
    }
});


document.addEventListener('DOMContentLoaded', function () {
    // Function to display products content
    function productsdisplay() {
        console.log('Attempting to load products.html from the "pages" folder...');

        fetch('../products/products.html') // Adjust path here to load from the "products" folder
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
                    localStorage.setItem('productLoaded', 'true');
                    localStorage.removeItem('dashboardLoaded'); // Optional: Reset dashboardLoaded state
                } else {
                    console.error('Element with id "dashboardbody" not found');
                }
            })
            .catch(error => {
                console.error('Error loading products.html:', error);
            });
    }

    // Add event listener to buttonProduct
    const buttonProduct = document.getElementById('buttonproduct');
    if (buttonProduct) {
        buttonProduct.addEventListener('click', productsdisplay);
    } else {
        console.error('Button with id "buttonproduct" not found');
    }

    // Check localStorage when the page loads to see if the product content should be displayed
    if (localStorage.getItem('productLoaded') === 'true') {
        console.log('Product content was previously loaded, loading it now...');
        // Automatically load the product content if it was previously loaded
        productsdisplay();
    }
});

//
document.addEventListener('DOMContentLoaded', function () {
    // Function to display products content
    function ordersdisplay() {
        console.log('Attempting to load products.html from the "pages" folder...');

        fetch('../orders/orders.html') // Adjust path here to load from the "products" folder
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
                    localStorage.setItem('orderLoaded', 'true');
                    localStorage.removeItem('dashboardLoaded'); // Optional: Reset dashboardLoaded state
                    localStorage.removeItem('productLoaded');
                } else {
                    console.error('Element with id "dashboardbody" not found');
                }
            })
            .catch(error => {
                console.error('Error loading orders.html:', error);
            });
    }

    // Add event listener to buttonProduct
    const buttonProduct = document.getElementById('buttonorder');
    if (buttonProduct) {
        buttonProduct.addEventListener('click', ordersdisplay);
    } else {
        console.error('Button with id "buttonorder" not found');
    }

    // Check localStorage when the page loads to see if the product content should be displayed
    if (localStorage.getItem('productLoaded') === 'true') {
        console.log('Product content was previously loaded, loading it now...');
        // Automatically load the product content if it was previously loaded
        ordersdisplay();
    }
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
