<script>
	import { Router, Route, Link } from "svelte-navigator";
	import PrivateRoute from "./component/privateRoute/PrivateRoute.svelte";
	import { user, admin } from "./store/generalStore";

	import Home from "./pages/home/home.svelte";
	import AdminLogin from "./pages/admin/login.svelte"
	import AdminSignup from "./pages/admin/signup.svelte";
	import Dashboard from "./pages/dashboard/dashboard.svelte";
	import Webshop from "./pages/webshop/webshop.svelte";
	import SingleViewCloth from "./pages/webshop/singleViewCloth.svelte";
	import EditSingleViewCloth from "./pages/webshop/editSingleViewCloth.svelte";
	import CustomerSignup from "./pages/customer/signup.svelte";
	import CustomerLogin from "./pages/customer/login.svelte";
	import CustomerProfile from "./pages/customer/profile.svelte";
	import Cart from "./pages/cart/cart.svelte";


	import { SvelteToast } from '@zerodevx/svelte-toast'

	const options = {
		duration: 4000,       // duration of progress bar tween to the `next` value
		initial: 1,           // initial progress bar value
		next: 0,              // next progress value
		pausable: false,      // pause progress bar tween on mouse hover
		dismissable: true,    // allow dismiss with close button
		reversed: false,      // insert new toast to bottom of stack
		intro: { x: 256 },    // toast intro fly animation settings
		theme: {},            // css var overrides
		classes: []           // user-defined classes
	}	

	function handleLogout() {
		  $user = null;
	}

</script>



<main>
	<Router>
			<nav>
				<div id="navbar" class="container">
					<div class="left" style="display:flex; align-items:center;">
						<Link to="/"><img style="width:30px;" src="https://uc099dee3328d062957586479af9.previews.dropboxusercontent.com/p/thumb/ABl8dGWVw-5UROgVRBOnzhzz7Aw6_MBoXxiDd_oHrJDpTO87LZru2LIEGEiuAdSEYClOizHm_6JzNIu180ZF5CxCxNnzsD4odkzn9q9dBWna6a0x54GY9BgT2U_QYMbdFKhgxpvqjV4fqSG561iou4JpfdV3p-8HiUwuwKzezJ3SKF9LA4rklrk7sAoA8uikb4b4pIujIPqhUJ7B-FYBjykZvbFxGnZgE8UT_ptiqB39aeuo2pP-qXvcQ7mkimPKOdVBNBST_wuIGU0b3zBHE5mbYfHeyN_8SYg1fNSKCEJJCFuybCoMk2G3sv8jZJW5fxTyphi7sQc8Kvroel1AZEj_4vTmtxB8jVMhEsMEeKXgRn2qqAijkVhCyYAZkZv0KoScaDT1U3mu97voh33_j6hqt27BnBZKqpA9fh5-XQmluw/p.png" alt="logo"></Link>
						<Link to="/">Home</Link>
						<Link to="webshop">Shop</Link>
						{#if $admin}
							<Link to="dashboard">Dashboard</Link>
						{/if}
					</div>
					<div class="right" style="display:flex; align-items:center;">
						<Link to="adminLogin">admin login</Link>
						{#if $admin}
							<Link to="adminSignup">admin Signup</Link>
						{/if}
						
						{#if !$user}
						<Link to="customerLogin">Customer Login</Link>
						{/if}

						{#if !$user}
						<Link to="customerSignup">Customer Signup</Link>
						{/if}

						{#if $user}
							<Link to="customerProfile">Profile</Link>
						{/if}

						{#if $user}
							<span style="color: white; cursor:pointer;" on:click={handleLogout}>Logout</span>
						{/if}

						<Link to="cart">Cart</Link>
					</div>
				</div>
			</nav>

			
				<Route path="/" component={Home}/>
				<Route path="adminLogin" component={AdminLogin} />
				<Route path="adminSignup" component={AdminSignup} />
				<Route path="customerSignup" component={CustomerSignup} />
				<Route path="customerLogin" component={CustomerLogin} />
				<Route path="webshop" component={Webshop} />
				<Route path="cloth/:id" component={SingleViewCloth} />
				<Route path="cart" component={Cart} />

			<PrivateRoute path="dashboard" let:location>
				<Dashboard></Dashboard>
			</PrivateRoute>

			<PrivateRoute path="customerProfile" let:location>
				<CustomerProfile></CustomerProfile>
			</PrivateRoute>

			<PrivateRoute path="editCloth/:id" let:location>
				<EditSingleViewCloth></EditSingleViewCloth>
			</PrivateRoute>
	</Router>

	<SvelteToast {options} />

</main>

<style>
	:global(*) {
		box-sizing: border-box;
		margin: 0px;
	}

	:global(.clothLink:hover) {
		text-decoration: none !important;
	}

	:global(.clothLinkEdit) {
        background-color: black;
        color: white;
        width: 100%;
        cursor: pointer;
        margin-top: 0.3125rem;
        transition: all 1s;
        border: 2px solid black;
    
	}

	:global(.container) {
		max-width: 1320px;
		width: 100%;
    	padding-right: 1rem;
    	padding-left: 1rem;
    	margin-right: auto;
    	margin-left: auto;
	}

	:global(.container-fluid) {
		width: 100%;
	}

	:global(body) {
		background-color: #edf0f5;
		padding: 0px;
	}

	@media screen and (max-width: 1140px) {
		:global(.container) {
		max-width: 1140px;
		}
	}

	@media screen and (max-width: 960px) {
		:global(.container) {
		max-width: 960px;
		}
	}

	@media screen and (max-width: 720px) {
		:global(.container) {
		max-width: 720px;
		}
	}

	@media screen and (max-width: 540px) {
		:global(.container) {
		max-width: 540px;
		}
	}

	#navbar {
		display: flex;
		justify-content: space-between;
		
	}

	:global(#navbar a) {
		color: white !important;
		padding: 0px 10px
	}

	nav {
    	background-color: #1B2A38;
		padding: 20px 0px;
	}
</style>