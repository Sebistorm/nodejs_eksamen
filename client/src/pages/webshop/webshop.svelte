<script>
    import { onMount } from "svelte";
    import Cloth from "../../component/cloth/cloth.svelte";

    export let clothes = [];

    onMount(async () => {
		const response = await fetch("/api/clothes");
		const { data } = await response.json();
		console.log(data);
		clothes = data;
	});
</script>

<div class="container">
    <h1>Webshop</h1>

    <div id="clothesWrapper">

      
        {#each clothes as cloth }
            <Cloth clothCategory="{cloth.category_name}" clothTitle="{cloth.title}" clothPrice="{cloth.price}" clothID="{cloth.id}" />
	    {/each}

    </div>
    
</div>







<style>
    #clothesWrapper {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        column-gap: 2rem;
        row-gap: 2rem;
    }

    h1 {
        margin-bottom: 20px;
    }
</style>
