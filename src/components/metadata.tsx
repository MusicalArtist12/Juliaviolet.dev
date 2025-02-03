
export default interface metaData {
    header?: {
        title: string | undefined;
        subtitle: string | undefined;
        githubLink: string | undefined;
        people: string[] | undefined;
        link: string | undefined;    
        publishDate?: string | undefined;
        photos?: string[] | undefined;
    
    } | undefined;

    
    slug: string;
    
    galleryImages?: string[] | undefined;
}