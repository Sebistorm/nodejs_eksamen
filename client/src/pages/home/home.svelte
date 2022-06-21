<script>
    import { useNavigate, useLocation } from "svelte-navigator";
	import Card from "../../component/home/card.svelte";
	import ExploreCard from "../../component/home/exploreCard.svelte";
	import Footer from "../../component/footer/footer.svelte";
	
	const navigate = useNavigate();
	const location = useLocation();

    function goToWebshop() {
		const from = ($location.state && $location.state.from) || "/webshop";
		navigate(from, { replace: true });
	}

</script>
<div class="container-fluid">
	<div id="splashImage">
		<h1>Kalvin Clein</h1>
		<p id="teaser">Fresh hues and modern proportions.<br>Find new angles in summer staples.</p>
		<button on:click={goToWebshop}>Webshop</button>
	</div>

	<div id="cardWrapper">
		<Card friendlyUrlParam="jackets" category="Jackets" teaser="Be Cool" imgSrc="https://www.rlmedia.io/is/image/PoloGSI/s7-1378726_alternate10?$rl_df_pdp_5_7_a10$" />
		<Card friendlyUrlParam="polo" category="Polo" teaser="Refined Minimalism" imgSrc="https://www.rlmedia.io/is/image/PoloGSI/s7-1436637_alternate10?$rl_df_pdp_5_7_a10$" />
		<Card friendlyUrlParam="blazers" category="Blazers" teaser="Stay Classy" imgSrc="https://www.rlmedia.io/is/image/PoloGSI/s7-1368523_alternate10?$rl_df_pdp_5_7_a10$" />
		<Card friendlyUrlParam="jeans" category="Jeans" teaser="Be Yourself" imgSrc="https://www.rlmedia.io/is/image/PoloGSI/s7-1319680_alternate10?$rl_df_pdp_5_7_a10$" />
		
	</div>
	
</div>

<div class="container" style="padding:2rem 0px 4rem;">
	<h2>More to Explore</h2>
	<div id="exploreWrapper">
		<ExploreCard title="Suits" imgSrc="https://www.rlmedia.io/is/image/PoloGSI/s7-1398931_alternate10?$rl_df_pdp_5_7_a10$"/>
		<ExploreCard title="Hoodies" imgSrc="https://www.rlmedia.io/is/image/PoloGSI/s7-1411108_alternate10?$rl_df_pdp_5_7_a10$"/>
		<ExploreCard title="Sunglasses" imgSrc="https://www.rlmedia.io/is/image/PoloGSI/s7-1439878_lifestyle?$rl_df_pdp_5_7_lif$"/>
	</div>
	
</div>

<Footer />


<style>
	#splashImage {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 50vh;
		background-color: firebrick;
		color: white;
	}

	h1 {
		font-size: 3rem;
	}

	#teaser {
		margin: 1.5rem 0px;
    	color: #ffe4b3;
	}

	#splashImage button {
		border: none;
		outline: none;
		color: white;
		background-color: #1B2A38;
		cursor: pointer;
		font-size: 18px;
		width: 100%;
		max-width: 264px;
    	height: 50px;
	}

	#splashImage button:hover {
		background-color: white;
    	color: black;
	}

	#cardWrapper {
		display: grid;
		column-gap: 2rem;
		row-gap: 2rem;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		padding: 2rem 1rem;
    	background-color: #dddddd;
	}

	#exploreWrapper {
	display: grid;
    column-gap: 1rem;
    row-gap: 1rem;
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 800px;
    margin: 0 auto;
	}

	h2 {
		text-align: center;
		font-size: 2rem;
		padding: 1rem;
	}

	
</style>
