<template>
	<v-app id="inspire">
		<v-navigation-drawer fixed clipped app v-model="drawer">
			<v-list dense>
				<div v-for="(item, i) in items" v-bind:key="i">
					<v-layout row v-if="item.heading" align-center :key="i">
						<v-flex xs6>
							<v-subheader v-if="item.heading">
								{{ item.heading }}
							</v-subheader>
						</v-flex>
						<v-flex xs6 class="text-xs-center">
							<a href="#!" class="body-2 black--text">EDIT</a>
						</v-flex>
					</v-layout>
					<v-list-group v-else-if="item.children" v-model="item.model" no-action>
						<v-list-tile slot="item" @click="">
							<v-list-tile-action>
								<v-icon>{{ item.model ? item.icon : item['icon-alt'] }}</v-icon>
							</v-list-tile-action>
							<v-list-tile-content>
								<v-list-tile-title>
									{{ item.text }}
								</v-list-tile-title>
							</v-list-tile-content>
						</v-list-tile>
						<v-list-tile v-for="(child, i) in item.children" :key="i" @click="">
							<v-list-tile-action v-if="child.icon">
								<v-icon>{{ child.icon }}</v-icon>
							</v-list-tile-action>
							<v-list-tile-content>
								<v-list-tile-title>
									{{ child.text }}
								</v-list-tile-title>
							</v-list-tile-content>
						</v-list-tile>
					</v-list-group>
					<v-list-tile v-else @click="">
						<v-list-tile-action>
							<v-icon>{{ item.icon }}</v-icon>
						</v-list-tile-action>
						<v-list-tile-content>
							<v-list-tile-title>
								{{ item.text }}
							</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
				</div>
			</v-list>
		</v-navigation-drawer>
		<v-toolbar color="blue darken-3" dark app clipped-left fixed>
			<v-toolbar-title :style="$vuetify.breakpoint.smAndUp ? 'width: 300px; min-width: 250px' : 'min-width: 72px'" class="ml-0 pl-3">
				<v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
				<span class="hidden-xs-only">@joaoeudes7</span>
			</v-toolbar-title>
			<v-text-field light solo prepend-icon="search" placeholder="Search" style="max-width: 500px; min-width: 128px"></v-text-field>
			<div class="d-flex align-center" style="margin-left: auto">
				<v-btn icon>
					<v-icon>apps</v-icon>
				</v-btn>
				<v-btn icon>
					<v-icon>notifications</v-icon>
				</v-btn>
			</div>
		</v-toolbar>
		<v-content>
			<v-container fluid>
				<router-view></router-view>
			</v-container>
		</v-content>
		<Footer></Footer>
	</v-app>
</template>

<script>
	import Footer from './components/Footer.vue'
	export default {
		name: 'App',
		data: () => ({
			dialog: false,
			drawer: null,
			items: [{
					icon: 'account_circle',
					text: 'Profile'
				},
				{
					icon: 'description',
					text: 'Projects'
				},
				{
					icon: 'star',
					text: 'Stars'
				},
				{
					icon: 'keyboard_arrow_up',
					'icon-alt': 'contacts',
					text: 'Contact',
					model: false,
					children: [{
							text: 'Email'
						},
						{
							text: 'Telegram'
						},
					]
				},
			]
		}),
		components: {
			Footer
		},
		props: {
			source: String
		}
	}
</script>

<style>

</style>
