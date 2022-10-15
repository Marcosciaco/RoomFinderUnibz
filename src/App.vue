<template>
    <v-app class="app-container">
        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: "App",

    data: () => ({
        //
    }),

    metaInfo: {
        changed(metaInfo) {
            this.$analytics.setCurrentScreen(metaInfo.title);
            this.$analytics.logEvent("page_view");
            this.$analytics.logEvent("screen_view", {
                app_name: isPWA() ? "pwa" : "web",
                screen_name: metaInfo.title,
                app_version: version,
            });
        },
    },
};
</script>

<style>
.app-container {
    background-color: var(--v-light-base) !important;
}
</style>
