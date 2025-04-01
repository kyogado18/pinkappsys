document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("#buttondashboard, #nav-dashboard");
    const item3 = document.getElementById("item-3");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            loadDashboard();
        });
    });

    function loadDashboard() {
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
                item3.style.display = "grid";

                setTimeout(loadCharts, 100);
            })
            .catch(error => console.error("Error loading the content:", error));
    }

    function loadCharts() {
        ["barchart", "doughnut"].forEach(chartId => {
            const canvas = document.getElementById(chartId);
            if (canvas) {
                const ctx = canvas.getContext('2d');
                new Chart(ctx, {
                    type: chartId === "barchart" ? 'bar' : 'doughnut',
                    data: {
                        labels: [
                            'Black and Yellow Gaming Sports Jersey',
                            'Black and Red Football Jersey',
                            'Black, Red, and White Stripe Basketball Jersey',
                            'Golden State Warriors Style Jersey'
                        ],
                        datasets: [{
                            label: 'Sales performance over month',
                            data: [12, 19, 3, 5],
                            borderWidth: 1,
                            backgroundColor: [
                                'rgba(237, 224, 0, 1)',
                                'rgba(255, 106, 13, 1)',
                                'rgba(149, 6, 6, 1)',
                                'rgba(42, 64, 229, 1)'
                            ]
                        }]
                    },
                    options: {
                        scales: {
                            y: { beginAtZero: true }
                        }
                    }
                });
            } else {
                console.error(`Canvas element '${chartId}' not found!`);
            }
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const buttonOrder = document.querySelectorAll("#buttonproduct, #nav-products");
    const item3 = document.getElementById("item-3");

    buttonOrder.forEach(button => {
        button.addEventListener("click", function () {
            loadproducts()
        })
    })
    function loadproducts(){
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
                item3.style.display = "grid";
                optionitem()
            })
            .catch(error => console.error("Error loading the content:", error));
    }
    function optionitem(){
        const additem = document.querySelector(".addbutton")
        const deleteitem = document.querySelector(".deletebutton");
        const edititem = document.querySelectorAll("#editbutton");

        const add = document.querySelector(".additem");
        const close1 = document.querySelector(".reject button");

        const edit = document.querySelector(".edititem");
        const close2 = document.querySelector(".reject2 button");

        const delete2 = document.querySelector(".deleteitem");
        const close3 = document.querySelector(".reject3 button");

        const productcontainer =document.querySelector(".productcontainer");
        const item3 = document.querySelector(".items-3");
        const item4 = document.querySelector(".items-3 img");

        additem.addEventListener("click", function () {
            add.style.display = "grid";
            productcontainer.style.filter="blur(10px)"
        })

        close1.addEventListener("click", function () {
            add.style.display = "none";
            productcontainer.style.filter="blur(0)"
        })

        edititem.forEach(button => {
            button.addEventListener("click", function () {
                edit.style.display = "grid";
                productcontainer.style.filter = "blur(10px)";
            });
        });

        close2.addEventListener("click", function () {
            edit.style.display = "none";
            productcontainer.style.filter="blur(0)"
        })

        deleteitem.addEventListener("click", function () {
            delete2.style.display = "grid";
            productcontainer.style.filter="blur(10px)"

        })

        close3.addEventListener("click", function () {
            delete2.style.display = "none";
            productcontainer.style.filter="blur(0)"
        })
    }
});



//
document.addEventListener("DOMContentLoaded", function () {
    const buttonOrder = document.querySelectorAll("#buttonorder,#nav-orders");
    const item3 = document.getElementById("item-3");

    buttonOrder.forEach(button => {
        button.addEventListener("click", function () {
            loadorders()
        })
    })
    function loadorders(){
        fetch("../Orders/orders.html")
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

                // Attach overlay events after loading content
                attachOverlayEvents();
            })
            .catch(error => console.error("Error loading the content:", error));
    }

    function attachOverlayEvents() {
        const orderButton = document.querySelector(".item-5-5");
        const closeButton = document.querySelector(".view button");
        const overlay = document.querySelector(".overlay");
        const body = document.querySelector(".testcontainer");
        if (!orderButton || !closeButton) {
            console.error("❌ Overlay elements not found!");
            return;
        }

        orderButton.addEventListener("click", function () {
            overlay.style.display = "grid";
            body.style.backgroundColor="gray"
            console.log("✅ Overlay opened");
        });

        closeButton.addEventListener("click", function () {
            overlay.style.display = "none";
            body.style.backgroundColor="white"
            console.log("✅ Overlay closed");
        });
    }
});


//
document.addEventListener("DOMContentLoaded", function () {
    const buttonOrder = document.querySelectorAll("#buttonreport,#nav-reports");
    const item3 = document.getElementById("item-3");

    buttonOrder.forEach(button => {
        button.addEventListener("click", function () {
            loadreports()
        })
    })
    function loadreports() {
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
document.addEventListener("DOMContentLoaded", function() {
    const logoutBtn = document.getElementById("buttonlog-out");

    if (logoutBtn) {
        logoutBtn.addEventListener("click", function() {
            // Clear user session
            localStorage.removeItem("userToken");

            // Redirect to login page
            window.location.href = "../../../../htmls/login.html";
        });
    } else {
        console.error("Logout button not found!");
    }
});

