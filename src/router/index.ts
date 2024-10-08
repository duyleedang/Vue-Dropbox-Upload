import { createRouter, createWebHistory } from 'vue-router';
const routes = [
	{
		path: '/auth/callback'
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});
export default router;
declare module 'vue-router' {
	interface RouteMeta {
		authRequired?: boolean
		disallowAuthorized?: boolean
	}
}