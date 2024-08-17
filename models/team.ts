class Team {
    id: number;
    name: string;
    level: number;
    emblem_changed: number;
    chat: number;
    member_level: number;

    constructor(id: number, name: string, level: number, emblem_changed: number, chat: number, member_level: number) {
        this.id = id;
        this.name = name;
        this.level = level;
        this.emblem_changed = emblem_changed;
        this.chat = chat;
        this.member_level = member_level;
    }
}

export { Team }
