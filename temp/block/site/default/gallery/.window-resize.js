(function(){
	if (screenJS.pc()){
		$(".catalog-item__cols.is--preview .catalog-item__preview").attr("data-fancybox", "catalog-preview");
		$(".gallery-panel__cols.is--one .gallery-panel__item").removeAttr("data-fancybox"); 
	} else {	
		$(".catalog-item__cols.is--preview .catalog-item__preview").removeAttr("data-fancybox"); 
		$(".gallery-panel__cols.is--one .gallery-panel__item").attr("data-fancybox", "catalog-preview");
	}	
})()