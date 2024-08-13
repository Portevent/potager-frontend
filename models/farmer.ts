class Farmer {
    id: number;
    login: string;
    team_id: number;
    name: string;
    talent: number;
    talent_more: number;
    victories: number;
    draws: number;
    defeats: number;
    ratio: string;
    last_connection: number;
    register_date: number;
    admin: boolean;
    moderator: boolean;
    country: string;
    godfather_id: number;
    godsons_id: number[];
    color: string;
    banned: boolean;
    won_solo_tournaments: number;
    won_farmer_tournaments: number;
    won_team_tournaments: number;
    won_battle_royale: number;
    total_level: number;
    leek_count: number;
    in_garden: boolean;
    fights: number;
    team_fights: number;
    github: string;
    website: string;
    forum_messages: number;
    didactitiel_seen: boolean;
    contributor: boolean;
    trophies: number;
    points: number;
    language: string;
    title: string[];
    show_ai_lines: boolean;
    ranking: number;
    verified: boolean;
    tutorial_progress: number;
    group: string;
    supervised_group: string;
    bank_enabled: boolean;
    public_chat_enabled: boolean;
    buy_fights_enabled: boolean;
    tournaments_enabled: boolean;
    br_enabled: boolean;
    equipment_enabled: boolean;
    can_create_leek: boolean;
    godsons_level: number;
    pass: boolean;
    habs: number;
    crystals: number;
    tournament_registered: boolean;
    tournament_current: number;
    candidacy: string;


    constructor(id: number, login: string, team_id: number, name: string, talent: number, talent_more: number, victories: number, draws: number, defeats: number, ratio: string, last_connection: number, register_date: number, admin: boolean, moderator: boolean, country: string, godfather_id: number, godsons_id: number[], color: string, banned: boolean, won_solo_tournaments: number, won_farmer_tournaments: number, won_team_tournaments: number, won_battle_royale: number, total_level: number, leek_count: number, in_garden: boolean, fights: number, team_fights: number, github: string, website: string, forum_messages: number, didactitiel_seen: boolean, contributor: boolean, trophies: number, points: number, language: string, title: string[], show_ai_lines: boolean, ranking: number, verified: boolean, tutorial_progress: number, group: string, supervised_group: string, bank_enabled: boolean, public_chat_enabled: boolean, buy_fights_enabled: boolean, tournaments_enabled: boolean, br_enabled: boolean, equipment_enabled: boolean, can_create_leek: boolean, godsons_level: number, pass: boolean, habs: number, crystals: number, tournament_registered: boolean, tournament_current: number, candidacy: string) {
        this.id = id;
        this.login = login;
        this.team_id = team_id;
        this.name = name;
        this.talent = talent;
        this.talent_more = talent_more;
        this.victories = victories;
        this.draws = draws;
        this.defeats = defeats;
        this.ratio = ratio;
        this.last_connection = last_connection;
        this.register_date = register_date;
        this.admin = admin;
        this.moderator = moderator;
        this.country = country;
        this.godfather_id = godfather_id;
        this.godsons_id = godsons_id;
        this.color = color;
        this.banned = banned;
        this.won_solo_tournaments = won_solo_tournaments;
        this.won_farmer_tournaments = won_farmer_tournaments;
        this.won_team_tournaments = won_team_tournaments;
        this.won_battle_royale = won_battle_royale;
        this.total_level = total_level;
        this.leek_count = leek_count;
        this.in_garden = in_garden;
        this.fights = fights;
        this.team_fights = team_fights;
        this.github = github;
        this.website = website;
        this.forum_messages = forum_messages;
        this.didactitiel_seen = didactitiel_seen;
        this.contributor = contributor;
        this.trophies = trophies;
        this.points = points;
        this.language = language;
        this.title = title;
        this.show_ai_lines = show_ai_lines;
        this.ranking = ranking;
        this.verified = verified;
        this.tutorial_progress = tutorial_progress;
        this.group = group;
        this.supervised_group = supervised_group;
        this.bank_enabled = bank_enabled;
        this.public_chat_enabled = public_chat_enabled;
        this.buy_fights_enabled = buy_fights_enabled;
        this.tournaments_enabled = tournaments_enabled;
        this.br_enabled = br_enabled;
        this.equipment_enabled = equipment_enabled;
        this.can_create_leek = can_create_leek;
        this.godsons_level = godsons_level;
        this.pass = pass;
        this.habs = habs;
        this.crystals = crystals;
        this.tournament_registered = tournament_registered;
        this.tournament_current = tournament_current;
        this.candidacy = candidacy;
    }
}

const FarmerTests: Farmer[] = [
    {
        id: 1,
        login: "farmer_a",
        team_id: -1,
        name: "Farmer A",
        talent: 875,
        talent_more: 775,
        victories: 678,
        draws: 163,
        defeats: 694,
        ratio: "0.8",
        last_connection: 13200,
        register_date: 120000,
        admin: false,
        moderator: false,
        country: "",
        godfather_id: -1,
        godsons_id: [],
        color: "",
        banned: false,
        won_solo_tournaments: 12,
        won_farmer_tournaments: 10,
        won_team_tournaments: 11,
        won_battle_royale: 6,
        total_level: 400,
        leek_count: 3,
        in_garden: true,
        fights: 600,
        team_fights: 200,
        github: "",
        website: "",
        forum_messages: 0,
        didactitiel_seen: true,
        contributor: false,
        trophies: 520,
        points: 1250,
        language: "",
        title: [],
        show_ai_lines: false,
        ranking: 900,
        verified: true,
        tutorial_progress: 10,
        group: "",
        supervised_group: "",
        bank_enabled: true,
        public_chat_enabled: true,
        buy_fights_enabled: true,
        tournaments_enabled: true,
        br_enabled: true,
        equipment_enabled: true,
        can_create_leek: false,
        godsons_level: 478,
        pass: false,
        habs: 1980,
        crystals: 945,
        tournament_registered: false,
        tournament_current: 0,
        candidacy: "",
    },
    {
        id: 4,
        login: "farmer_d",
        team_id: 10,
        name: "Farmer D",
        talent: 1525,
        talent_more: 976,
        victories: 1786,
        draws: 268,
        defeats: 870,
        ratio: "1.4",
        last_connection: 13200,
        register_date: 120000,
        admin: false,
        moderator: false,
        country: "",
        godfather_id: 1,
        godsons_id: [],
        color: "",
        banned: false,
        won_solo_tournaments: 120,
        won_farmer_tournaments: 150,
        won_team_tournaments: 119,
        won_battle_royale: 56,
        total_level: 570,
        leek_count: 3,
        in_garden: false,
        fights: 0,
        team_fights: 0,
        github: "hey",
        website: "hey.org",
        forum_messages: 154,
        didactitiel_seen: true,
        contributor: false,
        trophies: 689,
        points: 1850,
        language: "",
        title: [],
        show_ai_lines: false,
        ranking: 54,
        verified: true,
        tutorial_progress: 10,
        group: "",
        supervised_group: "",
        bank_enabled: true,
        public_chat_enabled: true,
        buy_fights_enabled: true,
        tournaments_enabled: true,
        br_enabled: true,
        equipment_enabled: true,
        can_create_leek: false,
        godsons_level: 0,
        pass: false,
        habs: 9856821,
        crystals: 0,
        tournament_registered: true,
        tournament_current: 0,
        candidacy: "",
    },
    {
        id: 3,
        login: "farmer_c",
        team_id: -1,
        name: "Farmer C",
        talent: 120,
        talent_more: -10,
        victories: 25,
        draws: 16,
        defeats: 64,
        ratio: "0.5",
        last_connection: 13200,
        register_date: 120000,
        admin: false,
        moderator: false,
        country: "",
        godfather_id: 1,
        godsons_id: [],
        color: "",
        banned: false,
        won_solo_tournaments: 0,
        won_farmer_tournaments: 0,
        won_team_tournaments: 0,
        won_battle_royale: 0,
        total_level: 40,
        leek_count: 1,
        in_garden: true,
        fights: 100,
        team_fights: 0,
        github: "",
        website: "",
        forum_messages: 0,
        didactitiel_seen: true,
        contributor: false,
        trophies: 20,
        points: 120,
        language: "",
        title: [],
        show_ai_lines: false,
        ranking: 900,
        verified: true,
        tutorial_progress: 10,
        group: "",
        supervised_group: "",
        bank_enabled: true,
        public_chat_enabled: true,
        buy_fights_enabled: false,
        tournaments_enabled: false,
        br_enabled: false,
        equipment_enabled: true,
        can_create_leek: true,
        godsons_level: 0,
        pass: false,
        habs: 81861,
        crystals: 12,
        tournament_registered: false,
        tournament_current: 0,
        candidacy: "",
    }
]

export { Farmer, FarmerTests }
