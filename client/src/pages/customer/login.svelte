<script>
	import { useNavigate, useLocation } from "svelte-navigator";
	import { toast } from '@zerodevx/svelte-toast'
	import io from "socket.io-client";
	const socket = io();
	
	const navigate = useNavigate();
	const location = useLocation();

	import { user } from "../../store/generalStore";
	let password;
	let email; 

	async function handleSubmit(e) {
		e.preventDefault();
		user.email = email;
		user.password = password
		let userObjectString = JSON.stringify(user);

		const fetchOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: userObjectString
		}

		fetch("/api/customerLogin", fetchOptions)
		.then(async data =>  {
			const result = await data.json();
			const customerID = result.customerID;
			if(data.status === 200) {
				user.set({ customerID });
				socket.emit("customerLoggedIn", { data: result.customerName });
				const from = ($location.state && $location.state.from) || "/webshop";
				navigate(from, { replace: true });
			} else {
				toast.push('Wrong password or name!', {
					theme: {
						'--toastBackground': '#F56565',
						'--toastBarBackground': '#C53030'
					}
				})
			}
		});
	}

</script>

<div id="loginCompontent" class="container">
	<form method="post" on:submit={handleSubmit}>
		<h3>Login</h3>
		<label for="name">Email</label>
		<input
			bind:value={email}
			type="text"
			name="email"
			placeholder="Email"
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

#loginCompontent {
	display: flex;
    align-items: center;
    min-height: calc(100vh - 62px);
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
