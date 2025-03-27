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
    function productsdisplay() {
        console.log('Attempting to load PRODUCT.html...');

        fetch('../Products/Main/PRODUCT.html')
            .then(response => {
                if (!response.ok) {
                    console.error('Network response was not ok', response);
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(html => {
                console.log('PRODUCT.html loaded successfully');
                const dashboardBody = document.getElementById('dashboardbody');

                if (dashboardBody) {
                    dashboardBody.innerHTML = html; // Insert product HTML

                    // ✅ Add Event Listener AFTER inserting the new HTML
                    setupProductListeners();
                    setupProductEdit();
                    setupProductDelete();

                    // Save the state to localStorage
                    localStorage.setItem('productLoaded', 'true');
                } else {
                    console.error('Element with id "dashboardbody" not found');
                }
            })
            .catch(error => {
                console.error('Error loading PRODUCT.html:', error);
            });
    }

    function setupProductListeners() {
        const addButton = document.getElementById("addbutton");
        const overlay = document.getElementById("overlay");
        const closeOverlay = document.getElementById("reject");

        console.log("Checking if addButton exists:", addButton);

        if (!addButton) {
            console.error("❌ addButton not found. Maybe PRODUCT.html didn't load?");
            return;
        }

        addButton.addEventListener("click", function () {
            console.log("Add button clicked, showing overlay");
            overlay.style.display = "block";
        });

        closeOverlay.addEventListener("click", function () {
            overlay.style.display = "none";
        });

        overlay.addEventListener("click", function (event) {
            if (event.target === overlay) {
                overlay.style.display = "none";
            }
        });
    }
    //
    function setupProductEdit() {
        const edit = document.querySelectorAll(".btn-edit")
        const overlay1 = document.getElementById("overlay1")
        const close1 = document.getElementById("reject1")
        const productIDInput = document.querySelector(".inputbox1 input");
        const category = document.querySelector("#cat")
    
        console.log("Checking if addButton exists:", edit);
        productIDInput.readOnly = true;
        category.readOnly = true;

        edit.forEach(button => {
                button.addEventListener("click", function () {
                console.log("Edit button clicked:", this); // Logs the clicked button
                overlay1.style.display = "block"; // Show overlay when clicked
            });
        });

        overlay1.addEventListener("click", function (event) {
                if (event.target === overlay1) {
                overlay1.style.display = "none";
            }
        });

        close1.addEventListener("click" , function(){
            overlay1.style.display = "none"
        })
    }
    //
    function setupProductDelete() {
        const delete2 = document.querySelectorAll(".btn-delete")
        const overlay2 = document.getElementById("overlay2")
        const close2 = document.getElementById("reject2")
        const productIDInput2 = document.querySelector(".inputbox2 input");
        const category2 = document.querySelector("#cat2")

        console.log("Checking if addButton exists:", delete2);
        productIDInput2.readOnly = true;
        category2.readOnly = true;

        delete2.forEach(button => {
            button.addEventListener("click", function () {
                console.log("Edit button clicked:", this); // Logs the clicked button
                overlay2.style.display = "block"; // Show overlay when clicked
            });
        });

        overlay2.addEventListener("click", function (event) {
            if (event.target === overlay2) {
                overlay2.style.display = "none";
            }
        });

        close2.addEventListener("click" , function(){
            overlay2.style.display = "none"
        })
    }

    const buttonProduct = document.getElementById('buttonproduct');
    if (buttonProduct) {
        buttonProduct.addEventListener('click', productsdisplay);
    } else {
        console.error('Button with id "buttonproduct" not found');
    }

    // Auto-load if needed
    if (localStorage.getItem('productLoaded') === 'true') {
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

