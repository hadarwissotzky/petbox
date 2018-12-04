jQuery(window).on('beforeunload', function(e) {
//    if(hasUnsaved()) {
//        return 'You have unsaved stuff. Are you sure to leave?';
  //  }
});

/*****************PreformJs******************/

jQuery(function(){

 jQuery('a.button.btn.align-right.preformshow').click(function(){
     jQuery('.preformbox').toggleClass('active');
 });  
  jQuery('.preformbox .detail-item-data').click(function(){
     var getid = jQuery(this).attr('data-action');
     var getvalue = jQuery(this).find('.value').text();
    jQuery('.woocommerce-billing-fields #'+getid+'').val(getvalue);
        if(getid=='billing_country')
             {
                var gettext = jQuery('select#'+getid+' option[value='+getvalue+']').text();
                jQuery('#s2id_billing_country #select2-chosen-1').text(''+gettext+'');
             }

  });
 
});


/*****************PreformJsend******************/


/*****************myaccount image issue******************/

jQuery(function(){
          if(jQuery('.acc_woo_bottom').length > 0)
 {
	var getimghref = jQuery('.acc_woo_bottom').attr('src').replace('https://dev6.sparkcm.com','http://139.59.3.57/vetpetbox2');
	jQuery('.acc_woo_bottom').attr('src',getimghref);
	var getimghref = jQuery('.acc_woo_top').attr('src').replace('https://dev6.sparkcm.com','http://139.59.3.57/vetpetbox2');
	jQuery('.acc_woo_top').attr('src',getimghref);
}
});

/*****************myaccount image issue end******************/

jQuery(window).load(function(){
          if(jQuery('.newcheckout').length > 0)
 {
	jQuery('.newcheckout').insertAfter('.woocommerce-MyAccount-content h2 + div');
 }
});


/*****************New account cat-dog selection******************/

jQuery(function(){

   jQuery('#post-3908 #field_2_1 select').on('change',function(){

            var gettypeval = jQuery(this).val();
            if(gettypeval == 'cat')
             {
                 setTimeout(function(){
                   var getsize = jQuery('#post-3908 #field_2_28 select').val();
                  changeleftdescription(gettypeval,getsize);
                 },500);
             }
             else
             {
                 setTimeout(function(){
                   var getsize = jQuery('#post-3908 #field_2_27 select').val();
                  changeleftdescription(gettypeval,getsize);
                 },500);
             }


 });

   jQuery('#post-3908 #field_2_27 select,#post-3908 #field_2_28 select').on('change',function(){
		
               var getsize = jQuery(this).val();
               setTimeout(function(){
                  var gettypeval = jQuery('#post-3908 #field_2_1 select').val();
                  changeleftdescription(gettypeval,getsize);
               },500);


   });

});


/*****************My account selection******************/

jQuery(function(){

  /*var gettypeval = jQuery.cookie('animal_name');
  var getsize = jQuery.cookie('animal_size');
   if(gettypeval!=null && getsize!=null)
{
 setTimeout(function(){
changeleftdescriptionxx(gettypeval,getsize);
 },2000);
}*/
	 
   jQuery('#post-50 #field_2_1 select').on('change',function(){
	
            var gettypeval = jQuery(this).val();
	     
            if(gettypeval == 'cat')
             {
                 setTimeout(function(){
                   var getsize = jQuery('#post-50 #field_2_28 select').val();
		  
                  changeleftdescription(gettypeval,getsize);
                 },500);
             }
             else
             {
                 setTimeout(function(){
                   var getsize = jQuery('#post-50 #field_2_27 select').val();
                  changeleftdescription(gettypeval,getsize);
                 },500);
             }


 });

   jQuery('#post-50 #field_2_27 select,#post-50 #field_2_28 select').on('change',function(){
		 
               var getsize = jQuery(this).val();
               setTimeout(function(){
                  var gettypeval = jQuery('#post-50 #field_2_1 select').val();
                  changeleftdescription(gettypeval,getsize);
               },500);


   });

});


function changeleftdescription(type,size)
{
  
var base_url = window.location.origin;
var host = window.location.host;
var pathArray = window.location.pathname.split( '/' );
//var homeurl = base_url+'/'+pathArray[1];
var homeurl = base_url;
		 
		if(type=='cat')
		{
			 if(size=='multiple')
			  {
			  var clink =  homeurl+'/product/multi-cat-subscription/';
			  }
			  else
			  {
			  var clink = homeurl+'/product/cat-subscription/';
			  }
		}
		else
		{
			 if(size=='petite')
			  {
			  var clink =  homeurl+'/product/petite-dog-subscription/';
			  }
			 else if(size=='small')
			  {
			  var clink = homeurl+'/product/small-dog-subscription/';
			  }
			 else if(size=='medium')
			  {
			  var clink = homeurl+'/product/medium-dog-subscription/';
			  }
			 else if(size=='large')
			  {
			  var clink = homeurl+'/product/large-dog-subscription/';
			  }
			  else
			  {
			  var clink = homeurl+'/product/giant-dog-subscription/';
			  }

		}
	  
jQuery('.setframe').html('');
jQuery('.setframe').hide();
jQuery(".setframe").load(""+clink+" #left-area");

setTimeout(function(){ 
        jQuery(".update-subscriptbutton").html('');
	jQuery(".update-subscriptbutton").remove();
	jQuery(".instruction").html();
	jQuery(".instruction").remove();
	/*jQuery(".select-sub").html('');
	jQuery('.setframe').append('<div class="select-sub"><h2>Selected Subscription</h2></div>');*/
	jQuery('.setframe').after('<div class="update-subscriptbutton"><div class="update-subscriptbutton"><a href="javascript:;">update Subscription</a></div><span class="instruction">Changes made by the 5th of the <br> month take effect the same month</span></div>');
 
jQuery(".setframe").show(); },2000);

}
 

/*****************New account cat-dog selection******************/

jQuery(function(){
   
   jQuery('#post-4631 #field_2_1 select').on('change',function(){
	 
            var gettypeval = jQuery(this).val();
            if(gettypeval == 'cat')
             {
                 setTimeout(function(){
                   var getsize = jQuery('#post-4631 #field_2_28 select').val();
                  changeleftdescriptionnew(gettypeval,getsize);
                 },500);
             }
             else
             {
                 setTimeout(function(){
                   var getsize = jQuery('#post-4631 #field_2_27 select').val();
                  changeleftdescriptionnew(gettypeval,getsize);
                 },500);
             }


 });

   jQuery('#post-4631 #field_2_27 select,#post-4631 #field_2_28 select').on('change',function(){
		 
               var getsize = jQuery(this).val();
               setTimeout(function(){
                  var gettypeval = jQuery('#post-4631 #field_2_1 select').val();
                  changeleftdescriptionnew(gettypeval,getsize);
               },500);


   });

});

/*****************My account selection******************/

jQuery(function(){

  /*var gettypeval = jQuery.cookie('animal_name');
  var getsize = jQuery.cookie('animal_size');
   if(gettypeval!=null && getsize!=null)
{
 setTimeout(function(){
changeleftdescriptionxx(gettypeval,getsize);
 },2000);
}*/
	 
 

   jQuery('#post-4631 #field_2_27 select,#post-4631 #field_2_28 select').on('change',function(){

               var getsize = jQuery(this).val();
               setTimeout(function(){
                  var gettypeval = jQuery('#post-4631 #field_2_1 select').val();
                  changeleftdescriptionnew(gettypeval,getsize);
               },500);


   });

});


function changeleftdescriptionnew(type,size)
{
 
var base_url = window.location.origin;
var host = window.location.host;
var pathArray = window.location.pathname.split( '/' );
//var homeurl = base_url+'/'+pathArray[1];
var homeurl = base_url;
		 
		if(type=='cat')
		{
			 if(size=='multiple')
			  {
			  var clink =  homeurl+'/product/multi-cat-subscription/';
			  }
			  else
			  {
			  var clink = homeurl+'/product/cat-subscription/';
			  }
		}
		else
		{
			 if(size=='petite')
			  {
			  var clink =  homeurl+'/product/petite-dog-subscription/';
			  }
			 else if(size=='small')
			  {
			  var clink = homeurl+'/product/small-dog-subscription/';
			  }
			 else if(size=='medium')
			  {
			  var clink = homeurl+'/product/medium-dog-subscription/';
			  }
			 else if(size=='large')
			  {
			  var clink = homeurl+'/product/large-dog-subscription/';
			  }
			  else
			  {
			  var clink = homeurl+'/product/giant-dog-subscription/';
			  }

		}
	
jQuery('.setframe').html('');
jQuery('.setframe').hide();
jQuery(".setframe").load(""+clink+" #left-area");

setTimeout(function(){ 
        jQuery(".update-subscriptbutton").html('');
	jQuery(".update-subscriptbutton").remove();
	jQuery(".instruction").html();
	jQuery(".instruction").remove();
	/*jQuery(".select-sub").html('');
	jQuery('.setframe').append('<div class="select-sub"><h2>Selected Subscription</h2></div>');*/
	jQuery('.setframe').after('<div class="update-subscriptbutton"><div class="update-subscriptbutton"><a href="javascript:;">update Subscription</a></div><span class="instruction">Changes made by the 5th of the <br> month take effect the same month</span></div>');
 

jQuery(".setframe").show(); },2000);

}
jQuery(function(){
	jQuery('.update-subscriptbutton a').live('click',function(){
	  jQuery('#gform_submit_button_2').click();
	});
});

/*****************New account cat-dog selection******************/

