<script>
	import { useNavigate, useLocation } from "svelte-navigator";
	import { toast } from '@zerodevx/svelte-toast'
	
	const navigate = useNavigate();
	const location = useLocation();

	let password;
	let name;
	let user = {
		name: null,
		password: null,
	};

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
			console.log("succes")
			toast.push('Success! The user has been created', {
				theme: {
					'--toastBackground': '#48BB78',
					'--toastBarBackground': '#2F855A'
				}
            });
			setTimeout(() => {
				const from = ($location.state && $location.state.from) || "/login";
				navigate(from, { replace: true });
			}, 4100 );
			} else if(data.status === 500) {
				toast.push('The user already exists!', {
					theme: {
						'--toastBackground': '#F56565',
						'--toastBarBackground': '#C53030'
					}
				})
                console.log("fail")
            }
		});
	}

</script>

<h3>Signup</h3>
<form method="post" on:submit={handleSubmit}>
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
