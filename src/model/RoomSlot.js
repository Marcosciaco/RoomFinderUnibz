import { v4 as uuidv4 } from "uuid";

export default class RoomSlot {
    /**
     * Defines a room slot.
     * @param {string} id ...The id of the room slot.
     * @param {Room} room ...The room of the room slot
     * @param {Slot} slots ...The slot of the room slot
     */
    constructor(room, slot) {
        this.id = uuidv4();
        this.room = room;
        this.slots = slot;
    }
}
