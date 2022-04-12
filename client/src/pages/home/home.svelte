<script>
    import { useNavigate, useLocation } from "svelte-navigator";
	
	const navigate = useNavigate();
	const location = useLocation();

    function goToWebshop() {
		const from = ($location.state && $location.state.from) || "/webshop";
		navigate(from, { replace: true });
	}
</script>

<h1>Kalvin Clein</h1>
<h3><button on:click={goToWebshop}>Webshop</button></h3>


<style>
</style>
