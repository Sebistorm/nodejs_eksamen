<script>
    import { onMount } from "svelte";
    import { toast } from '@zerodevx/svelte-toast'
    const url_string = window.location.pathname
    const urlArray = url_string.split("/");
    const clothid = urlArray[2];
    
    let cloth;

    onMount(async () => {
		const response = await fetch(`/api/clothes/${clothid}`);
		const { data } = await response.json();
		cloth = data[0];

        document.getElementById("titleDisplay").value = cloth.title;
        document.getElementById("priceDisplay").value = cloth.price;
        document.getElementById("categoryDisplay").value = cloth.category;
	});

    async function handleSubmit(e) {
		e.preventDefault();

        const clothObject = {
            id: cloth.id,
            title: document.getElementById("titleDisplay").value, 
            price: document.getElementById("priceDisplay").value,
            category: document.getElementById("categoryDisplay").value
        }
		
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
            <img class="clothImg" src="https://www.rlmedia.io/is/image/PoloGSI/s7-1429865_alternate10?$rl_df_pdp_5_7_a10$" alt="imgtext">
        </div>
        <div>
            <form on:submit={handleSubmit}>
                <label for="titleDisplay">Title</label>
                <input type="text" id="titleDisplay">

                <label for="priceDisplay">Price</label>
                <input type="text" id="priceDisplay">

                <label for="categoryDisplay">Category</label>
                <input type="text" id="categoryDisplay">

                <button type="submit">Save</button>
            </form>
        </div>
    </div>

    
</div>







<style>

    .clothImg {
        width: 100%;
    }

    #clothWrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 2rem;
        max-width: 900px;
        margin: 0 auto;
    }

    label {
        font-size: 2rem;
    }
 
</style>
