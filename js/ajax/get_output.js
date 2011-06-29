// set timeout limit
jQuery.ajaxSetup( {
                   timeout: 6000000
                  }
                );

// jQuery('#j2wp_cat_sel_form').ajaxForm(); 

jQuery('#j2wp_cat_sel_form').submit( 
  function() 
  { 
    var ajax_php_url = plugin_dir_url + 'joomla2wp-output.php';
    jQuery.ajax();
    // jQuery.getJSON( ajax_php_url, 'JSON executed' );
    jQuery.ajax( {
                   url: ajaxurl,
                   dataType: 'json',
                   data: 'ajax executed',
                   success: alert('ajax successful onSubmit: ' + ajaxurl)
                 });
    return true;
  } 
);


jQuery('#j2wp_cat_sel_form').ajaxError(function() {
  jQuery(this).text('Triggered ajaxError handler.');
  alert(thrownError);
});

jQuery('#j2wp_cat_sel_form').error(  function() {
  alert('Handler for .error() called.');
  alert(thrownError);
});


jQuery('#j2wp_cat_sel_cont_btn').click(

  function() 
  { 
    jQuery.ajax(); 
    jQuery.getJSON( ajaxurl, 'JSON executed' );
    testTimer = setInterval(jQuery.ajax(), 500);
    setTimeout("Test", 500000);
    jQuery.ajax( {
                   url: ajaxurl,
                   dataType: 'json',
                    data: 'ajax executed',
                    success: alert('ajax successful onClick: ' + ajaxurl)
                  });
  }

);