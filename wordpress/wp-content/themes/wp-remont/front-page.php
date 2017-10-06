<?php /* Template Name: Home Page */ get_header(); ?>

    <div class="container-fluid" id="header">
        <div class="container">
            <div class="row">
                <h1><?php the_field('fp_title'); ?></h1>
            </div>
            <div class="row">
                <div class="col-xs-6 prices">
                    <h3><?php the_field('yellow_text'); ?></h3>
                    <p><?php the_field('second_banner_text'); ?></p>
                </div>
                <div class="col-xs-3">
                </div>
                <div class="col-xs-3 right-side">
                    <a href="#" class="popmake-price pum-trigger"><?php the_field('call_smet'); ?></a>
                    <br>
                    <a href="#" class="popmake-price pum-trigger"><?php the_field('calc_order'); ?></a>
                    <br>
                    <a href="/tseny.htm"><?php the_field('text_price'); ?></a>
                    <br>
                </div>
            </div>
            <div class="center-block">
                <div class="row" id="offer">
                    <?php the_field('stock_text'); ?>
                    <div class="row">
                        <div class="btn btn-orange" type="button">
                            <i class="fa fa-chevron-right"></i>
                            <a href="#" class="popmake-offer pum-trigger">Узнать подробнее</a>
                        </div>
                    </div>
                    <br>
                </div>
            </div>
        </div>
    </div><!-- header -->

    <div class="container-fluid" id="about">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <?php if( have_rows('steps_about') ): while ( have_rows('steps_about') ) : the_row(); ?>
                      <i class="fa fa-check-square fa-lg"></i>&nbsp; <?php the_sub_field('step_item'); ?>
                      <br>
                  <?php endwhile; endif; ?>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <?php $image = get_field('mannger_img'); if( !empty($image) ): ?>
                      <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
                    <?php endif; ?>
                    <div><?php the_field('manager_text'); ?></div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12">
                    <h3>Наш подход:</h3>
                </div>
            </div>
            <div class="row benefits">
                <div class="col-xs-1"></div>
                <div class="col-xs-3">
                    <i class="fa fa-home fa-lg"></i>
                    <h5>Честная детальная<br> прозрачная цена</h5>
                    Прозрачная цена: исключая
                    <br>“внезапные” дополнительные работы.
                </div>
                <div class="col-xs-4">
                    <i class="fa fa-users fa-lg"></i>
                    <h5>Жесткая политика<br>
                    отдела кадров</h5> Статистика компании: из 10
                    <br>работников, устраивающихся в
                    <br>компанию принимаем только одного.
                    <br>Остальные 9 не профессионалы.
                </div>
                <div class="col-xs-3">
                    <i class="fa fa-percent fa-lg"></i>
                    <h5>Скидки на<br> материалы до 30%</h5> Наша компания предоставляет скидки на строительный материал всем клиентам без исключения.
                </div>
                <div class="col-lg-1 col-md-1 col-sm-1"></div>
            </div>
            <div class="row benefits">
                <div class="col-xs-1"></div>
                <div class="col-xs-3">
                    <i class="fa fa-trash fa-lg"></i>
                    <h5>Порядок и чистота</h5>
                    <br> По окончанию ремонта выполняется генеральная уборка на объекте профессиональной
                    <br>клининговой компанией
                </div>
                <div class="col-xs-4">
                    <i class="fa fa-trophy fa-lg""></i>
                    <h5>Гарантия 2 года</h5>
                    <br> К Вашим услугам сервисный отдел
                    <br>компании, который осуществляет
                    <br>гарантийное обслуживание объекта.
                </div>
                <div class="col-xs-3">
                    <i class="fa fa-clock-o fa-lg"></i>
                    <h5>Начало работ<br>в течение 48 часов</h5> Готовы приступить еще вчера! Быстрая и слаженная организация работ на объекте!
                </div>
                <div class="col-xs-1"></div>
            </div>
            <div class="row benefits">
                <div class="col-xs-1"></div>
                <div class="col-xs-3">
                    <i class="fa fa-map-marker fa-lg"></i>
                    <h5>Офисы более чем<br>в 10 городах России</h5> Офисы более чем в 10 городах России
                </div>
                <div class="col-xs-4">
                    <i class="fa fa-user fa-lg"></i>
                    <h5>НАЛИЧИЕ УЗКОГО<br>ПРОФИЛЯ СПЕЦИАЛИСТОВ</h5> Каждую отдельную работу выполняет работник своего направления т.е кафельщик укладывает плитку, электрик выполняет электромонтаж, а не наоборот.
                </div>
                <div class="col-xs-3">
                    <i class="fa fa-picture-o fa-lg"></i>
                    <h5>УСЛУГИ ДИЗАЙН<br>СТУДИИ</h5> Вы можете заказать дизайн-проект, но мы не навязываем Вам эту услугу (как делают конкуренты), т.к сможем сделать Вам отличный ремонт без дизайн-проекта.
                </div>
                <div class="col-xs-1"></div>
            </div>
        </div>
    </div><!-- about -->

    <?php get_template_part('relative_pages_form'); ?>

    <div id="attention" class="container-fluid">
        <div class="container">
            <div class="row">
                <div class="col-xs-3">
                     <?php $image2 = get_field('engeneer_img'); if( !empty($image2) ): ?>
                      <img src="<?php echo $image2['url']; ?>" alt="<?php echo $image2['alt']; ?>" />
                     <?php endif; ?>
                </div>
                <div class="col-xs-6">
                    <div class="quote">
                        <?php the_field('eng_quote'); ?>
                        <div class="engenner_tech"><?php the_field('eng_title'); ?></div>
                    </div>
                </div>
                <div class="col-xs-3"></div>
            </div>
            <div class="row">
                <div class="col-xs-10">
                    <div class="quote2"><?php the_field('eng_descr'); ?></div>
                </div>
                <div class="col-xs-2"></div>
            </div>
        </div>
    </div><!-- attention -->

    <div id="portfolio" class="container-fluid">
        <div class="container">
            <div class="row">
                <h3>Выполненные проекты</h3>
            </div>
            <?php if( have_rows('gallery_block') ): while ( have_rows('gallery_block') ) : the_row();
            // vars
            $image_big = get_sub_field('big_img');
            $url = $image_big['url']; ?>
            <div class="row">
                <div class="col-xs-7">
                    <a href="<?php echo $url; ?>" class="fancybox" rel="lightbox">
                        <img src="<?php echo $image_big['url']; ?>" alt="<?php echo $image_big['alt'] ?>" / class="img-responsive">
                    </a>
                </div>
                <div class="col-xs-5 ddsc">
                    <h4><?php the_sub_field('apps_title'); ?></h4>
                    <p>
                    <?php if( have_rows('decscr_steps') ): while ( have_rows('decscr_steps') ) : the_row(); ?>
                      <?php the_sub_field('descr_options_item'); ?>
                    <?php endwhile; endif; ?>
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-7 smsrc">
                    <?php if( have_rows('small_images') ): while ( have_rows('small_images') ) : the_row();
                    // vars
                    $image_small = get_sub_field('img_small_item');
                    $url_small = $image_small['url']; ?>
                      <a href="<?php echo $url_small; ?>" class="fancybox" rel="lightbox">
                        <img src="<?php echo $image_small['url']; ?>" alt="<?php echo $image_small['alt'] ?>" / class="img-responsive-small">
                      </a>
                    <?php endwhile; endif; ?>
                </div>
                <div class="col-xs-5 ddsc">
                    <a class="remont-btn popmake-price pum-trigger" href="#"></a>
                </div>
            </div>
            <?php endwhile; endif; ?>
            <!-- -->

        </div>
    </div><!-- portfolio -->

    <div class="container-fluid calc">
        <div class="container cost-and-duration">
            <div class="wrap">
                <p class="title">Узнайте стоимость и срок ремонта</p>
                <div class="building-area">
                    <p class="subtitle">Выберите площадь вашего объекта</p>
                    <table>
                        <tbody>
                            <tr>
                            <?php if( have_rows('apps_area') ): while ( have_rows('apps_area') ) : the_row(); ?>
                                <td>
                                    <div class="area">
                                        <div class="icon_active">
                                            <i class="fa fa-check-circle-o"></i>
                                            <br>
                                            <br>
                                        </div>
                                        <p class="area-title"><?php the_sub_field('area_app_item'); ?></p>
                                    </div>
                                </td>
                                <?php endwhile; endif; ?>
                            </tr>
                        </tbody>
                    </table>
                    <div href="javascript:void(0);" class="next-block btn btn-lg btn-orange" type="button"><i class="fa fa-chevron-right"></i> Далее</div>
                </div>
                <div class="type-of-repair">
                    <p class="subtitle">Выберите вид ремонта</p>
                    <table>
                        <tbody>
                            <tr>
                            <?php if( have_rows('repair_type') ): while ( have_rows('repair_type') ) : the_row(); ?>
                                <td>
                                    <div class="area">
                                        <div class="icon_active">
                                            <i class="fa fa-check-circle-o"></i>
                                            <br>
                                        </div>
                                        <p class="area-title"><?php the_sub_field('repair_type_item'); ?></p>
                                    </div>
                                </td>
                                <?php endwhile; endif; ?>
                            </tr>
                        </tbody>
                    </table>
                    <button class="tcformpop-open1 btn btn-lg btn-orange" type="submit" rel="howto"><i class="fa fa-chevron-right"></i> Далее</button>
                </div>
            </div>
            <div class="row">
                <h3>Ознакомьтесь с портфолио:</h3>
                <h4><?php the_field('portfolio_block_text'); ?></h4>
                <?php if( have_rows('portfolio_items') ): while ( have_rows('portfolio_items') ) : the_row(); ?>
                <div class="col-xs-4">
                    <div class="flip-container">
                        <div class="flipper">
                            <a href="/portfolio.htm">
                                <div class="block front">
                                    <div class="bg_block"></div>
                                    <div class="desc-line">
                                        <div><?php the_sub_field('port_title'); ?></div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <?php endwhile; endif; ?>
            </div>
        </div>
    </div><!-- calc -->

    <div class="container-fluid" id="steps">
        <div class="container">
            <div class="col-xs-12">
                <h3>Этапы работы с клиентом:</h3>
            </div>
            <div class="row benefits">
            <?php if( have_rows('working_with_client') ): while ( have_rows('working_with_client') ) : the_row(); ?>
                <div class="col-xs-2">
                    <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x "></i>
                  <?php the_sub_field('work_favicon'); ?>
                </span>
                    <h5><?php the_sub_field('work_title'); ?></h5>
                    <br>
                </div>
                <div class="col-xs-1">
                    <i class="fa fa-arrow-right fa-stack-2x"></i>
                </div>
                <?php endwhile; endif; ?>
            </div>

            <div class="row benefits">
            <?php if( have_rows('working_with_client_second') ): while ( have_rows('working_with_client_second') ) : the_row(); ?>
                <div class="col-xs-3">
                    <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x "></i>
                  <?php the_sub_field('work_favicon_second'); ?>
                </span>
                    <h5><?php the_sub_field('work_title_second'); ?></h5>
                    <br>
                </div>
                <div class="col-xs-1">
                    <i class="fa fa-arrow-right fa-stack-2x"></i>
                </div>
                <?php endwhile; endif; ?>
            </div>
            <div class="col-xs-12">
                <div class="btn btn-orange" type="button">
                  <i class="fa fa-chevron-right"></i>
                  <a href="#" class="popmake-callback pum-trigger">Получить консультацию специалиста</a>
                </div>
            </div>
        </div>
    </div><!-- steps -->

    <div id="map1"></div>

    <div class="cat contacts" id="contacts">
        <div class="container">
            <div class="col-xs-7">
            </div>
            <div class="col-xs-5">
                <div class="row">
                    <div class="info_">
                        <div>Контактная информация:</div>
                        <?php the_field('contact_block_footer'); ?>
                    </div>
                </div>
            </div>
            <div class="col-xs-3">
            </div>
        </div>
    </div><!-- contacts -->

    <?php get_footer(); ?>
