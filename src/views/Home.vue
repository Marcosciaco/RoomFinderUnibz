<template>
    <div class="home">
        <v-navigation-drawer
            color="light"
            app
            v-model="drawer"
            temporary
            style="position: fixed; top: 0; left: 0; overflow-y: hidden"
        >
            <div class="list-entry">
                <v-label>Only Available</v-label>
                <v-switch v-model="available" @change="searchRoom()"></v-switch>
            </div>
            <div style="padding: 0px 20px">
                <v-label>Campus</v-label>
                <v-select
                    v-model="campus"
                    solo
                    :items="['', 'BZ', 'BX']"
                    style="padding-top: 10px"
                    @change="searchRoom()"
                ></v-select>
            </div>
            <div style="padding: 0px 20px">
                <v-label>Building</v-label>
                <v-select
                    v-model="building"
                    solo
                    :items="['', 'A', 'B', 'C', 'D', 'E', 'F']"
                    style="padding-top: 10px"
                    @change="searchRoom()"
                ></v-select>
            </div>
        </v-navigation-drawer>

        <div class="header">
            <div class="filter-picker" @click="drawer = !drawer">
                <v-icon>mdi-filter</v-icon>
            </div>
            <v-text-field
                solo
                v-model="selected"
                class="room-picker"
                @change="fuzzySearch()"
            ></v-text-field>
        </div>
        <div style="padding-top: 55px">
            <RoomSlotEntry
                v-bind:key="index"
                :roomSlot="item"
                v-for="(item, index) in this.displayedSlots"
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
    data() {
        return {
            drawer: false,
            items: [],
            slots: [],
            search: null,
            displayedSlots: [],
            selected: "",

            available: false,
            campus: "",
            building: "",
        };
    },
    created() {
        this.$store.dispatch("loadRoomSlots");
        this.slots = this.$store.getters.getRoomSlots();
        this.displayedSlots = this.$store.getters.getRoomSlots();
    },
    watch: {
        selected(val) {
            this.displayedSlots = this.slots.filter((slot) => {
                return slot.room.id.includes(val);
            });
        },
    },
    methods: {
        searchRoom() {
            const filtered = this.slots.filter((slot) => {
                return (
                    slot.room.id.includes(this.selected) &&
                    slot.room.id.includes(this.campus) &&
                    slot.room.id.includes(this.building)
                );
            });

            this.displayedSlots = this.available
                ? filtered.filter((slot) => slot.actual.available)
                : filtered;
        },

        fuzzySearch() {
            const filtered = this.slots.filter((slot) => {
                return slot.room.id.toLowerCase().includes(this.selected.toLowerCase());
            });

            this.displayedSlots = this.available
                ? filtered.filter((slot) => slot.actual.available)
                : filtered;
        }
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
    background-color: var(--v-light-base);
}

.filter-picker {
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

.list-entry {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
}
</style>
