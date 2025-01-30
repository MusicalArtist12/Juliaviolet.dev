import { promises as fs } from 'fs'
import path from 'path'

export async function getDirectory() {
    const DB = await fs.readFile(path.join(process.cwd() + "/public/Data/Directory.json"), 'utf-8')

    return JSON.parse(DB)
}

export async function getPhotos() {
    const DB = await fs.readFile(path.join(process.cwd() + "/public/Data/Photos.json"), 'utf-8')

    return JSON.parse(DB).juliaPhotos
}

export async function getContacts() {
    const DB = await fs.readFile(path.join(process.cwd() + "/public/Data/contactInfo.json"), 'utf-8')

    return JSON.parse(DB)
}

export async function getOnionPhotos() {
    const DB = await fs.readFile(path.join(process.cwd() + "/public/Data/Photos.json"), 'utf-8')

    return JSON.parse(DB).onionPhotos
}