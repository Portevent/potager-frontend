import {Hat} from "~/models/hat";

class LeekDTO {

    id: number;
    name: string;
    level: number;
    capital: number;
    talent: number;
    skin: number;
    leeks: { number: LeekDTO };
    hat: Hat;
    ai: number;
    weapon: number;
    title: number[];
    metal: boolean;
    face: number;
    life: number;
    strength: number;
    wisdom: number;
    agility: number;
    resistance: number;
    science: number;
    magic: number;
    frequency: number;
    cores: number;
    ram: number;
    tp: number;
    mp: number;
    total_life: number;
    total_strength: number;
    total_wisdom: number;
    total_agility: number;
    total_resistance: number;
    total_science: number;
    total_magic: number;
    total_frequency: number;
    total_cores: number;
    total_ram: number;
    total_tp: number;
    total_mp: number;


    constructor(id: number, leeks: { number: LeekDTO }, name: string, level: number, capital: number, talent: number, skin: number, hat: Hat, ai: number, weapon: number, title: number[], metal: boolean, face: number, life: number, strength: number, wisdom: number, agility: number, resistance: number, science: number, magic: number, frequency: number, cores: number, ram: number, tp: number, mp: number, total_life: number, total_strength: number, total_wisdom: number, total_agility: number, total_resistance: number, total_science: number, total_magic: number, total_frequency: number, total_cores: number, total_ram: number, total_tp: number, total_mp: number) {
        this.id = id;
        this.name = name;
        this.leeks = leeks;
        this.level = level;
        this.capital = capital;
        this.talent = talent;
        this.skin = skin;
        this.hat = hat;
        this.ai = ai;
        this.weapon = weapon;
        this.title = title;
        this.metal = metal;
        this.face = face;
        this.life = life;
        this.strength = strength;
        this.wisdom = wisdom;
        this.agility = agility;
        this.resistance = resistance;
        this.science = science;
        this.magic = magic;
        this.frequency = frequency;
        this.cores = cores;
        this.ram = ram;
        this.tp = tp;
        this.mp = mp;
        this.total_life = total_life;
        this.total_strength = total_strength;
        this.total_wisdom = total_wisdom;
        this.total_agility = total_agility;
        this.total_resistance = total_resistance;
        this.total_science = total_science;
        this.total_magic = total_magic;
        this.total_frequency = total_frequency;
        this.total_cores = total_cores;
        this.total_ram = total_ram;
        this.total_tp = total_tp;
        this.total_mp = total_mp;
    }
}

export {LeekDTO}