<script>

    export let imgSrc;
    export let category;
    export let teaser;
    export let friendlyUrlParam;

    function goToWebshopByCard(urlToGoTo) {
		console.log(urlToGoTo)
	}
</script>

<div class="card">
    <img src="{imgSrc}" alt="bla">
    <div class="textWrapper">
        <p>{category}</p>
        <p class="cardTeaser">{teaser}</p>
        <button on:click={() => goToWebshopByCard(friendlyUrlParam)}>Shop Now</button>
    </div>
</div>

<style>
    .card {
		background-color: white;
	}

	.card img {
		width:100%;
	}

	.textWrapper {
		padding: 0.5rem 1rem;
	}

	.cardTeaser {
		font-size: 1.2rem;
    	font-weight: 600;
	}

	.card button {
		width: 100%;
		background-color: transparent;
		border: 1px solid #6d6d6d;
		color: #000;
		margin-top: 1rem;
	}

	.card button:hover {
		background-color: black;
		color: white;
	}
</style>