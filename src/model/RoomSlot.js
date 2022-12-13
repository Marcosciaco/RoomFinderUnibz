export default class RoomSlot {
    /**
     * Defines a room slot.
     * @param {string} id ...The id of the room slot.
     * @param {Room} room ...The room of the room slot
     * @param {Slot} slots ...The slot of the room slot
     */
    constructor(room, reservedSlots, freeSlots, actual) {
        this.room = room;
        this.actual = actual;
        this.reservedSlots = reservedSlots;
        this.freeSlots = freeSlots;
    }
}
