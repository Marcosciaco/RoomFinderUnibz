import RoomSlot from "@/model/RoomSlot";
import Room from "@/model/Room";
import Slot from "@/model/Slot";
import axios from "axios";

const state = {
    roomSlots: ([] = []),
    loadedRoomSlots: false,
};

const actions = {
    loadRoomSlots({ commit }) {
        if (!state.loadedRoomSlots) {
            state.roomSlots = [];
            axios
                .get(
                    "https://europe-west1-unibz-room-finder.cloudfunctions.net/roomsTimeSlots"
                )
                .then((response) => {
                    response.data.data.forEach((roomSlot) => {
                        parseRoomSlot(commit, roomSlot);
                    });
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

    const free = roomSlot.freeSlots.filter((slot) => {
        return new Date(slot.end) >= Date.now() || slot.end == null;
    });
    const occ = roomSlot.reservedSlots.filter((slot) => {
        return new Date(slot.end) >= Date.now() || slot.end == null;
    });

    const freeSlot = free[0];
    const reservedSlot = occ[0];

    const actual =
        free.length > occ.length
            ? new Slot(freeSlot.start, freeSlot.end, true, freeSlot.description)
            : new Slot(
                  reservedSlot.start,
                  reservedSlot.end,
                  false,
                  reservedSlot.description
              );

    commit(
        "addRoomSlot",
        new RoomSlot(room, roomSlot.reservedSlots, roomSlot.freeSlots, actual)
    );
}
