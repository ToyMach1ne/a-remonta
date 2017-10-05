<?php get_header(); ?>

  <?php if (have_posts()): while (have_posts()) : the_post(); ?>
    <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
      <div class="container-fluid" id="nav-header">
        <div class="container"><h1><?php the_title(); ?></h1></div>
      </div>
      <div class="container-fluid" id="page">
        <div class="container">
          <div class="row">
            <div class="col-xs-10">
                <?php the_content(); ?>
            </div><!-- col-xs-10 -->

            <div class="col-xs-2">
              <?php get_sidebar(); ?>
            </div><!-- col-xs-2 -->

          </div><!-- row -->
        </div>
      </div><!-- page -->
      <?php get_template_part('relative_single_form'); ?>
    </article>
  <?php endwhile; endif; ?>

<?php get_footer(); ?>
