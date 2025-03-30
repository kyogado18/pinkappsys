document.addEventListener('DOMContentLoaded', function() {
        document.getElementById("profile").addEventListener("click", function () {
            document.getElementById("title").innerHTML = `
            <div>Profile</div>
            <img src="../images/logo.png" alt="">
        `;

            document.getElementById("change-container").innerHTML = `
    <div class="newDesigns-container">
            <div class="slideButton">
          <button class="customerProfile" id="customerProfile"><span>Profile</span></button>
          <button class="customerPassword" id="customerPassword"><span>Password and Security</span></button>
          <button class="customerLocation" id="customerLocation"><span>My Address</span></button>
        </div>
        <div>
            <div class="profcus" id="profcus">
                <div class="item-01">
                    <div>
                        <img class="user-image" src="../images/sampleimg.png" alt="" id="profile-pic">
                    </div>
                    <div class="insertImg">
                        <label class="upload-img-button" for="input-file">Update Image</label>
                        <input class="input" type="file" accept="image/jpg, image/png, image/jpeg" id="input-file">
                    </div>
                </div>
                <div class="item-02">
                    <div><span>Customer Username</span></div>
                    <span>Customer Full Name</span>
                </div>
            </div>
                    
                <div class="profileInfo">
                    <div class="item-0">
                        <h4>Personal Information</h4>
                    </div>
                        <div class="item-1">
                            <div><span class="Username">Username:</span></div>
                            <span class="CustomerUser">Username</span>  
                        </div>
                        
                        <div class="item-2">
                            <div><span class="userid">User ID:</span></div>
                            <span class="CustomerId">00001</span>
                        </div>

                        <div class="item-3">
                            <div><span class="firstname">First Name:</span></div>
                            <span class="CustomerFname">Eren</span>
                        </div>

                        <div class="item-4">
                            <div><span class="lastname">Last Name:</span></div>
                            <span class="CustomerLname">Yeager</span>
                        </div>

                        <div class="item-5">
                            <div><span class="emill">Email Address:</span></div>
                            <span class="CustomerEmail">@gmail.com</span>
                        </div>

                        <div class="item-6">
                            <div><span class="number">Contact Number:</span></div>
                            <span class="CustomerNum">1234567890</span>
                        </div>
                </div>

            <div class="profaddress">
                <div class="item-10">
                    <h4>Address</h4>
                </div>
                <div class="item-11">
                    <div><span>Country</span></div>
                    <span class="country">PH</span>
                </div>    

                <div class="item-12">
                    <div><span>City</span></div>
                    <span class="city">Tagum</span>
                </div>
                    
                <div class="item-13">
                    <div><span>Zip Code</span></div>
                    <span class="zipcode">8100</span>
                </div>
                    
                <div class="item-14">
                    <div><span>Baranggay</span></div>
                    <span class="baranggay">Apokon</span>
                </div> 
                    
                <div class="item-15">
                    <div><span>Purok</span></div>
                    <span class="purok">Prk.1</span>
                </div>
            </div>
            </div>

            <div class="changepass">
                <div class="item-20"><h2>Change Password</h2></div>
                <div class="item-21">
                    <input type="text" required="required">
                    <span>New Password</span>
                    <i></i>
                </div>

                <div class="item-22">
                    <input type="text" required="required">
                    <span>Re-enter new password</span>
                    <i></i>
                </div>

                <div class="item-23">
                    <input type="text" required="required">
                    <span>Current password</span>
                    <i></i>
                </div>

                <div class="item-24">
                    <button><span>Change Password</span></button>
                </div>
            </div>

            <div class="location">
                <div class="item-30">
                    <h2>Change Location</h2>
                </div>
                
                <div class="item-31">
                    <input type="text" required="required">
                    <span>Country</span>
                    <i></i>
                </div>

                <div class="item-32">
                    <input type="text" required="required">
                    <span>City</span>
                    <i></i>
                </div>

                <div class="item-33">
                    <input type="text" required="required">
                    <span>Zip Code</span>
                    <i></i>
                </div>

                <div class="item-34">
                    <input type="text" required="required">
                    <span>Baranggay</span>
                    <i></i>
                </div>

                <div class="item-35">
                    <input type="text" required="required">
                    <span>Purok</span>
                    <i></i>
                </div>

                <div class="item-36">
                    <button>
                        <span>Change Address</span>
                    </button>
                </div>

            </div>

      </div>
        `;

            // Add event listeners for the new buttons
            const profile = document.getElementById("customerProfile");
            const password = document.getElementById("customerPassword");
            const location = document.getElementById("customerLocation")

            const profcus = document.querySelector(".profcus");
            const profileInfo = document.querySelector(".profileInfo");
            const changepass = document.querySelector(".changepass");
            const locationSection = document.querySelector(".location");
            const profaddress = document.querySelector(".profaddress")

            function hideAllSections() {
                profcus.style.display = "none";
                profileInfo.style.display = "none";
                profaddress.style.display = "none";
                changepass.style.display = "none";
                locationSection.style.display = "none";
            }

            profile.addEventListener("click", function () {
                hideAllSections();
                profcus.style.display = "grid";
                profileInfo.style.display = "grid";
                profaddress.style.display = "grid"

            });

            password.addEventListener("click", function () {
                hideAllSections();
                changepass.style.display = "grid";
            });

            location.addEventListener("click", function () {
                hideAllSections();
                locationSection.style.display = "grid";
            });

            // Initialize with only the profile section visible
            hideAllSections();
            profcus.style.display = "grid";
            profaddress.style.display = "grid"
            profileInfo.style.display = "grid"

            // Image Upload Functionality
            let profilePic = document.getElementById("profile-pic");
            let inputFile = document.getElementById("input-file");

            inputFile.onchange = function (){
                profilePic.src = URL.createObjectURL(inputFile.files[0]);
            }
        });

        document.getElementById("home").addEventListener("click", function () {
            document.getElementById("title").innerHTML = `
            <div>Home</div>
            <img src="../images/logo.png" alt="">`;
            document.getElementById("change-container").innerHTML = `
    <div class="subTitle1">
      <div>Hot Designs🔥</div>
      <img src="../images/sampleimg.png" alt="">
    </div>
    <div class="hotDesigns">
      <div class="hotDesigns-container swiper">
        <div class="card-wrapper">
          <ul class="card-list swiper-wrapper">
            <li class="card-item swiper-slide">
              <a href="" class="card-link">
                <img src="../images/sampleimg.png" alt="" class="card-image">

                <h2 class="card-title">Black and Yellow Gaming Sports Jersey</h2>
              </a>
            </li>
            <li class="card-item swiper-slide">
              <a href="" class="card-link">
                <img src="../images/sampleimage2.jpg" alt="" class="card-image">

                <h2 class="card-title">Black and Red Football Jersey</h2>
              </a>
            </li>
            <li class="card-item swiper-slide">
              <a href="" class="card-link">
                <img src="../images/sampleimage3.jpg" alt="" class="card-image">

                <h2 class="card-title">Black, White, and Red Stripe Jersey</h2>
              </a>
            </li>
            <li class="card-item swiper-slide">
              <a href="" class="card-link">
                <img src="../images/sampleimage4.jpg" alt="" class="card-image">
                <h2 class="card-title">Golden State Warriors Style Jersey</h2>
              </a>
            </li>
          </ul>
          <div class="swiper-pagination"></div>
          <div class="swiper-slide-button swiper-button-prev"></div>
          <div class="swiper-slide-button swiper-button-next"></div>
        </div>
      </div>
      <a href="" class="explore-new-button">Explore New Designs</a>
    </div>
    <div class="subTitle2">
      <div></div>
      <div>New Designs</div>
    </div>
    <div class="newDesigns">
      <div class="newDesigns-container swiper">
        <div class="card-wrapper">
          <ul class="card-list swiper-wrapper">
            <li class="card-item swiper-slide">
              <a href="" class="card-link">
                <img src="../images/sampleimg.png" alt="" class="card-image">

                <h2 class="card-title">Black and Yellow Gaming Sports Jersey</h2>
              </a>
            </li>
            <li class="card-item swiper-slide">
              <a href="" class="card-link">
                <img src="../images/sampleimage2.jpg" alt="" class="card-image">

                <h2 class="card-title">Black and Red Football Jersey</h2>
              </a>
            </li>
            <li class="card-item swiper-slide">
              <a href="" class="card-link">
                <img src="../images/sampleimage3.jpg" alt="" class="card-image">

                <h2 class="card-title">Black, White, and Red Stripe Jersey</h2>
              </a>
            </li>
            <li class="card-item swiper-slide">
              <a href="" class="card-link">
                <img src="../images/sampleimage4.jpg" alt="" class="card-image">

                <h2 class="card-title">Golden State Warriors Style Jersey</h2>
              </a>
            </li>
          </ul>
          <div class="swiper-pagination"></div>
          <div class="swiper-slide-button swiper-button-prev"></div>
          <div class="swiper-slide-button swiper-button-next"></div>
        </div>
      </div>
      <div class="newDesigns-selection-container">
        <a class="add-design-button" id="add-design-button" href=""><img src="../images/add-design.png" alt="">Add A Design</a>
        <a href="" class="customize-design-button"><img src="../images/custom-design.png" alt="">Customize a Design</a>
      </div>
    </div>
  </div>`

            new Swiper('.card-wrapper', {
                loop: true,
                spaceBetween: 30,
                pagination: { el: '.swiper-pagination', clickable: true, dynamicBullets: true },
                navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
                breakpoints: { 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }
            });
        })
        document.getElementById("add-design-button").addEventListener("click", function(){
            event.preventDefault();
            adddesign()
        })
        document.querySelector(".card-link").addEventListener("click", function(){
            link.addEventListener("click", function (event) {
                cards()
                // Add event listener for the dynamically added back button
                document.getElementById("back-button").addEventListener("click", function () {
                    location.reload();
                });
            });
        })
        document.getElementById("order").addEventListener("click", function () {
            document.getElementById("title").innerHTML = `
        <div>Orders</div>
        <img src="../images/logo.png" alt="">`;
            document.getElementById("change-container").innerHTML = `
        <div class="completed-container">
        <div class="title-sort-container">
            <div class="title">Completed</div>
            <div class="sort">
                <select name="" id="">
                    <option value="asd">Order No.#</option>
                    <option value="asd">Description</option>
                    <option value="asd">Quantity</option>
                    <option value="asd">Payment Method</option>
                    <option value="asd">Amount Paid</option>
                </select>
                <button>Sort</button>
            </div>
        </div>
        <div class="completed-orders-container">
            <div class="completed-orders-column">
                <p class="column-order-no">Order No.#</p>
                <p class="column-order-image">Image</p>
                <p class="column-order-description">Description</p>
                <p class="column-order-quantity">Quantity</p>
                <p class="column-order-payment">Payment Method</p>
                <p class="column-order-amount">Total Amount Paid</p>
            </div>
            <hr>
            <div class="completed-orders">
                <div class="orders">
                    <div class="order-no">1</div>
                    <div class="order-image"></div>
                    <div class="order-description">Black and Yellow Gaming sports Jersey</div>
                    <div class="order-quantity">10</div>
                    <div class="order-payment">Self-Pickup</div>
                    <div class="order-amount">5000.00</div>
                </div>
                <div class="orders">
                    <div class="order-no">2</div>
                    <div class="order-image"></div>
                    <div class="order-description">Black and Yellow Gaming sports Jersey</div>
                    <div class="order-quantity">10</div>
                    <div class="order-payment">COD</div>
                    <div class="order-amount">5100.00</div>
                </div>
                <div class="orders">
                    <div class="order-no">3</div>
                    <div class="order-image"></div>
                    <div class="order-description">Black and Yellow Gaming sports Jersey</div>
                    <div class="order-quantity">10</div>
                    <div class="order-payment">COD</div>
                    <div class="order-amount">5100.00</div>
                </div>
                <div class="orders">
                    <div class="order-no">4</div>
                    <div class="order-image"></div>
                    <div class="order-description">Black and Yellow Gaming sports Jersey</div>
                    <div class="order-quantity">10</div>
                    <div class="order-payment">COD</div>
                    <div class="order-amount">5100.00</div>
                </div>
            </div>
        </div>
    </div>
    <div class="pending-container">
        <div class="title-sort-container">
            <div class="title">Pending</div>
            <div class="sort">
                <select name="">
                    <option value="asd">Order No.#</option>
                    <option value="asd">Description</option>
                    <option value="asd">Quantity</option>
                    <option value="asd">Payment Method</option>
                    <option value="asd">Amount Paid</option>
                </select>
                <button>Sort</button>
            </div>
        </div>
        <div class="pending-orders-container">
            <div class="pending-orders-column">
                <p class="column-order-no">Order No.#</p>
                <p class="column-order-image">Image</p>
                <p class="column-order-description">Description</p>
                <p class="column-order-quantity">Quantity</p>
                <p class="column-order-payment">Payment Method</p>
                <p class="column-order-amount">Amount to Pay</p>
            </div>
            <hr>
            <div class="pending-orders">
                <div class="orders">
                    <div class="order-no">5</div>
                    <div class="order-image"></div>
                    <div class="order-description">Black and Yellow Gaming sports Jersey</div>
                    <div class="order-quantity">10</div>
                    <div class="order-payment">Self-Pickup</div>
                    <div class="order-amount">5000.00</div>
                </div>
                <div class="orders">
                    <div class="order-no">6</div>
                    <div class="order-image"></div>
                    <div class="order-description">Black and Yellow Gaming sports Jersey</div>
                    <div class="order-quantity">10</div>
                    <div class="order-payment">COD</div>
                    <div class="order-amount">5100.00</div>
                </div>
                <div class="orders">
                    <div class="order-no">7</div>
                    <div class="order-image"></div>
                    <div class="order-description">Black and Yellow Gaming sports Jersey</div>
                    <div class="order-quantity">10</div>
                    <div class="order-payment">COD</div>
                    <div class="order-amount">5100.00</div>
                </div>
                <div class="orders">
                    <div class="order-no">8</div>
                    <div class="order-image"></div>
                    <div class="order-description">Black and Yellow Gaming sports Jersey</div>
                    <div class="order-quantity">10</div>
                    <div class="order-payment">COD</div>
                    <div class="order-amount">5100.00</div>
                </div>
            </div>
        </div>
    </div>`
        })

        document.getElementById("design").addEventListener("click", function(){
            document.getElementById("title").innerHTML=`
            <div>Design</div>
            <img src="../images/logo.png" alt="">`;
            document.getElementById("change-container").innerHTML=`
        <div class="main-container">
    <div class="category-container">
      <button>Hot</button>
      <button>New</button>
      <button>My Designs</button>
    </div>
    <div class="subTitle1">
      <div>Hot Designs🔥</div>
      <img src="../images/sampleimg.png" alt="">
    </div>
  </div>`
        })

    document.getElementById("add-design-button").addEventListener("click", function(){
        document.getElementById("title").innerHTML=`
        <div>Add Design</div>>`;
        document.getElementById("change-container").innerHTML=`
        <div class="completed-container">
        <div class="subTitle1">
            <div>Add A Design</div>
            <img src="../images/sampleimg.png" alt="">
        </div>
        <div class="add-a-design-container">
            <div class="import-design-container">
                <img src="../images/default-tshirt.jpg" alt="" id="default-tshirt">
                <label class="input-file-button" for="input-file"><p>Input A Design</p></label>
                <input class="input-file" type="file" accept="image/jpeg, image/png, image/jpg" id="input-file">
            </div>
            <div class="design-info-container">
                <div class="title-1">Sizes</div>
                <div class="sizes-available">
                    <div>XS</div>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
                <div class="title-2">Quantity</div>
                <div class="design-quantity-container">
                    <div class="title-2-1">
                        <div class="title-name">Name</div>
                        <div class="title-jersey">Jersey No.#</div>
                        <div class="title-size">Size</div>
                    </div>
                    <div class="design-info">
                        <div class="design-info-1">
                            <input type="text" placeholder="Enter Display Name">
                            <input type="text" placeholder="Enter Jersey No.">
                            <select name="sizes" id="">
                                <option value="XS">XS</option>
                            </select>
                        </div>
                        <div class="design-info-1">
                            <input type="text" placeholder="Enter Display Name">
                            <input type="text" placeholder="Enter Jersey No.">
                            <select name="sizes" id="">
                                <option value="XS">XS</option>
                            </select>
                        </div>
                        <div class="design-info-1">
                            <input type="text" placeholder="Enter Display Name">
                            <input type="text" placeholder="Enter Jersey No.">
                            <select name="sizes" id="">
                                <option value="XS">XS</option>
                            </select>
                        </div>
                        <button class="add-button">Add</button>

                        <div class="submit-cancel-container">
                            <button>Submit</button>
                            <button>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    })
    document.getElementById("add").addEventListener("click", function(){
        document.getElementById("title").innerHTML=`
        <div>Add Design</div>>`;
        document.getElementById("change-container").innerHTML=`
        <div class="completed-container">
        <div class="subTitle1">
            <div>Add A Design</div>
            <img src="../images/sampleimg.png" alt="">
        </div>
        <div class="add-a-design-container">
            <div class="import-design-container">
                <img src="../images/default-tshirt.jpg" alt="" id="default-tshirt">
                <label class="input-file-button" for="input-file"><p>Input A Design</p></label>
                <input class="input-file" type="file" accept="image/jpeg, image/png, image/jpg" id="input-file">
            </div>
            <div class="design-info-container">
                <div class="title-1">Sizes</div>
                <div class="sizes-available">
                    <div>XS</div>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
                <div class="title-2">Quantity</div>
                <div class="design-quantity-container">
                    <div class="title-2-1">
                        <div class="title-name">Name</div>
                        <div class="title-jersey">Jersey No.#</div>
                        <div class="title-size">Size</div>
                    </div>
                    <div class="design-info">
                        <div class="design-info-1">
                            <input type="text" placeholder="Enter Display Name">
                            <input type="text" placeholder="Enter Jersey No.">
                            <select name="sizes" id="">
                                <option value="XS">XS</option>
                            </select>
                        </div>
                        <div class="design-info-1">
                            <input type="text" placeholder="Enter Display Name">
                            <input type="text" placeholder="Enter Jersey No.">
                            <select name="sizes" id="">
                                <option value="XS">XS</option>
                            </select>
                        </div>
                        <div class="design-info-1">
                            <input type="text" placeholder="Enter Display Name">
                            <input type="text" placeholder="Enter Jersey No.">
                            <select name="sizes" id="">
                                <option value="XS">XS</option>
                            </select>
                        </div>
                        <button class="add-button">Add</button>

                        <div class="submit-cancel-container">
                            <button>Submit</button>
                            <button>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    })

    document.querySelectorAll(".card-link").forEach(function (card) {
        card.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior

            // Change the title
            document.getElementById("title").innerHTML = `
            <div>Product</div>
            <img src="../images/sampleimg.png" alt="">`;

            // Inject the new design container
            document.getElementById("change-container").innerHTML = `
            <div class="completed-container">
                <div class="add-a-design-container">
                    <div class="import-design-container">
                        <button class="back-button" id="back-button">
                            <span class="material-symbols-outlined">undo</span>
                        </button>
                        <img src="../images/sampleimg.png" alt="" id="default-tshirt">
                    </div>
                    <div class="design-info-container">
                        <div class="title-1">Sizes</div>
                        <div class="sizes-available">
                            <div>XS</div> <div>S</div> <div>M</div>
                            <div>L</div> <div>XL</div> <div>XXL</div>
                        </div>
                        <div class="title-2">Quantity</div>
                        <div class="design-quantity-container">
                            <div class="title-2-1">
                                <div class="title-name">Name</div>
                                <div class="title-jersey">Jersey No.#</div>
                                <div class="title-size">Size</div>
                            </div>
                            <div class="design-info">
                                <div class="design-info-1">
                                    <input type="text" placeholder="Enter Display Name">
                                    <input type="text" placeholder="Enter Jersey No.">
                                    <select name="sizes">
                                        <option value="XS">XS</option>
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                        <option value="XL">XL</option>
                                        <option value="XXL">XXL</option>
                                    </select>
                                    <input type="text" placeholder="Enter Display Name">
                                    <input type="text" placeholder="Enter Jersey No.">
                                    <select name="sizes">
                                        <option value="XS">XS</option>
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                        <option value="XL">XL</option>
                                        <option value="XXL">XXL</option>
                                    </select>
                                    <input type="text" placeholder="Enter Display Name">
                                    <input type="text" placeholder="Enter Jersey No.">
                                    <select name="sizes">
                                        <option value="XS">XS</option>
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                        <option value="XL">XL</option>
                                        <option value="XXL">XXL</option>
                                    </select>
                                </div>
                                <button class="add-button">Add</button>
                                <div class="submit-cancel-container">
                                    <button id="submit">Submit</button>
                                    <button id="cancel">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
    })
})
})