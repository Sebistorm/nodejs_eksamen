<script>
    export let clothCategory;
    export let clothTitle;
    export let clothPrice;
</script>

<div class="cloth">
    <img class="clothImg" src="https://www.rlmedia.io/is/image/PoloGSI/s7-1429865_alternate10?$rl_df_pdp_5_7_a10$" alt="imgtext">
    <div class="textwrapper">
        <p>{clothCategory}</p>
        <p>{clothTitle}</p>
        <p>{clothPrice}€</p>
    </div>
</div>

<style>
    .cloth {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .clothImg {
        width: 100%;
    }

    p {
        margin-top: 5px;
    }
</style>