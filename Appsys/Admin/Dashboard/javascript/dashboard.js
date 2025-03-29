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
                item3.style.display = "grid";
                optionitem()
            })
            .catch(error => console.error("Error loading the content:", error));
    });
    function optionitem(){
        const additem = document.querySelector(".addbutton")
        const deleteitem = document.querySelector(".deletebutton");
        const edititem = document.querySelector(".editbutton");

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

        edititem.addEventListener("click", function () {
            edit.style.display = "grid";
            productcontainer.style.filter="blur(10px)"
        })

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
    const buttonOrder = document.getElementById("buttonorder");
    const item3 = document.getElementById("item-3");

    buttonOrder?.addEventListener("click", function () {
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

