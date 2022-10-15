export default class RoomSlot {
    /**
     * Defines a room slot.
     * @param {Room} room ...The room of the room slot
     * @param {Slot[]} slots ...The slot of the room slot
     */
    constructor(room, slots) {
        this.room = room;
        this.slots = slots;
    }
}
