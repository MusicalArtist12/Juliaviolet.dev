import { getDirectory } from '@/components/Fetchers'
import Directory from "./directory"

export default async function Page() {
    return <Directory Directory={await getDirectory()}/>
}

