<template>
    <v-container>
        <div>{{ getTimeSlots() }}</div>
    </v-container>
</template>

<script>
export default {
    name: "HelloWorld",

    data: () => ({}),
    methods: {
        getTimeSlots() {
            this.$store.dispatch("loadRoomSlots");
            return this.$store.getters.getRoomSlots();
        },
    },
};
</script>
