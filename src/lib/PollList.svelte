<script>
	import PollDetails from './PollDetails.svelte'
	import PollStore from '../../stores/PollStore'


</script>

<div class="poll-list">
	{#each $PollStore as poll (poll.id)}
		<div>
			<PollDetails on:vote {poll} />
		</div>
	{/each}
</div>

<!-- markup (zero or more items) goes here -->

<style>
	.poll-list {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 20px;
	}
</style>
