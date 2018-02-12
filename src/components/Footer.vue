<template>
		<v-card class="pa-3">
			<v-spacer></v-spacer>
			<div>{{ new Date().getFullYear() }} | GitPages</div>
		</v-card>
</template>

<script>
	export default {
		name: 'Footer',
		data: () => ({
			icons: ['fa-facebook', 'fa-twitter', 'fa-google-plus', 'fa-linkedin', 'fa-instagram']
		}),
	}
</script>

<style scoped>
	.pa-3 {
		text-align: right
	}
</style>

