<script>
	import { Router, Route, Link } from "svelte-navigator";
	import PrivateRoute from "./component/privateRoute/PrivateRoute.svelte";
	import { user } from "./store/generalStore";

	import Home from "./pages/home/home.svelte";
	import Login from "./pages/login/login.svelte"
	import Signup from "./pages/signup/signup.svelte";
	import Dashboard from "./pages/dashboard/dashboard.svelte";
	import Webshop from "./pages/webshop/webshop.svelte";
	import SingleViewCloth from "./pages/webshop/singleViewCloth.svelte";
	import EditSingleViewCloth from "./pages/webshop/editSingleViewCloth.svelte";


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

</script>



<main>
	<Router>
			<nav>
				<Link to="/">Home</Link>
				<Link to="login">admin login</Link>
				<Link to="signup">admin Signup</Link>
				<Link to="webshop">Shop</Link>
				{#if $user}
					<Link to="dashboard">Dashboard</Link>
            	{/if}
			</nav>

			
				<Route path="/" component={Home}/>
				<Route path="login" component={Login} />
				<Route path="signup" component={Signup} />
				<Route path="webshop" component={Webshop} />
				<Route path="cloth/:id" component={SingleViewCloth} />

			<PrivateRoute path="dashboard" let:location>
				<Dashboard></Dashboard>
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

	:global(body) {
		background-color: #edf0f5
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
</style>