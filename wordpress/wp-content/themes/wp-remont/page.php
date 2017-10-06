<?php get_header(); ?>

  <?php if (have_posts()): while (have_posts()) : the_post(); ?>
    <div class="container-fluid" id="nav-header">
    <div class="container">
        <h1><?php the_title(); ?></h1>
    </div>
  </div>
    <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <div class="container-fluid" id="page">
      <div class="container">
        <div class="row">
          <div class="col-md-9">
            <?php the_content(); ?>
          </div>
          <div class="col-md-3">
            <?php get_sidebar(); ?>
          </div>
      </div>
    </div>
  </div>
  </article>
  <?php endwhile; endif; ?>



<?php get_footer(); ?>
