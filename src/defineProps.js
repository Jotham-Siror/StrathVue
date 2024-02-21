import Navbar from 'components/Navbar.vue';

const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const __VLS_componentsOption = {};
let __VLS_name!: 'App';
function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'VApp', typeof __VLS_localComponents, "VApp", "vApp", "v-app"> &
__VLS_WithComponent<'Navbar', typeof __VLS_localComponents, "Navbar", "Navbar", "Navbar"> &
__VLS_WithComponent<'RouterView', typeof __VLS_localComponents, "RouterView", "routerView", "router-view">;
__VLS_components.VApp; __VLS_components.VApp; __VLS_components.vApp; __VLS_components.vApp; __VLS_components["v-app"]; __VLS_components["v-app"];
// @ts-ignore
[VApp, VApp,];
__VLS_components.Navbar;
// @ts-ignore
[Navbar,];
__VLS_intrinsicElements.main; __VLS_intrinsicElements.main;
__VLS_components.RouterView; __VLS_components.RouterView; __VLS_components.routerView; __VLS_components.routerView; __VLS_components["router-view"]; __VLS_components["router-view"];
// @ts-ignore
[RouterView, RouterView,];
{
const __VLS_0 = ({} as 'VApp' extends keyof typeof __VLS_ctx ? { 'VApp': typeof __VLS_ctx.VApp; } : 'vApp' extends keyof typeof __VLS_ctx ? { 'VApp': typeof __VLS_ctx.vApp; } : 'v-app' extends keyof typeof __VLS_ctx ? { 'VApp': (typeof __VLS_ctx)["v-app"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VApp;
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, }));
({} as { VApp: typeof __VLS_0; }).VApp;
({} as { VApp: typeof __VLS_0; }).VApp;
const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = ({} as 'Navbar' extends keyof typeof __VLS_ctx ? { 'Navbar': typeof __VLS_ctx.Navbar; } : typeof __VLS_resolvedLocalAndGlobalComponents).Navbar;
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, }));
({} as { Navbar: typeof __VLS_5; }).Navbar;
const __VLS_7 = __VLS_6({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
}
{
const __VLS_10 = __VLS_intrinsicElements["main"];
const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
{
const __VLS_15 = ({} as 'RouterView' extends keyof typeof __VLS_ctx ? { 'RouterView': typeof __VLS_ctx.RouterView; } : 'routerView' extends keyof typeof __VLS_ctx ? { 'RouterView': typeof __VLS_ctx.routerView; } : 'router-view' extends keyof typeof __VLS_ctx ? { 'RouterView': (typeof __VLS_ctx)["router-view"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).RouterView;
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{}, }));
({} as { RouterView: typeof __VLS_15; }).RouterView;
({} as { RouterView: typeof __VLS_15; }).RouterView;
const __VLS_17 = __VLS_16({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
}
(__VLS_13.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
setup() {
return {
Navbar: Navbar as typeof Navbar,
};
},
});
export default (await import('vue')).defineComponent({
setup() {
return {};
},
});
