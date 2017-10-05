<?php /* Template Name: Contacts */ get_header(); ?>

<div class="container-fluid" id="nav-header">
  <div class="container"><h1><?php the_title(); ?></h1></div>
</div>
  <div class="container-fluid" id="page">
  <div class="container">
        <div class="row">
          <div class="col-xs-10">
            <div class="container-fluid" id="page">
              <div class="container">
                  <div class="row">
                    <div class="col-xs-6">
                      <p>
                      <i class="fa fa-map-marker" aria-hidden="true"></i>  <?php the_field('adress'); ?></p>
                      </p>
                      <p>
                        <i class="fa fa-phone-square" aria-hidden="true"></i>  <?php the_field('phone'); ?>
                      </p>
                      <p>
                        <i class="fa fa-inbox" aria-hidden="true"></i>  <?php the_field('email'); ?>
                      </p>
                      <p><i class="fa fa-clock-o" aria-hidden="true"></i>  <?php the_field('call_answer'); ?></p>
                      <p><i class="fa fa-clock-o" aria-hidden="true"></i>  <?php the_field('work_time'); ?></p>
                    </div>
                    <div class="col-xs-6"></div>
                  </div>
              </div>
            </div>
          </div>
          <div class="col-xs-2">
            <?php get_sidebar(); ?>
          </div>
        </div>
    </div>
  </div>
  <?php get_template_part('relative_single_form'); ?>
<?php get_footer(); ?>
