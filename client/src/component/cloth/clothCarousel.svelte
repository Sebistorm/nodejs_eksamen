<script>
    import { Link } from "svelte-navigator";
    export let title;
    export let price;
    export let id;
</script>

<div class="carouselItem">
    <Link class="clothLink" to="/cloth/{id}">
        <img src="https://www.rlmedia.io/is/image/PoloGSI/s7-1429865_alternate10?$rl_df_pdp_5_7_a10$" alt="bla bla">
        <p>{price}€</p>
        <p>{title}</p>
    </Link>
</div>

<style>
    img {
        width: 100%;
    }
    p {
        margin-bottom: 10px;
        color: black;
    }

    .carouselItem {
        padding: 0px 5px;
    }
</style>