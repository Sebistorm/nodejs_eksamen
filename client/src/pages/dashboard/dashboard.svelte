<script>
    import {user} from "../../store/generalStore";
    
    function handleLogout() {
		$user = null;
	}
</script>

<h1>Dashboard</h1>
<p>admin stuff. Welcome {user.name}</p>
<button on:click={handleLogout}>Logout</button>


<style>
</style>
