<?php if (have_posts()): while (have_posts()) : the_post(); ?>

            <div id="post-<?php the_ID(); ?>" class="row looper">
                <div class="col-xs-4">
                  <?php if ( has_post_thumbnail()) { ?>
                    <img src="<?php echo the_post_thumbnail_url('medium'); ?>" title="<?php the_title(); ?>" alt="<?php the_title(); ?>" />
                  <?php } else { ?>
                    <img src="<?php echo catchFirstImage(); ?>" title="<?php the_title(); ?>" alt="<?php the_title(); ?>" />
                  <?php } ?>
                </div>
                <div class="col-xs-7">
                  <h4><strong><?php the_title(); ?></strong></h4>
                  <p><?php wpeExcerpt('wpeExcerpt40'); ?></p>
                  <div class="btn btn-primary">
                    <a class="gg00" href="<?php the_permalink(); ?>">Читать далее</a>
                  </div>
                </div>
            </div><!-- row -->

<?php endwhile; endif; ?>
