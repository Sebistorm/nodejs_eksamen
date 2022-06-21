<script>
    import { onMount } from "svelte";
    import {user} from "../../store/generalStore";
    import ClothItem from "../../component/cart/clothItem.svelte";
    import Footer from "../../component/footer/footer.svelte";

    let subtotal = 0;
    let deliveryCost = 5;
    let grandTotal = 0;

    console.log($user.customerID);
    let cartItems = [];
    onMount(async () => {
		const response = await fetch(`/api/cart/${$user.customerID}`);
		const { data } = await response.json();
		console.log(data);
		cartItems = data;

        cartItems.forEach(cartItem => {
            subtotal = subtotal + cartItem.price;
        });
        console.log(subtotal);
        grandTotal = subtotal + deliveryCost;
	});

    console.log(cartItems);

    function buyItems () {
        console.log("buy now!")
    }
    
</script>

<div class="container">
    <h1>Cart</h1>
    <div class="wrapper">
      <div class="clothes">
          {#each cartItems as cartItem}
          <ClothItem title="{cartItem.title}" category="{cartItem.category_name}" size="{cartItem.size}" price={cartItem.price} imgSrc="{cartItem.imgSrc}" />
          {/each}
      </div>
      <div class="cartOverview">
          <h1>Overview</h1>
          <div class="overview_content">
            <div class="column">
                <p class="columntitle">Subtotal</p>
                <p>{subtotal}€</p>
            </div>
            <div class="column">
                <p class="columntitle">Standard Delivery<br>Within 3 - 5 Working Days</p>
                <p>{deliveryCost}€</p>
            </div>
            <div class="column grandTotal">
                <p class="columntitle">TOTAL ({cartItems.length} ITEMS) </p>
                <p>{grandTotal}€</p>
            </div>
            <button on:click={buyItems}>Buy</button>
              
            </div>
        </div>  
    </div>
</div>

<Footer />

<style>
    h1 {
        margin: 2rem 0px 1rem;
    }

    .wrapper {
        display: flex;
        margin-bottom: 4rem;
    }

    .clothes {
        width: 70%;
        padding-right: 2rem;
    }

    .cartOverview {
        width: 30%;
        padding-right: 2rem;
    }

    .cartOverview h1 {
        margin: 0px;
        padding-bottom: 1.5rem;
        border-bottom: 1px solid #b5b5b5;
    }

    .column {
        display: flex;
        justify-content: space-between;
        padding: 1rem 0px;
        border-bottom: 1px solid #b5b5b5;
    }

    .grandTotal {
        display: flex;
        justify-content: space-between;
        padding: 1rem 0px;
        font-size: 1.3em;
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

</style>
