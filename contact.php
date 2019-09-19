<!DOCTYPE HTML>
<html>
	<head>
		<title> Contact page </title>
		<meta charset="UTF-8"/>
		<meta name="description" content="template"/>
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
		<link href='http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300' rel='stylesheet' type='text/css'>
		<link type="text/css" rel="stylesheet" href="css/style.css" />
		<link type="text/css" rel="stylesheet" href="css/grid.css" />
		<link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
		<script type="text/javascript" src="js/animate.js"></script>
		<script type="text/javascript" src="js/functions.js"></script>
	</head>
	<body>
		<header class="container">
		
			<div class="logo col12_t col12_m show">
				<img id="logo_image" title="top ten" alt="top ten logo" src="images/2.png">
				<span>DAUD WINATA - WEB DESIGNER / DEVELOPER</span>
			</div>
			
			<div class="top2 col7_move col7_b col7 col12_t col12_m">
				<ul class="nav col12_t col12_m">
					<li class="col12_t col12_m desktop tablet">
						<a href="index.html">HOME</a>
					</li>
					
					<li class="col12_t col12_m desktop tablet">
						<a href="graphic.html">GRAPHIC DESIGN</a>
					</li>
					
					<li class="col12_t col12_m desktop tablet">
						<a href="project.html">WEB DEVELOPMENT</a>
					</li>
					
					<li class="col12_t col12_m desktop tablet">
						<a href="contact.php">CONTACT</a>
					</li>
				</ul>
			</div>
			
			<div class="logo col5_move col5_b col5 col5_t col5_m tablet desktop mobile">
				<img id="logo_image" title="top ten" alt="top ten logo" src="images/2.png">
				<span>DAUD WINATA - WEB DESIGNER / DEVELOPER</span>
			</div>
			<div class="clearFloat"></div>
		</header>
		
		
		<section class="middle_contact col12 col12_t col12_m">
			<div class="contact col12 col12_t col12_m">
				CONTACT
				
			</div>
			
			<div class="contact_wrapper col10">
			
				<div id="formm" class="col6 col12_t col12_m">
					<form name="form1" action="tes.php" method="post" onSubmit="return false">
					
							
						<label>Name:</label>
							
						<input type="text" name="name" id="name" /><br />
						<div class="error" id="nameerror">Please check your name</div>
						<div class="clearFloat"></div>
						
						<label>Email:</label>
						
						<input type="text" name="email" id="email"/><br />
						<div class="error" id="emailmerror">Please check your email</div>
						<div class="clearFloat"></div>
						
						<label>Subject:</label>
						 
						<input type="text" name="subject" id="subject"/><br />
						<div class="error" id="subjecterror">Please check your subject</div>
						<div class="clearFloat"></div>
						 
						<label>Message:</label>
						
						<textarea name="message" cols="38" rows="8" id="message"></textarea><br />
						<div class="error" id="messageerror">Please check your message</div>
						<div class="clearFloat"></div>
						
							
						<div id="bla">
							<div id="response"></div>
							<input type="submit" value="Contact" id="contactBtn"/>
						</div>
									
								
					</form>
				</div>
						
				<div class="contact_inside col6 col6_t col6_m desktop tablet mobile">
					<div class="contact_inside_move">
						<span>Contact me today! </span><br/><br/>
						I offer creative web solutions and creative ideas.<br/>
						I take pride in my work and everything I create is executed with precision and love.
						Those unique aspects along with my creativity, experience and knowledge guarantee the highest quality in my work.
					
						<!--<a href="DaudCV.pdf" class="cv">Download my CV</a> -->
					</div>
				</div>	
				<div class="clearFloat"></div>
			</div>
		</section>
		
		<footer class="bottom">
			<div class="bottom_background col12 col12_t col12_m"></div>
			
			<div class="bottom_container col12">
				<div class="bottom_container_inside col10 col11_t col11_m">
					<div class="personal_contact floatLeft col6 col6_t">
						<i class="fa fa-phone-square"></i><span>CONTACT</span>
						<div class="personal_contact_span">
							<p>Telephone: 438-882-7788</p>
							<p>Email: Daud.winata@yahoo.ca</p>
						</div>
					</div>       
				
					<div class="personal_contact floatLeft col6 col6_t col11_m">
						<i class="fa fa-angellist"></i><span>SOLUTION</span>
						<div class="personal_contact_span">
							My main goal is to design creative, user 
							friendly websites that are developed to meet your unique goals and requirements.
							Providing you with high quality services, eye-cathing websites
							friendly to visitors, but also to search engine
						
						</div>
					</div>  
					
					<div class="clearFloat"></div>
				</div>
			</div>
		
			<div class="bottom_menu col12 col12_t col12_m">
					
					
					<div class="bottom_menu_inside col12 col12_t col12_m">
						<ul class="nav2">
							<li>
								<a href="index.html">Home</a>
							</li>
							
							<li>
								<a href="graphic.html">Graphic Design</a>
							</li>
							
							<li>
								<a href="project.html">Web Development</a>
							</li>
							
							<li>
								<a href="contact.php">Contact</a>
							</li>
						</ul>
						<div class="clearFloat"></div>
					</div>
				
					
			</div>
		
		</footer>
	</body>
</html>