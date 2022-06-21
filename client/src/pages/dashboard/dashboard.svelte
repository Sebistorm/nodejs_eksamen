<script>
    import {admin} from "../../store/generalStore";
    import io from "socket.io-client";

    const socket = io();
    
    function handleLogout() {
		  $admin = null;
	  }

    let log;

    socket.on("logCustomer", ( data) => { 
        const paragraph = document.createElement('p');
        paragraph.innerHTML = data.username + " Has logged in";
        paragraph.style.fontSize = "1.1rem";
        paragraph.style.padding = "0.5rem 0px";
        paragraph.style.borderBottom = "1px solid #b5b5b5";
        log.append(paragraph);
    }); 

</script>
<div class="container">
  <div class="wrapper">
    <div class="left">
      <h1>Dashboard</h1>
      <p>admin stuff. Welcome {admin.name}</p>
      <button on:click={handleLogout}>Logout</button>
    </div>
    <div class="right">
      <div bind:this="{log}" id="log">
        <h2>Log</h2>
      </div>
    </div>
  </div>
</div>

<style>
  .wrapper {
    display: flex;
  }

  .left {
    width: 70%;
    padding-right: 2rem;
  }

  .right {
    width: 30%;
    padding: 0px 1rem;
    min-height: calc(100vh - 62px);
    border-left: 1px solid black;
  }

  #log h2 {
    padding: 0.5rem 0px;
    margin-bottom: 0.5rem;
    border-bottom: 1px solid black;
  }

</style>
