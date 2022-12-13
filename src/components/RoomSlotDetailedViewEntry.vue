<template>
    <div>
        <div
            v-bind:class="[
                isActual ? 'slot-container-now' : '',
                'slot-container',
            ]"
        >
            <div class="time-slot">
                <div>
                    {{
                        getHour(roomSlot.start) === "1:00"
                            ? "Opening"
                            : getHour(roomSlot.start)
                    }}
                </div>
                <div>-</div>
                <div>
                    {{
                        getHour(roomSlot.end) === "1:00"
                            ? "Closing"
                            : getHour(roomSlot.end)
                    }}
                </div>
            </div>
            <div class="time-desc">
                <div v-if="roomSlot.available" class="slot-time-available">
                    Available from
                    <b>{{
                        getHour(roomSlot.start) === "1:00"
                            ? "Opening"
                            : getHour(roomSlot.start)
                    }}</b>
                    to
                    <b>{{
                        getHour(roomSlot.end) === "1:00"
                            ? "Closing"
                            : getHour(roomSlot.end)
                    }}</b>
                </div>
                <div v-if="!roomSlot.available" class="slot-time-available">
                    Reserved from
                    <b>{{
                        getHour(roomSlot.start) === "1:00"
                            ? "Opening"
                            : getHour(roomSlot.start)
                    }}</b>
                    to
                    <b>{{
                        getHour(roomSlot.end) === "1:00"
                            ? "Closing"
                            : getHour(roomSlot.end)
                    }}</b>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "RoomSlotDetailedViewEntry",
    props: ["roomSlot"],
    data() {
        return {
            isActual: true,
        };
    },
    async created() {
        const now = new Date();
        const startTime = new Date(this.roomSlot.start);
        const endTime = new Date(this.roomSlot.end);

        this.isActual =
            (now >= startTime || this.roomSlot.start === null) &&
            (now <= endTime || this.roomSlot.end === null);
    },
    methods: {
        getHour(endTime) {
            const date = new Date(endTime);
            const minutes = String(date.getMinutes())
                .padStart(2, "0")
                .padEnd(2, "0");

            return date.getHours() + ":" + minutes;
        },

        isTimeSlotNow() {},

        routeToDetailedView(roomSlot) {
            this.$router.push({
                path: `/roomslot/${
                    roomSlot.room.campus +
                    roomSlot.room.building +
                    roomSlot.room.roomName
                }`,
            });
        },
    },
};
</script>

<style>
.slot-container-now {
    border: 1px solid var(--v-primary-base) !important;
}

.slot-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    width: calc(100% - 40px);
    height: 100px;
    margin: 20px;
    padding: 5px;
    background-color: var(--v-white-base);
    border-radius: 20px;
    border: none;
}

.time-slot {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100%;
    border-right: 1px solid var(--v-grey-base);
}
.time-desc {
    text-align: center;
    width: calc(100% - 100px);
}
</style>
