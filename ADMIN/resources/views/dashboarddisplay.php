<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="http://localhost:3000/ADMIN/public/css/reports.css">

</head>
<body>
<div class="dashboardcontainer">
    <div class="recent"><h2>Recent Design</h2></div>


    <div class="slide-container swiper">
        <div class="slide-content">
            <div class="card-wrapper swiper-wrapper">
                <div class="card swiper-slide">
                    <div class="image-content">
                        <span class="overlay"></span>

                        <div class="card-image">
                            <img src="../../public/images/sampleimage2.jpg" alt="" class="card-img">
                        </div>
                    </div>

                    <div class="card-content">
                        <h2 class="name">Black And Yellow Jersey </h2> 
                    </div>
                </div>
                <div class="card swiper-slide">
                    <div class="image-content">
                        <span class="overlay"></span>

                        <div class="card-image">
                            <img src="../../public/images/sampleimage2.jpg" alt="" class="card-img">
                        </div>
                    </div>

                    <div class="card-content">
                        <h2 class="name">Black And Yellow Jersey </h2> 
                    </div>
                </div>
                <div class="card swiper-slide">
                    <div class="image-content">
                        <span class="overlay"></span>

                        <div class="card-image">
                            <img src="../../public/images/sampleimage2.jpg" alt="" class="card-img">
                        </div>
                    </div>

                    <div class="card-content">
                        <h2 class="name">Black And Yellow Jersey </h2> 
                    </div>
                </div>
                <div class="card swiper-slide">
                    <div class="image-content">
                        <span class="overlay"></span>

                        <div class="card-image">
                            <img src="../../public/images/sampleimage2.jpg" alt="" class="card-img">
                        </div>
                    </div>

                    <div class="card-content">
                        <h2 class="name">Black And Yellow Jersey </h2> 
                    </div>
                </div>
                <div class="card swiper-slide">
                    <div class="image-content">
                        <span class="overlay"></span>

                        <div class="card-image">
                            <img src="../../public/images/sampleimage2.jpg" alt="" class="card-img">
                        </div>
                    </div>

                    <div class="card-content">
                        <h2 class="name">Black And Yellow Jersey </h2> 
                    </div>
                </div>
                <div class="card swiper-slide">
                    <div class="image-content">
                        <span class="overlay"></span>

                        <div class="card-image">
                            <img src="../../public/images/sampleimage2.jpg" alt="" class="card-img">
                        </div>
                    </div>

                    <div class="card-content">
                        <h2 class="name">Black And Yellow Jersey </h2> 
                    </div>
                </div>
                <div class="card swiper-slide">
                    <div class="image-content">
                        <span class="overlay"></span>

                        <div class="card-image">
                            <img src="../../public/images/sampleimage2.jpg" alt="" class="card-img">
                        </div>
                    </div>

                    <div class="card-content">
                        <h2 class="name">Black And Yellow Jersey </h2> 
                    </div>
                </div>
                <div class="card swiper-slide">
                    <div class="image-content">
                        <span class="overlay"></span>

                        <div class="card-image">
                            <img src="../../public/images/sampleimage2.jpg" alt="" class="card-img">
                        </div>
                    </div>

                    <div class="card-content">
                        <h2 class="name">Black And Yellow Jersey </h2>    
                    </div>
                </div>
                <div class="card swiper-slide">
                    <div class="image-content">
                        <span class="overlay"></span>

                        <div class="card-image">
                            <img src="https://tinypic.host/images/2022/12/19/img_avatar.png" alt="" class="card-img">                            </div>
                    </div>

                    <div class="card-content">
                        <h2 class="name">Black And Yellow Jersey </h2>
                    </div>
                </div>
            </div>
        </div>

        <div class="swiper-button-next swiper-navBtn"></div>
        <div class="swiper-button-prev swiper-navBtn"></div>
        <div class="swiper-pagination"></div>
    </div>


    <div class="stats"><h2>Statistics</h2></div>
    <div class="item-02-2">
        <div class="totalproduct">
            <img src="../../public/images/cart.png">
            <h4>TOTAL PRODUCTS</h4>
            <h2>40</h2>
        </div>

        <div class="totalorder">
            <img src="../../public/images/clipboard.png">
            <h4>TOTAL ORDERS</h4>
            <h2>100</h2>
        </div>

        <div class="totalsale">
            <img src="../../public/images/wallet.png">
            <h4>TOTAL SALES</h4>
            <h2>100</h2>
        </div>
    </div>

    <div class="chart-container" id="chart-container">
        <div class="chart-title">Sales Performance Over Month</div>
        <div class="charts-container">
            <div class="chart">
                <canvas class="doughnut" id="doughnut" height="300" width="300"></canvas>
            </div>
        </div>
    </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.8/dist/chart.umd.min.js"></script>
<script src="../javascript/dashboard.js"></script>

</body>
</html>