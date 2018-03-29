<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content">
            <transition name="move" mode="out-in"><router-view></router-view></transition>
        </div>
    </div>
</template>

<script>
import vHead from './header.vue';
import vSidebar from './sideBar.vue';
export default {
	data() {
		return {
			notify: {},
		};
	},
	components: {
		vHead,
		vSidebar,
	},
	watch: {
		notify(newVal, oldVal) {
			console.log('xxx');
			this.openNotify();
		},
	},
	methods: {
		openNotify() {
			this.$notify({
				title: 'HTML 片段',
				dangerouslyUseHTMLString: true,
				message: '<strong>这是 <i>HTML</i> 片段</strong>',
				position: 'bottom-right',
				onClick: function() {},
				duration: 0,
			});
		},
	},
};
</script>
