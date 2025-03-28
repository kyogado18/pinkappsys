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
    const item3 = document.getElementById("item-3");

    buttonOrder.addEventListener("click", function () {
        fetch("../products/products.html")
            .then(response => response.text())
            .then(data => {
                const tempDiv = document.createElement("div");
                tempDiv.innerHTML = data;
                const extractedContent = tempDiv.querySelector(".container");

                if (extractedContent) {
                    item3.innerHTML = "";
                    console.log("ahah")
                    while (extractedContent.firstChild) {
                        item3.appendChild(extractedContent.firstChild);
                    }
                } else {
                    item3.innerHTML = data;
                    console.log("se")
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
    const item3 = document.getElementById("item-3");

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
document.addEventListener("DOMContentLoaded", function () {
    const buttonOrder = document.getElementById("buttonreport");
    const item3 = document.getElementById("item-3");

    buttonOrder.addEventListener("click", function () {
        fetch("../reports/reports.html")
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

