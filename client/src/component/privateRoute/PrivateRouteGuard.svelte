<script>
	import { useNavigate, useLocation } from "svelte-navigator";
	import { user, admin } from "../../store/generalStore";

	const navigate = useNavigate();
	const location = useLocation();

	$: if (!($user || $admin)) {
		navigate("/", {
			state: { from: $location.pathname },
			replace: true,
		});
	}
</script>

{#if $user || $admin}
	<slot />
{/if}