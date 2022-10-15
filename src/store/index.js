import Vue from "vue";
import Vuex from "vuex";
import RoomSlotsModule from "./modules/RoomSlotsModule";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        RoomSlotsModule,
    },
});
