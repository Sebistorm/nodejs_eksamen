<script>
	import { Router, Route, Link } from "svelte-navigator";
	import PrivateRoute from "./component/privateRoute/PrivateRoute.svelte";

	import Home from "./pages/home/home.svelte";
	import Login from "./pages/login/login.svelte"
	import Signup from "./pages/signup/signup.svelte";
	import Dashboard from "./pages/dashboard/dashboard.svelte";
	import Webshop from "./pages/webshop/webshop.svelte";

</script>



<main>
	<Router>
			<nav>
				<Link to="/">Home</Link>
				<Link to="login">admin login</Link>
				<Link to="signup">admin Signup</Link>
			</nav>

			
				<Route path="/" component={Home}/>
				<Route path="login" component={Login} />
				<Route path="signup" component={Signup} />
				<Route path="webshop" component={Webshop} />
			

			<PrivateRoute path="dashboard" let:location>
				<Dashboard></Dashboard>
			</PrivateRoute>
	</Router>

</main>

<style>
	:global(*) {
		box-sizing: border-box;
		margin: 0px;
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