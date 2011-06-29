<?php



function j2wp_print_output_page()
{
  echo '  <div class="j2wp_status_page">' . "\n";
  echo '   <br />' . "\n";
  echo '   <h3>Joomla To Wordpress Migration - Status Messages</h3>' . "\n";
  echo '   <br /><br />' . "\n";
  echo '  </div>' . "\n";

  ob_flush();
  ob_end_clean();

  return;
}


?>