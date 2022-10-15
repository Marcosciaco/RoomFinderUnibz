import RoomSlot from "@/model/RoomSlot";
import Slot from "@/model/Slot";
import Room from "@/model/Room";
import * as rooms from "@/assets/example.json";

const state = {
    roomSlots: [],
    loadedRoomSlots: false,
};

const actions = {
    loadRoomSlots({ commit }) {
        if (!state.loadedRoomSlots) {
            rooms.data.forEach((roomSlot) => {
                commit("addRoomSlot", parseRoomSlot(roomSlot));
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

function parseRoomSlot(roomSlot) {
    const slots = [];

    roomSlot.reservedSlots.forEach((slot) => {
        slots.push(new Slot(slot.start, slot.end));
    });

    roomSlot.freeSlots.forEach((slot) => {
        slots.push(new Slot(slot.start, slot.end));
    });

    const room = new Room(
        roomSlot.room.campus,
        roomSlot.room.building,
        roomSlot.room.name
    );

    const r = new RoomSlot(room, slots);

    console.log(r);

    return r;
}
