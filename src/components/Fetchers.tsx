import { promises as fs } from 'fs';

export async function getDirectory() {
    const DB = await fs.readFile(process.cwd() + "/public/Data/Directory.json", 'utf-8')

    return JSON.parse(DB)
}

export async function getPhotos() {
    const DB = await fs.readFile(process.cwd() + "/public/Data/juliaPhotos.json", 'utf-8')

    return JSON.parse(DB).Photos
}

export async function getContacts() {
    const DB = await fs.readFile(process.cwd() + "/public/Data/contactInfo.json", 'utf-8')

    return JSON.parse(DB)
}