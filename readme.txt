=== Joomla/Mambo To Wordpress Migrator ===
Contributors: christian_gnoth
Author Uri: http://it-gnoth.de
Plugin Uri: http://it-gnoth.de/wordpress/wordpress-plugins
Tags: joomla, mambo, wordpress, migrator, converter, import
Requires at least: 2.7
Tested up to: WP 3.1
Stable tag: 1.5.4

A plugin to migrate content from Joomla/Mambo to Wordpress.

== Description ==

This plugin migrates posts, static pages and users from Joomla or Mambo to Wordpress.

Tested with **Joomla 1.5** **Mambo 4.5.2** and **Wordpress 3.1**

The Wordpress Installation should be empty !!! No posts, pages or categories !!! Joomla and WP must be on the same MySQL Server !!!

If you want migrate the images too, copy them into the images folder of your wordpress installation and provide this directory in the plugin settings!!!

Go to the Plugin Admin Page and fill in the MySQL Connection Parameters !!!

You can choose under the WP Admin section on the Plugin Option Page if you want migrate all categories at once or select specific categories. 

Start the Migration with the button on the Plugin Panel.

After sucessfull migration you can press the "Change Urls" button to change the links in the content of the posts.  

features:

- migrates articles and static pages
- migrates user
- changes the urls in the posts and pages to point to the new destination
- changes the imgage urls to point to the new image location
- {mosimage} support

== Support ==

Please take a look at **[Support page](http://it-gnoth.de/projekte/wordpress/wp-support/)** 


== Installation ==

1.  extract plugin zip file and load up to your wp-content/plugin directory
2.  Activate Plugin in the Admin => Plugins Menu

== Frequently Asked Questions ==

= Can I have Joomla and WP on different MySQL Server? =

NO !!! They must be on the same MySQL Server.

= I am getting the following error: Warning: mysql_connect() [function.mysql-connect]: Can't connect to local MySQL server through socket '/usr/local/mysql-5.0/data/mysql.sock' =

Please check which MySQL server name your webhoster provides - it may be different then "localhost".

= What if the plugin stops working during URL change process? =

Reload the browser page. Normally the change of URL's works, but sometimes it do not return the generated output.

= How to migrate images ? =

You have to copy first the images from your Joomla installation to your wordpress installation. This is needed, so that wordpress can determine the correct MIME Type during the add_attachment process.

= The migrated content is incomplete or has line breaks in the sentences. =

Check your source content on the Joomla side for special characters and the Code Page you are using for your content. THey may cause this problem.

= Do I have to change the charset if I have latin1_swedish_ci in my Joomla/Mambo tables? =
If you have a table collation of latin1_swedish_ci use the codepage translation from latin1 to utf8

== Screenshots ==

1. This screen shot description corresponds to screenshot-1.(png|jpg|jpeg|gif). Note that the screenshot is taken from
the directory of the stable readme.txt, so in this case, `/tags/4.3/screenshot-1.png` (or jpg, jpeg, gif)
2. This is the second screen shot


== Translations ==
* German (de_DE)
* English (default)
* other must be translated

== Changelog ==

= 1.0.1 =
- output changed 

= 1.1.0 = 
- feature added: possibility to choose categories

= 1.1.1 =
- syntax error fixed in admin.php

= 1.1.2 =
- mysql connect without MYSQL_CLINET_COMPRESS parameter in joomla2wp-mig.php

= 1.1.3 =
- error fixed in joomla2wp-functions.php

= 1.1.4 =
- error fixed in joomla2wp-mig.php

= 1.2.0 =
- script stop working problem solved - set php ini values mysql.connect_timeout - now big amount of data no problem

= 1.2.1 =
- URL change feature extended in functionality - more URLs captured and changed
- error message flag used - now different error codes
- error code -70000: MySQL Conncetion Parameters not filled up.

= 1.2.2 =
- SVN Repository problem - files missed, fixed

= 1.3.0 =
- tested with mambo 4.5.2
- added user migration
- added images migration

= 1.3.1 =
- errors fixed

= 1.3.2 =
- design changes plugin admin panel

= 1.3.3 =
- errors fixed

= 1.3.4 =
- design changes

= 1.3.5 =
- migration output messages problem fixed

= 1.3.6 =
- error in image migration fixed

= 1.3.7 =
- migration of static pages added

= 1.3.8 =
- migration process changed - "copy images" step included

= 1.3.9 =
- change of <img> tag in the posts/pages: src attribut points now to the directory of the plugin settings page

= 1.3.10 =
- error in {mosimage} migration fixed
- support for seperate MySQL Server database installations added

= 1.4.0 =
- error in user migration and post author fixed
- feature added: wordpress mysql charset as option

= 1.4.1 =
- error fixed in user migration: check if email address is empty

= 1.4.2 =
- error fixed in user migration: check if users email already exists

= 1.5.0 =
- design changes for plugin admin pages
- character codepage conversion from joomla to wordpress
- feature added: joomla user password migration to wordpress
- error during create menu solved

= 1.5.1 =
- menu problem removed

= 1.5.2 =
- problem with no static pages removed
- problem with seperate mysql servers removed

= 1.5.3 =
- plugin description changed

= 1.5.4 =
- code page conversion changed

`<?php code(); // goes in backticks ?>`

