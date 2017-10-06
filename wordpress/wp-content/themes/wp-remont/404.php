<?php get_header(); ?>
  <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="error_page_title">
            <h1 class="ctitle"><?php _e( 'Page not found', 'wpeasy' ); ?></h1>
            <h2><a href="<?php echo home_url(); ?>"><?php _e( 'Return home?', 'wpeasy' ); ?></a></h2>
          </div>
        </div>
      </div>
    </div>
  </article>
<?php get_footer(); ?>
