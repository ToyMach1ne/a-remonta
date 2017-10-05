<?php /* Template Name: Portfolio */ get_header(); ?>

  <div class="container-fluid" id="nav-header">
    <div class="container">
        <h1><?php the_title(); ?></h1>
    </div>
  </div>
  <div class="container-fluid" id="page">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <div class="col-xs-9">
                    <?php if (have_posts()): while (have_posts()) : the_post(); ?>
                      <?php the_content(); ?>
                      <?php endwhile; endif; ?>
                        <div class="btn btn-orange tcformpop-open1" type="button">
                          <i class="fa fa-chevron-right"></i>
                          <a href="#">Оставить заявку на<br> просмотр ремонтов</a>
                        </div>
                    </div>
                </div>
            </div><!-- row -->
            <div id="fancygallery-1" class="fg-panel">
             <div class="fg-navigation radykal-clearfix"></div>

              <div class="fg-menu-selection radykal-clearfix ">
                <div>
                    <a href="http://a-remonta.spb.ru/portfolio/0 " class="fg-theme-black fg-selected ">1</a>
                </div>
                <div>
                    <a href="http://a-remonta.spb.ru/portfolio/1 " class="fg-theme-black ">2</a>
                </div>
                <div>
                    <a href="http://a-remonta.spb.ru/portfolio/2 " class="fg-theme-black ">3</a>
                </div>
                <div>
                    <a href="http://a-remonta.spb.ru/portfolio/3 " class="fg-theme-black ">4</a>
                </div>
                <div>
                    <a href="http://a-remonta.spb.ru/portfolio/4 " class="fg-theme-black ">5</a>
                </div>
                <div>
                    <a href="http://a-remonta.spb.ru/portfolio/5 " class="fg-theme-black ">6</a>
                </div>
                <div>
                    <a href="http://a-remonta.spb.ru/portfolio/6 " class="fg-theme-black ">7</a>
                </div>
                <div>
                    <a href="http://a-remonta.spb.ru/portfolio/7 " class="fg-theme-black ">8</a>
                </div>
                <div>
                    <a href="http://a-remonta.spb.ru/portfolio/8 " class="fg-theme-black ">9</a>
                </div>
                <div>
                    <a href="http://a-remonta.spb.ru/portfolio/9 " class="fg-theme-black ">10</a>
                </div>
                <div>
                    <a href="http://a-remonta.spb.ru/portfolio/10 " class="fg-theme-black ">11</a>
                </div>
                <div>
                    <a href="http://a-remonta.spb.ru/portfolio/11 " class="fg-theme-black ">12</a>
                </div>
                <div>
                    <a href="http://a-remonta.spb.ru/portfolio/12 " class="fg-theme-black ">13</a>
                </div>
              </div>
              <p class="fg-album-description"></p>

            <div class="fg-thumbHolder radykal-clearfix ">

              <div class="fg-listItem">
                  <div class="fg-wrapp">
                    <div class="fg-thumbnail-container">
                      <img class="fg-thumb" src="<?php echo get_template_directory_uri(); ?>/img/portfolio_1.jpg" alt="">
                    </div>
                    <div class="fg-title fg-title-outside"></div>
                  </div>
                  <img src="<?php echo get_template_directory_uri(); ?>/img/shadow1.png " class="fg-shadow ">
              </div>

                <div class="fg-listItem ">
                  <div class="fg-wrapp">
                    <div class="fg-thumbnail-container">
                    <img class="fg-thumb " src="<?php echo get_template_directory_uri(); ?>/img/portfolio_2.jpg" alt="">
                    </div>
                    <div class="fg-title fg-title-outside"></div>
                  </div>
                  <img src="<?php echo get_template_directory_uri(); ?>/img/shadow1.png " class="fg-shadow ">
                </div>

                <div class="fg-listItem">
                  <div class="fg-wrapp">
                    <div class="fg-thumbnail-container">
                    <img class="fg-thumb" src="<?php echo get_template_directory_uri(); ?>/img/portfolio_3.jpg" alt="">
                    </div>
                    <div class="fg-title fg-title-outside"></div>
                  </div>
                  <img src="<?php echo get_template_directory_uri(); ?>/img/shadow1.png " class="fg-shadow ">
                </div>

                <div class="fg-listItem">
                  <div class="fg-wrapp">
                    <div class="fg-thumbnail-container">
                    <img class="fg-thumb" src="<?php echo get_template_directory_uri(); ?>/img/portfolio_4.jpg" alt="">
                    </div>
                    <div class="fg-title fg-title-outside"></div>
                  </div>
                  <img src="<?php echo get_template_directory_uri(); ?>/img/shadow1.png " class="fg-shadow ">
                </div>

                <div class="fg-listItem">
                  <div class="fg-wrapp">
                    <div class="fg-thumbnail-container">
                    <img class="fg-thumb" src="<?php echo get_template_directory_uri(); ?>/img/portfolio_5.jpg" alt="">
                    </div>
                    <div class="fg-title fg-title-outside "></div>
                  </div>
                  <img src="<?php echo get_template_directory_uri(); ?>/img/shadow1.png " class="fg-shadow ">
                </div>

                <div class="fg-listItem">
                  <div class="fg-wrapp">
                    <div class="fg-thumbnail-container">
                    <img class="fg-thumb" src="<?php echo get_template_directory_uri(); ?>/img/portfolio_6.jpg" alt="">
                    </div>
                    <div class="fg-title fg-title-outside"></div>
                  </div>
                  <img src="<?php echo get_template_directory_uri(); ?>/img/shadow1.png " class="fg-shadow ">
                </div>

                <div class="fg-listItem">
                  <div class="fg-wrapp">
                    <div class="fg-thumbnail-container">
                    <img class="fg-thumb" src="<?php echo get_template_directory_uri(); ?>/img/portfolio_7.jpg" alt="">
                    </div>
                    <div class="fg-title fg-title-outsid "></div>
                  </div>
                  <img src="<?php echo get_template_directory_uri(); ?>/img/shadow1.png " class="fg-shadow ">
                </div>

                <div class="fg-listItem">
                  <div class="fg-wrapp">
                    <div class="fg-thumbnail-container">
                    <img class="fg-thumb " src="<?php echo get_template_directory_uri(); ?>/img/portfolio_8.jpg" alt="">
                    </div>
                    <div class="fg-title fg-title-outside"></div>
                  </div>
                  <img src="<?php echo get_template_directory_uri(); ?>/img/shadow1.png " class="fg-shadow ">
                </div>

                <div class="fg-listItem">
                  <div class="fg-wrapp">
                    <div class="fg-thumbnail-container">
                    <img class="fg-thumb" src="<?php echo get_template_directory_uri(); ?>/img/portfolio_9.jpg" alt="">
                    </div>
                    <div class="fg-title fg-title-outside"></div>
                  </div>
                  <img src="<?php echo get_template_directory_uri(); ?>/img/shadow1.png " class="fg-shadow ">
                </div>

                <div class="fg-listItem">
                  <div class="fg-wrapp">
                    <div class="fg-thumbnail-container">
                    <img class="fg-thumb " src="<?php echo get_template_directory_uri(); ?>/img/portfolio.jpg" alt="">
                    </div>
                    <div class="fg-title fg-title-outside"></div>
                  </div>
                  <img src="<?php echo get_template_directory_uri(); ?>/img/shadow1.png " class="fg-shadow ">
                </div>

             </div><!-- fg-thumbHolder -->
           </div><!-- fancygallery-1 -->
        </div>
    </div>

 <?php get_template_part('relative_single_form'); ?>
 <?php get_footer(); ?>
