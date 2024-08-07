import { promises as fs } from 'fs';

export interface Contact {
    name: string,
    handle: string,
    link: string,
    description: string,
    logo: string
}

export interface BadgeInfo {
    path: string,
    rarity: number
}

export interface DirInfo {
    type: "friend" | "site",
    name: string,
    nickname: string | undefined,
    callsign: string | undefined,
    badges: BadgeInfo[],
    badgeText: string | undefined,
    link: string,
    colors: string[],
    hasOneko: boolean | undefined
}

export interface PhotoInfo {
    location: string,
    title: string
}

export async function getDirectory(): Promise<DirInfo[]> {
    let DB = await fs.readFile(process.cwd() + "/public/Data/Directory.json", 'utf-8')

    return JSON.parse(DB)
}

export async function getPhotos(): Promise<PhotoInfo[]> {
    let DB = await fs.readFile(process.cwd() + "/public/Data/juliaPhotos.json", 'utf-8')

    return JSON.parse(DB)
}

export async function getContacts() {
    let DB = await fs.readFile(process.cwd() + "/public/Data/contactInfo.json", 'utf-8')

    return JSON.parse(DB)
}