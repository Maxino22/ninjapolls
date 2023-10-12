import { writable } from 'svelte/store'

const PollStore = writable([
	{
		id: 1,
		question: 'What is your favorite color?',
		answerA: 'Blue',
		answerB: 'Red',
		votesA: 10,
		votesB: 5,
	},
])

export default PollStore
