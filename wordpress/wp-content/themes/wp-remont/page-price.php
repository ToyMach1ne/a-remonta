<?php /* Template Name: Price */ get_header(); ?>

<div class="container-fluid" id="nav-header">
  <div class="container"><h1><?php the_title(); ?></h1></div>
</div>
<div class="container-fluid" id="page">
  <div class="container">
        <div class="row">
          <div class="col-xs-10">
                    <?php if (have_posts()): while(have_posts()) : the_post(); ?>
                      <?php the_content(); ?>
                    <?php endwhile; endif; ?>

                    <?php get_template_part('relative_pages_form'); ?>
                    <?php the_field('under_relative_block'); ?>
          </div>
          <div class="col-xs-2">
            <?php get_sidebar(); ?>
          </div>
        </div>
    </div>
  </div>
<?php get_template_part('relative_single_form'); ?>
<?php get_footer(); ?>
