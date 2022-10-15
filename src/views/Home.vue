<template>
    <div class="home">
        <div class="header">
            <div class="date-picker"><v-icon>mdi-calendar</v-icon></div>
            <v-autocomplete solo class="room-picker"></v-autocomplete>
            <div class="filter-picker"><v-icon>mdi-filter</v-icon></div>
        </div>
        <div style="padding-top: 55px">
            <RoomSlotEntry
                v-bind:key="index"
                :roomSlot="item"
                v-for="(item, index) in getTimeSlots()"
            >
            </RoomSlotEntry>
        </div>
    </div>
</template>

<script>
import RoomSlotEntry from "../components/RoomSlotEntry.vue";

export default {
    name: "Home",
    components: {
        RoomSlotEntry,
    },
    methods: {
        getTimeSlots() {
            this.$store.dispatch("loadRoomSlots");
            return this.$store.getters.getRoomSlots();
        },
    },
};
</script>

<style>
.header {
    height: 60px;
    width: 100%;
    display: flex;
    padding: 5px;
    justify-content: space-between;
    position: fixed;
    flex-direction: row;
}

.date-picker {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    height: 48px;
    width: 48px;
    margin-right: 5px !important;
    border-radius: 5px;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
        0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
}

.filter-picker {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    height: 48px;
    width: 48px;
    margin-left: 5px !important;
    border-radius: 5px;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
        0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
}
</style>
