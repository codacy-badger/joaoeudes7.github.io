<template>
	<div>
		<v-card>
			<v-subheader>Repositories</v-subheader>
			<div v-if="projects.length > 0">
				<v-list two-line>
					<div v-for="project in projects" v-bind:key="project.id">
						<v-list-tile avatar>
							<v-list-tile-avatar>
								<img src="https://avatars1.githubusercontent.com/u/16367752?v=4">
							</v-list-tile-avatar>
							<v-list-tile-content>
								<v-list-tile-title v-html="project.name"></v-list-tile-title>
								<v-list-tile-sub-title v-html="project.description"></v-list-tile-sub-title>
							</v-list-tile-content>
						</v-list-tile>
					</div>
				</v-list>

			</div>
			<div v-else>
				<md-progress-spinner class="md-accent" :md-stroke="3" md-mode="indeterminate"></md-progress-spinner>
			</div>
		</v-card>
	</div>
</template>

<script>
	import axios from "axios";

	export default {
		name: "projects",
		data() {
			return {
				projects: []
			};
		},

		created() {
			this.getProjects();
		},

		methods: {
			getProjects() {
				axios
					.get(`https://api.github.com/users/joaoeudes7/repos`)
					.then(response => {
						// JSON responses are automatically parsed.
						this.projects = response.data;
					})
					.catch(e => {
						this.errors.push(e);
					});
			}
		}
	};
</script>

<style scoped>
	.md-list {
		width: 620px;
		max-width: 100%;
		display: inline-block;
		vertical-align: top;
		border: 1px solid rgba(#000, .12);
	}
</style>
