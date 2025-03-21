<template>
	<main>
		<section class="carousel-slider">
			<div id="carouselExampleDark" class="carousel carousel-dark slide">
				<div class="carousel-indicators">
					<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
						aria-current="true" aria-label="Slide 1"></button>
					<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
						aria-label="Slide 2"></button>
					<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
						aria-label="Slide 3"></button>
				</div>
				<div class="carousel-inner">
					<div class="carousel-item active" data-bs-interval="10000">
						<img src="https://fakeimg.pl/600x200/f0f0f0/f0f0f0?font=bebas" class="d-block w-100" alt="...">
						<div class="carousel-caption d-none d-md-block">
							<h5>Grand Summer Sale!</h5>
							<p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
						</div>
					</div>
					<div class="carousel-item" data-bs-interval="2000">
						<img src="https://fakeimg.pl/600x200/f0f0f0/f0f0f0?font=bebas" class="d-block w-100" alt="...">
						<div class="carousel-caption d-none d-md-block">
							<h5>Super-Saver Offres</h5>
							<p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
						</div>
					</div>
					<div class="carousel-item">
						<img src="https://fakeimg.pl/600x200/f0f0f0/f0f0f0?font=bebas" class="d-block w-100" alt="...">
						<div class="carousel-caption d-none d-md-block">
							<h5>Best of This Season</h5>
							<p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
						</div>
					</div>
				</div>
				<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
					data-bs-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
					data-bs-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			</div>
		</section>

		<section class="jumbotron text-center py-5 my-5">
			<div class="container">
				<h1 class="jumbotron-heading">Get 25% Discount on your first purchase</h1>
				<p class="lead text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst amet,
					metus, sit massa posuere maecenas. At tellus ut nunc amet vel egestas.</p>
				<p>
					<router-link to="/shop" class="btn btn-primary my-2">Click here to Shop</router-link>
				</p>
			</div>
		</section>

	</main>
</template>
