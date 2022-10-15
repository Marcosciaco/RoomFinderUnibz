export default class Slot {
    /**
     * Defines a slot.
     * @param {string} startTime ...start time of the slot
     * @param {string} endTime ...end time of the slot
     * @param {boolean} available ...if the room is available
     */
    constructor(startTime, endTime, available) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.available = available;
    }
}
