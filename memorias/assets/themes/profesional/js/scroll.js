  $(document).ready(function() {
	var posit;
	var pos;
	var div= 'html';
	var fl=true;
	var amount = 6;//amount of pages
	$("#menu a").click(function () {
		fl=false;
		elementClick = $(this).attr("href");
  	destination = $(elementClick).offset().top;
		if ($.browser.webkit) {div='body'}
		$(div).animate( {scrollTop: destination}, 1000, function(){ fl=true });
		$("#menu a").removeClass('active')
		$(this).addClass('active')
		Cufon.refresh();
    return false;

  });
	
	var doc=0;
	//setInterval(SetActBut,150);
	
	function SetActBut(){
		new_doc=$(div).attr('scrollTop');
		if ((new_doc!=doc)&&(fl)){
			doc=new_doc;
			for (var i=1; i<=amount; i++) {
				elem=$('#menu .nav'+i+' a').attr("href");
				pos=$(elem).offset().top;
				if ((pos-doc-248)<=300) {
					$('#menu li').removeClass('menu_active');
					$('#menu .nav'+i).addClass('menu_active');
					Cufon.refresh();
				}
			}
		}
	}
  });
