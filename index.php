<?php include('includes/header.php'); ?>

<!-- OVERLAY -->

<div class="overlay">
	<img src="assets/img/logo.png" alt="logo">
</div>
<!-- END OVERLAY -->

<!-- PAGER -->
<div class="pager-holder">
	<div class="pager">
		<div class="circle orange"></div>
		<div class="circle"></div>
		<div class="circle"></div>
		<div class="circle"></div>
		<div class="circle"></div>
		<div class="circle"></div>
	</div>
</div><!-- END PAGER -->

<section class="pages-wrap">
	<!-- START CONTROLLER -->
	<div class="page-holder" data-ng-controller="amplifiController">
		<!-- PAGE ONE -->
		<div class="page" id="one">
			<div class="carousel-container">
				<div class="pop-up">
					<div class="arrow-up"></div>
					<div class="form-container">
						<div class="content-wrap">
							<form action="" method="POST">
								<div class="social-wrap">
									<img src="assets/img/facebook.png"  alt="Login with Facebook!" class="login"/>
									<img src="assets/img/google.png"  alt="Login with Google+!" class="login"/>
									<img src="assets/img/twitter.png"  alt="Login with Twitter!" class="login"/>
									<i class="fa fa-arrow-down" id="artistDown"></i>
									<i class="fa fa-arrow-down" id="fanDown"></i>
								</div>
								<label for="email">email</label>
								<input type="text" name="email">
								<label for="password">password</label>
								<input type="password" name="password">
								<div class="register-pw">
									<a href="index.php?page=register">register</a> | <a href="#" id="oopsArtist">forgot password!</a>
								</div>
							</form>
						</div>
					</div>
				</div>

				<div class="artist-fan" id="fanContainer">
					<h1 id="fanLogin">fan</h1>
					<div class="arrow-one"></div>
				</div>
				<div class="artist-fan" id="artistContainer">
					<div class="arrow-two"></div>
					<h1 id="artistLogin">artist</h1>
				</div>

			</div>

		</div><!-- END PAGE ONE -->
		<!-- PAGE TWO -->
		<div class="page" id="two" data-ng-cloak="">

			<div class="artist-container">
				<form class="artist-search">
					<input id="search" type="text" data-ng-model="nameText" placeholder="SEARCH">
				</form>
			    <div class="artist" data-ng-repeat="artist in amplifiArtists | filter: nameText" ng-style="{'background-image': 'url(' + artist.imgUrl + ')'}" data-ng-click="artistClick(artist)"></div>  
			</div>

		</div><!-- END PAGE TWO -->
		<!-- PAGE THREE -->
		<div class="page" id="three">
			<h2 data-ng-bind="currentArtistName"></h2>
			<h3>New York, NY</h3>

			<div class="venue-box">
				
				<div class="venue">
					<div class="image" id="venue1"></div>
					<div class="progress">in progress</div>
					<div class="title">barclays center</div>
				</div>

				<div class="venue">
					<div class="image" id="venue2"></div>
					<div class="progress">in progress</div>
					<div class="title">bowery ballroom</div>
				</div>

			</div>

			<div class="row">

				<div class="venue">
					<div class="image" id="venue3"></div>
					<div class="progress">in progress</div>
					<div class="title">carnegie hall</div>
				</div>

				<div class="venue">
					<div class="image" id="venue4"></div>
					<div class="title">radio city</div>
				</div>

			</div>
				
		</div><!-- END PAGE THREE -->
		<!-- PAGE FOUR -->
		<div class="page" id="four">

			<h2 data-ng-bind="currentArtistName"></h2>
			<h3>Bowery Ballroom | New York, NY</h3>

			<div class="pet-wrap">
				<div class="pet-circle"><span>1</span></div>
				<div class="pet-sig">
					<img src="assets/img/signatures/sig1.svg" alt="Signature">
				</div>
				<div class="pet-line"></div>
			</div>

			<div class="pet-wrap">
				<div class="pet-circle"><span>2</span></div>
				<div class="pet-sig">
					<img src="assets/img/signatures/sig2.svg" alt="Signature">
				</div>
				<div class="pet-line"></div>
			</div>

			<div class="pet-wrap">
				<div class="pet-circle"><span>3</span></div>
				<div class="pet-sig">
					<img src="assets/img/signatures/sig3.svg" alt="Signature">
				</div>
				<div class="pet-line"></div>
			</div>

			<div class="pet-wrap">
				<div class="pet-circle"><span>4</span></div>
				<div class="pet-sig">
					<img src="assets/img/signatures/sig4.svg" alt="Signature">
				</div>
				<div class="pet-line"></div>
			</div>

			<div class="pet-wrap">
				<div class="pet-circle orange sign-this"><span>5</span></div>
				<div class="pet-sig sign-this">
				</div>
				<div class="pet-line"></div>
			</div>

			<div class="pet-wrap">
				<div class="pet-circle orange sign-this"><span>6</span></div>
				<div class="pet-sig sign-this">
				</div>
				<div class="pet-line"></div>
			</div>

			<div class="pet-wrap">
				<div class="pet-circle orange sign-this"><span>7</span></div>
				<div class="pet-sig sign-this">
				</div>
				<div class="pet-line"></div>
			</div>

			<div class="pet-wrap">
				<div class="pet-circle orange sign-this"><span>8</span></div>
				<div class="pet-sig sign-this">
				</div>
				<div class="pet-line"></div>
			</div>


		</div><!-- END PAGE FOUR -->
		<!-- PAGE FIVE -->
		<div class="page" id="five">
			
			<div class="landscape">
				<h2 class="sig-h2" data-ng-bind="currentArtistName"></h2>
				<h3>PETITION</h3>

				<div class="pet-wrap sig">
					<div class="pet-circle orange"><span>5</span></div>
					<div class="pet-sig">
						<img src="assets/img/signatures/sig5.svg" alt="Signature" id="haas">
					</div>
					<div class="pet-line"></div>
				</div>

				<a href="#" class="submit">submit</a>
			</div>

		</div><!-- END PAGE FIVE -->
		<!-- PAGE SIX -->
		<div class="page" id="six">
			
			<div class="share">

				<img src="assets/img/facebook.png" alt="">
				<img src="assets/img/google.png" alt="">
				<img src="assets/img/twitter.png" alt="">
				
				<div>
					<span class="url">url:</span> <span class="address">bit.ly/14rg06</span>
				</div>
				
			</div>
		</div><!-- END PAGE SIX -->

	</div><!-- END CONTROLLER -->
</section>

<!-- BOTTOM NAV -->
<nav>
	<span id="crazyButton" class="login">choose</span>
</nav><!-- END NAV -->

<h5>Please view on a phone or tablet for best experience.</h5>

<?php include('includes/footer.php'); ?>		
