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

<div id="signupCompontent" class="container">
	<form method="post" on:submit={handleSubmit}>
		<h3>Signup</h3>
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
</div>


<style>
#signupCompontent {
	display: flex;
    align-items: center;
    min-height: calc(100vh - 61px);
}


form {
	display: flex;
    flex-direction: column;
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
}

input {
	width: 100%;
    height: 40px;
    padding: 0px 10px;
    font-size: 16px;
    color: #222;
}

input:focus-visible {
    outline: -webkit-focus-ring-color auto 1px;
}

button {
	border: none;
    outline: none;
    color: white;
    background-color: #1B2A38;
    cursor: pointer;
    font-size: 18px;
}

h3 {
	font-size: 2rem;
	margin-bottom: 10px;
}

label {
	margin-bottom: 5px;
}
</style>
