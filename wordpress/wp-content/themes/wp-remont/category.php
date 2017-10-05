<?php get_header(); ?>
  <article>
    <div class="container-fluid" id="nav-header">
      <div class="container"><h1><?php the_category(', '); ?></h1></div>
    </div>
    <div class="container-fluid" id="page">
      <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <?php get_template_part('loop'); ?>
              <?php get_template_part('pagination'); ?>
            </div><!-- col-xs-12 -->
          </div>
        </div>
    </div><!-- page -->
      <?php get_template_part('relative_single_form'); ?>
  </article>
<?php get_footer(); ?>
