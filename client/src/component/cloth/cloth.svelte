<script>
    import { admin } from "../../store/generalStore";
    import { Link } from "svelte-navigator";
    export let clothCategory;
    export let clothTitle;
    export let clothPrice;
    export let clothID;
    export let clothImg = "https://www.rlmedia.io/is/image/PoloGSI/s7-1429865_alternate10?$rl_df_pdp_5_7_a10$";

    import { useNavigate, useLocation } from "svelte-navigator";
	
	const navigate = useNavigate();
	const location = useLocation();

    

    function goToEditACloth() {
		const from = ($location.state && $location.state.from) || `/editCloth/${clothID}`;
		navigate(from, { replace: true });
	}
</script>

<div class="cloth">
    <Link class="clothLink" to="/cloth/{clothID}">
        <img class="clothImg" src="{clothImg}" alt="imgtext">
        <div class="textwrapper">
            <p>{clothCategory}</p>
            <p>{clothTitle}</p>
            <p>{clothPrice}€</p>
        </div>
    </Link>
    {#if $admin}
        <button on:click={goToEditACloth}>Edit</button>
    {/if}
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
        color: black;
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