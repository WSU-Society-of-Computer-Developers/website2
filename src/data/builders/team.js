export default class Team {
    constructor(members = []) {
        this.members = members
    }
    addMember(name, title, contact, img) {
        this.members.push({ name, title, contact, img })
        return this
    }
    getMembers() {
        return this.members
    }
}