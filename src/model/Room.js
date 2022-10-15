export default class Room {
    /**
     * Defines a room.
     * @param {string} campus ...BZ or BK
     * @param {string} building ...Which building the room is in A, E,...
     * @param {string} roomNumber ...containing floor and room number
     */
    constructor(campus, building, roomNumber) {
        this.campus = campus;
        this.building = building;
        this.roomName = roomNumber;
    }
}
