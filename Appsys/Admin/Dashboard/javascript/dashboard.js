document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("buttondashboard").addEventListener("click", function () {
        fetch("../dashboard/dashboarddisplay.html")
            .then((res) => res.text())
            .then((html) => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, "text/html");
                const dashboardContent = doc.querySelector(".dashboardcontainer");

                const content = document.getElementById("content");
                content.innerHTML = "";
                content.appendChild(dashboardContent);

                // Load charts after DOM is updated
                loadCharts();
            })
            .catch((err) => console.error("Failed to load dashboard content:", err));
    });

    function loadCharts() {
        const barchart = document.getElementById("barchart");
        const doughnut = document.getElementById("doughnut");

        if (barchart) {
            new Chart(barchart.getContext("2d"), {
                type: "bar",
                data: {
                    labels: ['Product A', 'Product B', 'Product C'],
                    datasets: [{
                        label: 'Sales',
                        data: [12, 19, 3],
                        backgroundColor: ['red', 'blue', 'green']
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: { beginAtZero: true }
                    }
                }
            });
        }

        if (doughnut) {
            new Chart(doughnut.getContext("2d"), {
                type: "doughnut",
                data: {
                    labels: ['Red', 'Blue', 'Green'],
                    datasets: [{
                        label: 'Sales',
                        data: [10, 20, 30],
                        backgroundColor: ['red', 'blue', 'green']
                    }]
                },
                options: {
                    responsive: true
                }
            });
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("buttonproduct").addEventListener("click", function () {
        fetch("../products/products.html")
            .then((res) => res.text())
            .then((html) => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, "text/html");

                // Check if the content is loaded properly
                console.log(doc);

                const dashboardContent = doc.querySelector(".productcontainer");

                if (dashboardContent) {
                    const content = document.getElementById("content");
                    content.innerHTML = "";
                    content.appendChild(dashboardContent);
                    optionitem();
                } else {
                    console.error("The element .productscontainer was not found.");
                }
            })
            .catch((err) => console.error("Failed to load dashboard content:", err));
    });
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
    document.getElementById("buttonorder").addEventListener("click", function () {
        fetch("../orders/orders.html")
            .then((res) => res.text())
            .then((html) => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, "text/html");

                // Check if the content is loaded properly
                console.log(doc);

                const dashboardContent = doc.querySelector(".ordercontainer");

                if (dashboardContent) {
                    const content = document.getElementById("content");
                    content.innerHTML = "";
                    content.appendChild(dashboardContent);
                    attachOverlayEvents()
                } else {
                    console.error("The element .productscontainer was not found.");
                }
            })
            .catch((err) => console.error("Failed to load dashboard content:", err));
    });

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
    document.getElementById("buttonreport").addEventListener("click", function () {
        fetch("../reports/reports.html")
            .then((res) => res.text())
            .then((html) => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, "text/html");

                console.log(doc);

                const dashboardContent = doc.querySelector(".reportcontainer");

                if (dashboardContent) {
                    const content = document.getElementById("content");
                    content.innerHTML = "";
                    content.appendChild(dashboardContent);
                } else {
                    console.error("The element .productscontainer was not found.");
                }
            })
            .catch((err) => console.error("Failed to load dashboard content:", err));
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

