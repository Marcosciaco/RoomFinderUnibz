export default class Slot {
    /**
     * Defines a slot.
     * @param {string} startTime ...start time of the slot
     * @param {string} endTime ...end time of the slot
     * @param {boolean} available ...if the room is available
     */
    constructor(startTime, endTime, available, description) {
        this.start = startTime;
        this.end = endTime;
        this.description = description;
        this.available = available;
    }
}
