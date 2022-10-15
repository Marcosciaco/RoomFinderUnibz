import RoomSlot from "@/model/RoomSlot";
import Slot from "@/model/Slot";
import Room from "@/model/Room";
import * as rooms from "@/assets/example.json";

const state = {
    roomSlots: ([] = []),
    loadedRoomSlots: false,
};

const actions = {
    loadRoomSlots({ commit }) {
        if (!state.loadedRoomSlots) {
            rooms.data.forEach((roomSlot) => {
                parseRoomSlot(commit, roomSlot);
            });
            commit("setRoomSlotsLoaded", true);
        }
    },
};

const getters = {
    getRoomSlots: (state) => () => {
        return state.roomSlots;
    },

    haveRoomsSlotsBeenLoaded: (state) => {
        return state.loadedRoomSlots;
    },
};

const mutations = {
    addRoomSlot: (state, roomSlot) => {
        state.roomSlots.push(roomSlot);
    },

    resetRoomSlots: (state) => {
        state.roomSlots = [];
        state.loadedRoomSlots = false;
    },

    setRoomSlotsLoaded: (state, loadedRoomSlots) => {
        state.loadedRoomSlots = loadedRoomSlots;
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};

function parseRoomSlot(commit, roomSlot) {
    const room = new Room(
        roomSlot.room.campus,
        roomSlot.room.building,
        roomSlot.room.name
    );

    roomSlot.reservedSlots.forEach((slot) => {
        commit(
            "addRoomSlot",
            new RoomSlot(room, new Slot(slot.start, slot.end, false))
        );
    });

    roomSlot.freeSlots.forEach((slot) => {
        commit(
            "addRoomSlot",
            new RoomSlot(room, new Slot(slot.start, slot.end, true))
        );
    });

    state.roomSlots.sort((a, b) => {
        return new Date(a.slots.startTime) - new Date(b.slots.startTime);
    });
}
