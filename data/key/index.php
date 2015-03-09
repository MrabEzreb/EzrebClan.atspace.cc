<!DOCTYPE html>
<html>
    <head><script src="../../javascripts/scriptLoader.js"></script></head>
    <body>
        <announcement></announcement>
        <nav array="data" active=1></nav>
        <div class="jumbotron">
            <h3>So, you may be wondering how this whole thing works, huh.</h3>
            <h3>Well, it's really pretty freakin simple tbh.</h3>
            <h3>Here's what you do, you have to go to <?php echo $_SERVER["SERVER_NAME"]; ?>/data/get, but you have to tell the PHP what you want to get.</h3>
            <h3>You do this with a get request, but sometimes, it isn't easy to use a get request. Maybe you want to view something in your browser.</h3>
            <h3>PHP makes it EXTREMELY simple to add all of the parameters that you need to the get request!</h3>
            <h3>All that you have to do is put something like this as the URL:</h3>
            <h3><a href="<?php echo $_SERVER["SERVER_NAME"]; ?>/data/get?data=time"><?php echo $_SERVER["SERVER_NAME"]; ?>/data/get?data=time</a></h3>
            <h3>Pretty simple and easy right? :)</h3>
            <h3>You can even use some other arguments, by simply adding a &amp; in between the arguments: </h3>
            <h3><a href="<?php echo $_SERVER["SERVER_NAME"]; ?>/data/get?data=time&amp;24hour=true&amp;showMilli=true"><?php echo $_SERVER["SERVER_NAME"]; ?>/data/get?data=time&amp;24hour=true&amp;showMilli=true</a></h3>
            <h3>There is a big ol' refrence to everything that you can do. To get to the list of what data you can get, go to this link:<br><br>
                <a href="<?php echo $_SERVER["SERVER_NAME"]; ?>/data/get?data=refrence"><?php echo $_SERVER["SERVER_NAME"]; ?>/data/get?data=refrence</a>
            </h3>
        </div>
    </body>
</html>