<template>
    <div>
        <div class="row-container" @click="routeToDetailedView(roomSlot)">
            <div class="slot-room">
                {{ roomSlot.room.campus }} {{ roomSlot.room.building
                }}{{ roomSlot.room.roomName }}
            </div>
            <div v-if="isAvailable()" class="slot-time">
                {{
                    getHour(actual.start) === "1:00"
                        ? "Opening"
                        : getHour(actual.start)
                }}
                -
                {{
                    getHour(actual.end) === "1:00"
                        ? "Closing"
                        : getHour(actual.end)
                }}
            </div>
            <div v-if="!isAvailable()" class="slot-time">
                {{
                    getHour(actual.start) === "1:00"
                        ? "Opening"
                        : getHour(actual.start)
                }}
                -
                {{
                    getHour(actual.end) === "1:00"
                        ? "Closing"
                        : getHour(actual.end)
                }}
                -
                {{ actual.description }}
            </div>
            <div v-if="isAvailable()" class="slot-available"></div>
            <div v-if="!isAvailable()" class="slot-not-available"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "RoomSlotEntry",
    props: ["roomSlot"],
    data() {
        return {
            actual: null,
        };
    },
    methods: {
        isAvailable() {
            const free = this.roomSlot.freeSlots.filter((slot) => {
                return new Date(slot.end) >= Date.now() || slot.end == null;
            });
            const occ = this.roomSlot.reservedSlots.filter((slot) => {
                return new Date(slot.end) >= Date.now() || slot.end == null;
            });

            this.actual = free.length > occ.length ? free[0] : occ[0];

            return this.actual.description === null;
        },

        getHour(endTime) {
            const date = new Date(endTime);
            const minutes = String(date.getMinutes())
                .padStart(2, "0")
                .padEnd(2, "0");

            return date.getHours() + ":" + minutes;
        },
        routeToDetailedView(roomSlot) {
            this.$router.push({
                path: `/roomslot/${
                    roomSlot.room.campus +
                    "_" +
                    roomSlot.room.building +
                    roomSlot.room.roomName
                }`,
            });
        },
    },
};
</script>

<style>
.row-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    width: calc(100% - 20px);
    height: 50px;
    margin: 10px;
    padding: 5px;
    background-color: var(--v-white-base);
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(56, 73, 86, 0.1);
}

.slot-room {
    font-size: 20px;
    font-weight: bold;
    padding-right: 5px;
    margin-left: 5px;
    color: var(--v-dark-base);
    border-right: 1px solid var(--v-grey-base);
    min-width: 15%;
    text-align: center;
}

.slot-time {
    max-width: calc(100% - 15% - 100px);
    color: var(--v-dark-base);
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}

.slot-available {
    width: 40px;
    height: 40px;
    background-color: var(--v-green-base);
    border-radius: 5px;
}

.slot-not-available {
    width: 40px;
    height: 40px;
    background-color: var(--v-red-base);
    border-radius: 5px;
}
</style>
