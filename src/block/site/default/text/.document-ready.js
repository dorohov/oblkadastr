//$('.text-block ul').addClass('ul-site');
$('.text__block table').addClass('table table-bordered');
$('.text__block ol').addClass('is--counts'); 
$('.text__block ul').addClass('is--styled'); 
$('.text__block .table.table-bordered').wrap('<div class="table-responsive"></div>'); 
$('<caption><div class="caption-row"><div class="caption-icon"><svg class="icon-svg icon-swape" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbn7theme/img/svg/sprite.svg#swape"></use></svg></div><div class="caption-name">Листайте вправо</div></div></caption>').prependTo($('.text__block .table-responsive .table'));  
//$('.text-block img').parent().addClass('_tb__img'); 