<template>
	<div>
		<div v-if="profileGit.name">
			<v-subheader>Profile</v-subheader>

			<v-card color="blue-grey darken-2" class="white--text">
				<v-container fluid grid-list-lg>
					<v-layout row>
						<v-flex xs7>
							<div>
								<div class="headline">{{profileGit.name}}</div>
								<div>@{{profileGit.login}}</div>
								<div>Hi! I'am 20 years, I'm a programmer and developer. I am fascinated by artificial intelligence and I am currently a volunteer in a project in robotic.</div>
							</div>

							<v-card-actions>
								<v-btn flat dark>Bio & Projects</v-btn>
							</v-card-actions>

						</v-flex>
						<v-flex xs5>
							<v-card-media :src="profileGit.avatar_url" height="125px" contain></v-card-media>
						</v-flex>
					</v-layout>
				</v-container>
			</v-card>
		</div>

		<div v-else class="center">
			<v-progress-circular indeterminate :size="100" color="red"></v-progress-circular>
		</div>
	</div>
</template>

<script>
	import axios from "axios";
	export default {
		name: "profile",
		data() {
			return {
				profileGit: []
			};
		},
		created() {
			this.getProjects();
		},

		methods: {
			getProjects() {
				axios
					.get(`https://api.github.com/users/joaoeudes7`)
					.then(response => {
						// JSON responses are automatically parsed.
						this.profileGit = response.data;
					})
					.catch(e => {
						this.errors.push(e);
					});
			}
		}
	};
</script>

<style scoped>
	.center {
		text-align: center;
	}

	.progress-circular {
		margin: 1rem;
	}
</style>
