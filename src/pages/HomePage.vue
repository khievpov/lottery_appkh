<template>
  <body>
    <header>
      <div class="container">
        <!-- Navigation bar -->
        <div class="logo-box">
          <ul>
            <li>
              <div class="logo">
                <a href="#"
                  ><img src="src/assets/khmerimage/logo-boy.webp" alt="Logo" width="50px"
                /></a>
              </div>
            </li>
            <li>
              <div class="lang">
                <img
                  src="src/assets/khmerimage/km-40x40cm.webp"
                  alt="Khmer 24"
                  height="25"
                  width="25"
                />
              </div>
            </li>
          </ul>
        </div>
        <div class="search-box">
          <ul>
            <li>
              <div class="select-Category">
                <select class="text2" name="" id="Category">
                  <option value="">All Category</option>
                  <option value="">Cars and Vehicles</option>
                  <option value="">Cars for Sale</option>
                  <option value="">Bicycles</option>
                  <option value="">Motorcycles for Sale</option>
                </select>
              </div>
            </li>

            <li style="width: 250px">
              <div class="search-text">
                <input
                  type="text"
                  class="text"
                  placeholder="What are you looking for..."
                  name="searchbar"
                />
                <!-- <button class="btn-searchbar"><i class="fa fa-search"></i></button> -->
              </div>
            </li>
          </ul>
        </div>
        <div class="register-box">
          <ul>
            <li>
              <div class="register-login">
                <a href="#" style="color: #016b9d !important">Login</a>
              </div>
            </li>

            <li>
              <div class="register-or" :aria-disabled="or">
                <a>Or</a>
              </div>
            </li>

            <li>
              <div class="register-2">
                <a href="#" style="color: #016b9d !important">Register </a>
              </div>
            </li>

            <li>
              <div class="btncamera">
                <button type="button" class="btn btn-k24-secondary km fn_20 dt-btn-height">
                  <i class="icon-camera icon_post_user"></i>
                  <span class="ms-1">Sell</span>
                </button>
              </div>
            </li>
          </ul>
        </div>
        <div style="clear: both"></div>
      </div>
    </header>
    <!-- end Navigation bar -->

    <section>
      <!-- Ad and paragraph -->
      <div class="container">
        <div class="h25">
          <div class="angkowat">
            <img src="src/assets/khmerimage/ai-ads.gif" width="970" height="250" />
          </div>
        </div>
      </div>

      <div class="container">
        <div class="title-welcome">
          <h1>Welcome to khmer Delevery by people.com, the biggest online marke in Cambodia.</h1>
        </div>
      </div>
      <!-- end Ad and paragraph -->

      <div class="container">
        <!-- List category -->
        <div class="categories_section b-radius">
          <div class="categories_list_div">
            <div class="categories_img">
              <img src="src/assets/khmerimage/s-cars.webp" alt="Cars and Vehicles" />
            </div>

            <div class="c_cate_parent_text">
              <p>Cars and Vehicles</p>
            </div>
          </div>

          <div class="categories_list_div">
            <div class="categories_img">
              <img src="src/assets/khmerimage/s-mobile-phones.webp" alt="Phone & Tablets" />
            </div>

            <div class="c_cate_parent_text">
              <p>Phones & Tablets</p>
            </div>
          </div>

          <div class="categories_list_div">
            <div class="categories_img">
              <img src="src/assets/khmerimage/s-computer.webp" alt="Computers & Accessories" />
            </div>

            <div class="c_cate_parent_text">
              <p>Computers & Accessories</p>
            </div>
          </div>

          <div class="categories_list_div">
            <div class="categories_img">
              <img
                src="src/assets/khmerimage/s-electronics-appliances.webp"
                alt="Electronic & Appliances"
              />
            </div>

            <div class="c_cate_parent_text">
              <p>Electronic & Appliances</p>
            </div>
          </div>

          <div class="categories_list_div">
            <div class="categories_img">
              <img src="src/assets/khmerimage/s-property-housing-rentals.webp" alt="House & Land" />
            </div>

            <div class="c_cate_parent_text">
              <p>House & Land</p>
            </div>
          </div>

          <div class="categories_list_div">
            <div class="categories_img">
              <img src="src/assets/khmerimage/s-jobs.webp" alt="Jobs" />
            </div>

            <div class="c_cate_parent_text">
              <p>Jobs</p>
            </div>
          </div>

          <div class="categories_list_div">
            <div class="categories_img">
              <img src="src/assets/khmerimage/s-services.webp" alt="Services" />
            </div>

            <div class="c_cate_parent_text">
              <p>Services</p>
            </div>
          </div>

          <div class="categories_list_div">
            <div class="categories_img">
              <img src="src/assets/khmerimage/s-fashion-beauty.webp" alt="Fashion & Beauty" />
            </div>

            <div class="c_cate_parent_text">
              <p>Fashion & Beauty</p>
            </div>
          </div>

          <div class="categories_list_div">
            <div class="categories_img">
              <img src="src/assets/khmerimage/s-furniture-decor.webp" alt="Furniture & Decor" />
            </div>

            <div class="c_cate_parent_text">
              <p>Furniture & Decor</p>
            </div>
          </div>

          <div class="categories_list_div">
            <div class="categories_img">
              <img
                src="src/assets/khmerimage/s-books-sports-hobbies.webp"
                alt="Books, Sports & hobbies"
              />
            </div>

            <div class="c_cate_parent_text">
              <p>Books, Sports & hobbies</p>
            </div>
          </div>

          <div class="categories_list_div">
            <div class="categories_img">
              <img src="src/assets/khmerimage/s-pets.webp" alt="Pets" />
            </div>

            <div class="c_cate_parent_text">
              <p>Pets</p>
            </div>
          </div>

          <div class="categories_list_div">
            <div class="categories_img">
              <img src="src/assets/khmerimage/s-foods.webp" alt="Foods" />
            </div>

            <div class="c_cate_parent_text">
              <p>Foods</p>
            </div>
          </div>
        </div>
      </div>
      <!-- end list category -->
      <div class="container">
        <!-- Product Top Ads-->
        <div class="list_product_categories">
          <div class="Ads_title">
            <p>Top Ads</p>
          </div>
          <!-- set screen color -->
          <div class="flex_following_ads">
            <!-- set height -->

            <article class="show_list_categories">
              <div class="list_sroll_height">
                <div class="add_list_post_icon">
                  <i class="icon-ellipsis-vertical"></i>
                </div>

                <!-- add icon two -->
                <div class="add_list_post_icon_two">
                  <div class="list_post_icon_set">
                    <i class="bx bx-images"></i>
                    <p>8</p>
                  </div>
                </div>
                <div class="img_list_main">
                  <img src="ssrc/assets/khmerimage/car-pus.webp" alt="product" />
                </div>

                <!-- add caption -->
                <div class="box_caption_title">
                  <p class="caption_text">Big promotion</p>
                  <div class="box_caption_more">
                    <div>Sales</div>
                    <div>black</div>
                    <div>write</div>
                    <div>blue</div>
                    <div>2026</div>
                  </div>
                  <p class="location_date">2d. WatPhnom, Phom Penh</p>
                  <p class="price_items">
                    <strong>$168,000</strong>
                  </p>
                </div>
                <div class="set_icon_heart">
                  <div class="set_icon_heart_two">
                    <i class="list_pad_icon_heart"></i>
                  </div>
                </div>
              </div>
            </article>
            <!-- add product ads more -->
            <article class="show_list_categories">
              <div class="list_sroll_height">
                <div class="add_list_post_icon">
                  <i class="icon-ellipsis-vertical"></i>
                </div>

                <!-- add icon two -->
                <div class="add_list_post_icon_two">
                  <div class="list_post_icon_set">
                    <i class="far fa-image"></i>
                    <p>2</p>
                  </div>
                </div>
                <div class="img_list_main">
                  <img src="src/assets/khmerimage/house-condon.webp" alt="Toyata Alphard 2017" />
                </div>

                <!-- add caption -->
                <div class="box_caption_title">
                  <p class="caption_text">Travel tour</p>
                  <div class="box_caption_more">
                    <div>Box</div>
                    <div>Korea</div>
                    <div>Vietams</div>
                    <div>2026</div>
                  </div>
                  <p class="location_date">3d. Takeo, Phom Penh</p>
                  <p class="price_items">
                    <strong>$1068,000</strong>
                  </p>
                </div>
                <div class="set_icon_heart">
                  <div class="set_icon_heart_two">
                    <i class="list_pad_icon_heart"></i>
                  </div>
                </div>
              </div>
            </article>
            <!-- add items three -->
            <article class="show_list_categories">
              <div class="list_sroll_height">
                <div class="add_list_post_icon">
                  <i class="icon-ellipsis-vertical"></i>
                </div>

                <!-- add icon two -->
                <div class="add_list_post_icon_two">
                  <div class="list_post_icon_set">
                    <i class="far fa-image"></i>
                    <p>2</p>
                  </div>
                </div>
                <div class="img_list_main">
                  <img src="src/assets/khmerimage/villa-khmer.webp" alt="Toyata Alphard 2017" />
                </div>

                <!-- add caption -->
                <div class="box_caption_title">
                  <p class="caption_text">Car For Sales</p>
                  <div class="box_caption_more">
                    <div>Sales</div>
                    <div>black</div>
                    <div>write</div>
                    <div>2026</div>
                  </div>
                  <p class="location_date">2d. Takmou, Phom Penh</p>
                  <p class="price_items">
                    <strong>$12268,000</strong>
                  </p>
                </div>
                <div class="set_icon_heart">
                  <div class="set_icon_heart_two">
                    <i class="list_pad_icon_heart"></i>
                  </div>
                </div>
              </div>
            </article>
            <!-- add items four -->
            <article class="show_list_categories">
              <div class="list_sroll_height">
                <div class="add_list_post_icon">
                  <i class="icon-ellipsis-vertical"></i>
                </div>

                <!-- add icon two -->
                <div class="add_list_post_icon_two">
                  <div class="list_post_icon_set">
                    <i class="far fa-image"></i>
                    <p>2</p>
                  </div>
                </div>
                <div class="img_list_main">
                  <img src="src/assets/s-mercedes-benz.webp" alt="Cars for sale" />
                </div>

                <!-- add caption -->
                <div class="box_caption_title">
                  <p class="caption_text">Car For Sales</p>
                  <div class="box_caption_more">
                    <div>Sales</div>
                    <div>black</div>
                    <div>write</div>
                    <div>2026</div>
                  </div>
                  <p class="location_date">2d. Takmou, Phom Penh</p>
                  <p class="price_items">
                    <strong>$12268,000</strong>
                  </p>
                </div>
                <div class="set_icon_heart">
                  <div class="set_icon_heart_two">
                    <i class="list_pad_icon_heart"></i>
                  </div>
                </div>
              </div>
            </article>
            <!-- add items five -->
            <article class="show_list_categories">
              <div class="list_sroll_height">
                <div class="add_list_post_icon">
                  <i class="icon-ellipsis-vertical"></i>
                </div>

                <!-- add icon two -->
                <div class="add_list_post_icon_two">
                  <div class="list_post_icon_set">
                    <i class="far fa-image"></i>
                    <p>2</p>
                  </div>
                </div>
                <div class="img_list_main">
                  <img src="src/assets/khmerimage/bedroom.webp" alt="Queen Villa" />
                </div>

                <!-- add caption -->
                <div class="box_caption_title">
                  <p class="caption_text">Queen Villa house</p>
                  <div class="box_caption_more">
                    <div>Sales</div>
                    <div>4Bedroom</div>
                    <div>5Bedrom</div>
                  </div>
                  <p class="location_date">16h. Chrouy Changya, Phom Penh</p>
                  <p class="price_items">
                    <strong>$619,000</strong>
                  </p>
                </div>
                <div class="set_icon_heart">
                  <div class="set_icon_heart_two">
                    <i class="list_pad_icon_heart"></i>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
        <!-- end Product Top Ads -->
      </div>
      <!-- add sroll button product -->
      <div class="container">
        <div class="sroll_button_list">
          <div class="title_sroll_text">
            <div class="sroll_main_list">
              <a class="btn_view_sroll">View All</a>
            </div>
          </div>
        </div>
      </div>
      <!-- end sroll button product -->
    </section>
    <!-- footer -->
    <footer>
      <div class="container"></div>
    </footer>
    <!-- end footer -->
  </body>
</template>

<script></script>
