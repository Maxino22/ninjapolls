<script lang="ts">
	import CreatePollForm from './lib/CreatePollForm.svelte'
	import Footer from './lib/Footer.svelte'
	import Header from './lib/Header.svelte'
	import PollList from './lib/PollList.svelte'
	import Tabs from './lib/shared/Tabs.svelte'

	let items = ['Current Polls', 'Add New Polls']
	let activeItem = 'Current Polls'

	const tabChange = (e: Event) => {
		activeItem = (e as CustomEvent<any>).detail
	}
	

	const handleAdd = (e: Event) => {
		const poll = (e as CustomEvent<any>).detail

		polls = [poll, ...polls]
		activeItem = 'Current Polls'
	}


	const handleVote = (e: Event) =>{
		const { id , option}  = (e as CustomEvent<any>).detail

			let copiedPolls = [...polls]

			let upvotedPoll = copiedPolls.find((poll)=>poll.id == id)


			if (option === 'a') {
				upvotedPoll.votesA++
			}
			if (option === 'b') {
				upvotedPoll.votesB++
			}
		

			polls = copiedPolls
	}
</script>

<Header />
<main>
	<Tabs on:tabChange={tabChange} {items} {activeItem} />
	{#if activeItem === 'Current Polls'}
		<PollList on:vote={handleVote}  />
	{:else}
		<CreatePollForm on:add={handleAdd} />
	{/if}
</main>

<Footer />

<style>
	main {
		max-width: 960px;
		margin: 40px auto;
	}
</style>
