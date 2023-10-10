<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	// your script goes here
	export let items: string[]
	export let activeItem: string

	const dispatch = createEventDispatcher()
</script>

<div class="tabs">
	<ul>
		{#each items as item}
			<!-- content here -->
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
			<li on:click={() => dispatch('tabChange', item)}>
				<div class:active={item === activeItem}>{item}</div>
			</li>
		{/each}
	</ul>
</div>

<!-- markup (zero or more items) goes here -->

<style>
	/* your styles go here */
	.tabs {
		margin-bottom: 40px;
	}

	ul {
		display: flex;
		justify-content: center;
		padding: 0;
		list-style-type: none;
	}

	li {
		margin: 0 16px;
		font-size: 18px;
		cursor: pointer;
	}
	.active {
		color: #d91b42;
		border-bottom: 2px solid #d91b42;
		padding-bottom: 8px;
	}
</style>
