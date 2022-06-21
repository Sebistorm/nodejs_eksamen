<script>
    export let title;
    export let category;
    export let size;
    export let price;

    
</script>

<div class="cloth">
    <div class="left">
        <img src="https://calvinklein-eu.scene7.com/is/image/CalvinKleinEU/J30J320217_YAF_main?$vertical$" alt="">
        <div class="info">
            <p class="title">{title}</p>
            <p class="category">{category}</p>
            <p>Size: {size}</p>
        </div>
    </div>
    <div class="right">
        <p class="price">{price}€</p>
    </div>
</div>

<style>
    
    .cloth {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 1rem 0px;
        border-bottom: 1px solid #b5b5b5;
    }

    .left {
        display: flex;
    }

    img {
        width: 8rem;
    }

    .info {
        padding: 0px 0.5rem;
    }

    .title {
        font-size: 1.5rem;
        margin-bottom: 0.2rem;
    }

    .category {
        font-size: 1.1rem;
        margin-bottom: 0.2rem;
    }

    .price {
        font-size: 1.5rem;
    }
    
</style>