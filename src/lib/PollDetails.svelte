<script lang="ts">
	import { createEventDispatcher } from 'svelte'

	// your script goes here
	import Card from './shared/Card.svelte'
	export let poll
	$: totalVotes = poll.votesA + poll.votesB

	const dispatch = createEventDispatcher()

	const handleVote = (option: string, id: number)=>{
				dispatch("vote", {option, id})
	}
</script>

<Card>
	<div class="poll">
		<h3>{poll.question}</h3>
		<p>Total votes: {totalVotes}</p>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div on:click={()=> handleVote('a', poll.id)} class="answer">
			<div class="percent percent-a">
				<span>{poll.answerA} ({poll.votesA})</span>
			</div>
		</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div on:click={()=> handleVote('b', poll.id)} class="answer">
			<div class="percent percent-b">
				<span>{poll.answerB} ({poll.votesB})</span>
			</div>
		</div>
	</div>
</Card>

<!-- markup (zero or more items) goes here -->

<style>
	h3 {
		margin: 0 auto;
		color: #555;
	}
	p {
		margin-top: 6px;
		font-size: 14px;
		color: #aaa;
		margin-bottom: 30px;
	}
	.answer {
		background: #fafafa;
		cursor: pointer;
		margin: 10px auto;
		position: relative;
	}
	.answer:hover {
		opacity: 0.6;
	}
	span {
		display: inline-block;
		padding: 10px 20px;
	}
</style>
