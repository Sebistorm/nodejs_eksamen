<script>
    import {admin} from "../../store/generalStore";
    
    function handleLogout() {
		  $admin = null;
	  }
</script>
<div class="container">
  <h1>Dashboard</h1>
  <p>admin stuff. Welcome {admin.name}</p>
  <button on:click={handleLogout}>Logout</button>
</div>

<style>
</style>
