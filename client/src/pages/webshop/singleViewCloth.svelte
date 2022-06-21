<script>
    import { onMount } from "svelte";
    import Carousel from "svelte-carousel";
    import CarouselItem from "../../component/cloth/clothCarousel.svelte";
    import {user} from "../../store/generalStore";
    import { toast } from '@zerodevx/svelte-toast'
    import Footer from "../../component/footer/footer.svelte";


    let url_string = window.location.pathname;
    let urlArray = url_string.split("/");
    let clothid = urlArray[2];

    let carouselItems = [];
    let clothSizes = [];
    
    let cloth;
    let title;
    let price;
    let category;
    let imgSrc;
    onMount(async () => {
        getCloth(); 
        const responseSizes = await fetch("/api/clothSizes");
		const { clothSizesData } = await responseSizes.json();
        console.log(clothSizesData);
        clothSizes = clothSizesData;       
        getSimilarClothes();
	});

    function updateCloth() {
        url_string = window.location.pathname;
        urlArray = url_string.split("/");
        clothid = urlArray[2];
        console.log(clothid);

        getCloth();
        getSimilarClothes();
    }

    async function getCloth() {
        const response = await fetch(`/api/clothes/${clothid}`);
        const { data } = await response.json();
        console.log(data);
        cloth = data[0];
        console.log(cloth)

        title = cloth.title;
        price = cloth.price;
        category = cloth.category_name;
        imgSrc = cloth.imgSrc;
    }

    async function getSimilarClothes() {
        const responseCarouselItems = await fetch(`/api/similarclothes/${category}&&${clothid}`)
        const {carouselItemsData} = await responseCarouselItems.json();
        carouselItems = carouselItemsData
        console.log(carouselItems)
    }

    let clothSize;
    function addToCart () {
        let cart = {
            cloth_fk: clothid,
            customer_fk: $user.customerID,
            clothSize_fk: clothSize.value

        }
        console.log(cart)

        let cartObjectString = JSON.stringify(cart);

		const fetchOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: cartObjectString
		}

        fetch("/api/addToCart", fetchOptions)
        .then(data => {
            console.log("hej");
            if(data.status === 200) {
                toast.push('The product has been added to the cart', {
					theme: {
						'--toastBackground': '#48BB78',
						'--toastBarBackground': '#2F855A'
					}
				});
            }
        })

    }


    
</script>

<div class="container">
    <div id="clothWrapper">
        <div>
            <img class="clothImg" src="{imgSrc}" alt="imgtext">
        </div>
        <div>
            <h1 id="titleDisplay">{title}</h1>
            <div id="priceDisplay"> {price} €</div>
            <div id="categoryDisplay">{category}</div>   

            <select id="size" bind:this="{clothSize}">
                {#each clothSizes as clothSize} 
                    <option value="{clothSize.id}">{clothSize.size}</option>
                {/each}
            </select>
            <button on:click={addToCart}>Add to Bag</button>
            <div class="detailsWrapper">
                <h3>Details</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptate adipisci maiores doloribus id accusamus hic. Hic aspernatur deleniti nesciunt, tempora harum minima quod accusamus ipsum perspiciatis, sint repellat excepturi.</p>
            </div>
        </div>
    </div>

    
</div>

<div class="container" style="margin-top: 2rem; margin-bottom:4rem;">
    <h2>Similar products</h2>
    <Carousel
    particlesToShow={3}
    particlesToScroll={1}
    >
    {#each carouselItems as carouselItem}
        <div on:click="{updateCloth}"> 
        <CarouselItem price="{carouselItem.price}" title="{carouselItem.title}" id="{carouselItem.id}" imgSrc="{carouselItem.imgSrc}"/>
        </div>
    {/each}
        
    </Carousel>
</div>


<Footer />




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

    h2 {
        padding-left: 35px;
        margin-bottom: 1rem;
    }
 
</style>
