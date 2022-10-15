<template>
    <div>
        <div class="row-container">
            <div class="slot-room">
                {{ roomSlot.room.campus }} {{ roomSlot.room.building
                }}{{ roomSlot.room.roomName }}
            </div>
            <div v-if="roomSlot.slots.available" class="slot-time-available">
                {{ getHour(roomSlot.slots.startTime) }} -
                {{ getHour(roomSlot.slots.endTime) }}
            </div>
            <div v-if="!roomSlot.slots.available" class="slot-time-available">
                {{ getHour(roomSlot.slots.startTime) }} -
                {{ getHour(roomSlot.slots.endTime) }}
            </div>
            <div v-if="roomSlot.slots.available" class="slot-available"></div>
            <div
                v-if="!roomSlot.slots.available"
                class="slot-not-available"
            ></div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["roomSlot"],
    methods: {
        getHour(endTime) {
            const date = new Date(endTime);
            const minutes = String(date.getMinutes())
                .padStart(2, "0")
                .padEnd(2, "0");

            return date.getHours() + ":" + minutes;
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
}

.slot-time {
    width: 50%;
    color: var(--v-dark-base);
    text-align: center;
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
