<template>
    <div style="height: 100%">
        <div class="back-btn" @click="back()">
            <v-icon>mdi-chevron-left</v-icon>
        </div>
        <div class="room-name">
            {{ id.replace("_", " ") }}
        </div>
        <div class="room-slots">
            <RoomSlotDetailedViewEntry
                v-bind:key="index"
                :roomSlot="item"
                v-for="(item, index) in getTimeSlots()"
            >
                {{ item }}
            </RoomSlotDetailedViewEntry>
        </div>
    </div>
</template>

<script>
import RoomSlotEntry from "../components/RoomSlotEntry.vue";
import RoomSlotDetailedViewEntry from "../components/RoomSlotDetailedViewEntry.vue";
import Slot from "../model/Slot";
export default {
    name: "RoomSlotDetailedView",
    data() {
        return {
            roomSlots: [],
            id: 0,
        };
    },
    created() {
        this.id = this.$route.params.id;
    },
    methods: {
        getTimeSlots() {
            this.$store.dispatch("loadRoomSlots");
            return this.$store.getters
                .getRoomSlots()
                .filter((slot) => {
                    return slot.room.id === this.id;
                })
                .flatMap((slot) => {
                    let ret = [];
                    slot.freeSlots.forEach((element) => {
                        ret.push(
                            new Slot(
                                element.start,
                                element.end,
                                true,
                                element.description
                            )
                        );
                    });
                    slot.reservedSlots.forEach((element) => {
                        ret.push(
                            new Slot(
                                element.start,
                                element.end,
                                false,
                                element.description
                            )
                        );
                    });
                    return ret;
                })
                .sort((a, b) => {
                    return new Date(a.start) - new Date(b.start);
                });
        },

        back() {
            this.$router.push({ path: "/" });
        },
    },
    components: { RoomSlotEntry, RoomSlotDetailedViewEntry },
};
</script>

<style>
.room-name {
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 60px;
    height: 20%;
}
.room-slots {
    background-color: var(--v-white-base);
    padding-top: 5px;
    height: 80%;
    border-radius: 0px 50px 0px 0px;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
        0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
}
.back-btn {
    position: absolute;
    top: 0;
    left: 0;
    height: 50px;
    width: 50px;
    background-color: var(--v-white-base);
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
        0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    border-radius: 0px 0px 10px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
