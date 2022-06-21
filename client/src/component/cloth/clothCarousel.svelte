<script>
    import { Link } from "svelte-navigator";
    export let title;
    export let price;
    export let id;
    export let imgSrc

</script>

<div class="carouselItem">
    <Link class="clothLink" to="/cloth/{id}">
        <img src="{imgSrc}" alt="bla bla">
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