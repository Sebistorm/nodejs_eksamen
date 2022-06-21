<script>
    import {user} from "../../store/generalStore";

    import { onMount } from "svelte";
    
    let email;
    let name;

    onMount(async () => {
		const response = await fetch(`/api/customerInfo/${$user.customerID}`);
		const { data } = await response.json();
        email = data[0].email;
        name = data[0].name;
	});

    
</script>
<div class="container" style="display: flex;">
    <div class="sidebar">
        <h2>Sidebar</h2>
        <p>coming soon</p> 
    </div>
    <div class="profile">
        <h1>General account settings</h1>
        <div class="infoColumn">
            <p class="infoTitle">Email:</p><p class="info">{email}</p>
        </div>
        <div class="infoColumn">
            <p class="infoTitle">Name:</p><p class="info">{name}</p>
        </div>
        
    </div>

  
</div>

<style>

    .sidebar {
        width: 30%;
        min-height: calc(100vh - 62px);
        border-right: 2px solid black;
    }

    .profile {
        width: 70%;
        padding: 0px 2rem;
    }

    h1 {
        margin-top: 2rem;
        border-bottom: 2px solid black;
        padding-bottom: 0.3rem;
    }

    .infoColumn {
        display: flex;
        padding: 1rem 0px;
        border-bottom: 1px solid #b5b5b5;
    }

    .infoTitle {
        width: 30%;
        padding: 0px 0.5rem;
        font-weight: 600;
    }

    .info {
        width: 70%;
        padding: 0px 0.5rem;
    }

</style>
