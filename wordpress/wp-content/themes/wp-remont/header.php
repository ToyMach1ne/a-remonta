<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">

<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="format-detection" content="telephone=no">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php wp_title( '' ); ?><?php if ( wp_title( '', false ) ) { echo ' :'; } ?> <?php bloginfo( 'name' ); ?></title>
    <link href="<?php echo get_template_directory_uri(); ?>/favicon.png" rel="shortcut icon" type="image/x-icon">
    <!--[if lt IE 9]>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/selectivizr/1.0.2/selectivizr-min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js"></script>
  <![endif]-->
  <!-- css + javascript -->
  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <nav class="navigation navbar navbar-default" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <?php if ( !is_front_page() && !is_home() ){ ?>
                      <a class="navbar-brand" href="<?php echo home_url(); ?>">
                    <?php } ?>
                        <img src="<?php echo get_template_directory_uri(); ?>/img/logo.png" alt="<?php wp_title( '' ); ?>" title="<?php wp_title( '' ); ?>" class="logo-img">
                    <?php if ( !is_front_page() && !is_home() ){ ?>
                      </a>
                <?php } ?>
            </div>
            <div class="collapse navbar-collapse" id="example-navbar-collapse">
                <ul class="nav navbar-nav navbar-center">
                    <div class="center-block"><?php the_field('header_text', 35); ?></div>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <div id="phone"><?php the_field('header_phone', 35); ?>
                            <br><a href="#" class="popmake-callback pum-trigger recall_header">Перезвоните мне</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav><!-- navigation -->

    <nav class="navigation2 navbar navbar-default" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>
            <div class="collapse navbar-collapse" id="example-navbar-collapse">
                <?php wpeHeadNav(); ?>
            </div><!-- collapse -->
        </div>
    </nav><!-- navigation2 -->
