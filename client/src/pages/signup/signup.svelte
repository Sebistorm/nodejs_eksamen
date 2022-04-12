<script>
	import { useNavigate, useLocation } from "svelte-navigator";
	
	const navigate = useNavigate();
	const location = useLocation();

	let password;
	let name;
	let user = {
		name: null,
		password: null,
	};
	let errorMessage = false;
    let errorMessageText;

	async function handleSubmit(e) {
		e.preventDefault();
		user.name = name;
		user.password = password
		let userObjectString = JSON.stringify(user);

		const fetchOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: userObjectString
		}

		fetch("/api/signup", fetchOptions)
		.then(data =>  {
			if(data.status === 200) {
			errorMessage = true;
            errorMessageText = "User created"
			console.log("succes")
			const from = ($location.state && $location.state.from) || "/login";
			navigate(from, { replace: true });
			} else if(data.status === 500) {
                errorMessage = true;
                errorMessageText = "Name already in use";
                console.log("fail")
            }
		});
	}

</script>

<h3>Signup</h3>
<form method="post" on:submit={handleSubmit}>
	{#if errorMessage}
		<p>{errorMessageText}</p>
	{/if}
    <label for="name">Name</label>
	<input
		bind:value={name}
		type="text"
		name="name"
		placeholder="name"
	/>
    <label for="password">Password</label>
	<input
		bind:value={password}
		type="password"
		name="password"
		placeholder="Password"
	/>
	<button type="submit">Login</button>
</form>


<style>
</style>
