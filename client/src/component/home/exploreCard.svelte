<script>
    export let title;
    export let imgSrc;

</script>

<div class="exploreCard">
    <img src="{imgSrc}" alt="blaaa">
    <p>{title}</p>
    <button>Shop Now</button>
</div>

<style>
    
	.exploreCard {
		display: flex;
    	flex-direction: column;
	}

	.exploreCard img {
		width: 100%;
	}

	.exploreCard p {
		text-align: center;
		font-size: 1.5rem;
		padding-top: 5px;
		font-weight: 500;
	}

	.exploreCard button {
		margin: 0 auto;
		background-color: transparent;
		border: none;
		border-bottom: 1px solid black;
		cursor: pointer;
		font-size: 0.8rem;
		padding-bottom: 0.5rem;
		transition: all 1s;
	}
</style>