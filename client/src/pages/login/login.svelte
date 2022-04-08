<script>
	let password;
	let name;
	let user = {
		name: null,
		password: null,
	};
	let errorMessage = false;


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

		fetch("/api/login", fetchOptions)
		.then(data =>  {
			if(data.status === 200) {
			errorMessage = false;
			} else {
				errorMessage = true;
			}
		});
	}

</script>

<h3>Login</h3>
<form method="post" on:submit={handleSubmit}>
	{#if errorMessage}
		<p>wrong name or password</p>
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
