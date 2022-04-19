<script>
    import { onMount } from "svelte";
    const url_string = window.location.pathname
    const urlArray = url_string.split("/");
    const clothid = urlArray[2];
    
    let cloth;

    onMount(async () => {
		const response = await fetch(`/api/clothes/${clothid}`);
		const { data } = await response.json();
		cloth = data[0];
        console.log(cloth)

        document.getElementById("titleDisplay").innerText = cloth.title;
        document.getElementById("priceDisplay").innerText = cloth.price + "€";
        document.getElementById("categoryDisplay").innerText = cloth.category;
	});

    
</script>

<div class="container">
    <div id="clothWrapper">
        <div>
            <img class="clothImg" src="https://www.rlmedia.io/is/image/PoloGSI/s7-1429865_alternate10?$rl_df_pdp_5_7_a10$" alt="imgtext">
        </div>
        <div>
            <h1 id="titleDisplay"> </h1>
            <div id="priceDisplay"></div>
            <div id="categoryDisplay"></div>   

            <select>
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
            </select>
            <button>Add to Bag</button>
            <div class="detailsWrapper">
                <h3>Details</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptate adipisci maiores doloribus id accusamus hic. Hic aspernatur deleniti nesciunt, tempora harum minima quod accusamus ipsum perspiciatis, sint repellat excepturi.</p>
            </div>
        </div>
    </div>

    
</div>







<style>

    #clothWrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 2rem;
        max-width: 900px;
        margin: 0 auto;
        margin-top: 50px;
    }

    .clothImg {
        width: 100%;
    }

    #titleDisplay {
        font-size: 1.7rem;
        line-height: 1.5625rem;
    }

    #priceDisplay {
        font-size: 1.5rem;
        font-style: italic;
        margin-top: 0.3125rem;
        line-height: 1.5625rem;
    }

    #categoryDisplay {
        font-size: 1.25rem;
        line-height: 1.5625rem;
        margin-top: 0.3125rem;
    }
    
    select {
        width: 100%;
        margin-top: 1.25rem;
        cursor: pointer;
    }

    button {
        background-color: black;
        color: white;
        width: 100%;
        cursor: pointer;
        margin-top: 0.3125rem;
        transition: all 1s;
        border: 2px solid black;
    }

    button:hover {
        background-color: white;
        color: black;
    }

    .detailsWrapper {
        margin-top: 1.25rem;
    }
 
</style>
