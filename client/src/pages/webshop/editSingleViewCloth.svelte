<script>
    import { onMount } from "svelte";
    import { toast } from '@zerodevx/svelte-toast'
    const url_string = window.location.pathname
    const urlArray = url_string.split("/");
    const clothid = urlArray[2];
    
    let cloth;
    let title;
    let price;
    let category;
    let imgSrc;

    let clothCategories = [];

    onMount(async () => {
		const response = await fetch(`/api/clothes/${clothid}`);
		const { data } = await response.json();
		cloth = data[0];
        console.log(cloth);
        title = cloth.title;
        price = cloth.price;
        category = cloth.category_name;
        imgSrc = cloth.imgSrc;

        const responseSizes = await fetch("/api/clothCategories");
		const { clothCategoriesData } = await responseSizes.json();
        console.log(clothCategoriesData);
        clothCategories = clothCategoriesData;  

	});

    let categoryValue;
    async function handleSubmit(e) {
		e.preventDefault();

        const clothObject = {
            id: cloth.id,
            title: title, 
            price: price,
            category: parseInt(categoryValue.value)
        }
        console.log(clothObject)
		let clothObjectString = JSON.stringify(clothObject);

		const fetchOptions = {
		method: "PUT",
		headers: {
			"Content-Type": "application/json"
		},
		body: clothObjectString
		}

		fetch("/api/editCloth", fetchOptions)
		.then(data =>  {
            if(data.status === 200) {
                toast.push('Success! The product has been updated', {
                    theme: {
                        '--toastBackground': '#48BB78',
                        '--toastBarBackground': '#2F855A'
                    }
                });
            }
		});
	}

    
</script>

<div class="container">
    <div id="clothWrapper">
        <div>
            <img class="clothImg" src="{imgSrc}" alt="imgtext">
        </div>
        <div>
            <form on:submit={handleSubmit}>
                <label for="titleDisplay">Title</label>
                <input bind:value="{title}" type="text" id="titleDisplay">

                <label for="priceDisplay">Price</label>
                <input bind:value="{price}" type="text" id="priceDisplay">

                <label for="category">Category</label>
                <select bind:this="{categoryValue}" id="category">
                    {#each clothCategories as clothCategory}
                        {#if clothCategory.category_name === category}
                            <option selected value="{clothCategory.id}">{clothCategory.category_name}</option>
                        {:else}
                            <option value="{clothCategory.id}">{clothCategory.category_name}</option>    
                        {/if} 
                    {/each}
                </select>

                <button type="submit">Save</button>
            </form>
        </div>
    </div>

    
</div>







<style>

    form {
        display: flex;
        flex-direction: column;
    }

    .clothImg {
        width: 100%;
    }

    #clothWrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 2rem;
        max-width: 900px;
        margin: 0 auto;
        margin-top: 50px;
    }

    label {
        font-size: 1.5rem;
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
