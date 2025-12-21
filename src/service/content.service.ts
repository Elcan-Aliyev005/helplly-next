export default async function  getHomePageData(endpoint: string, locale: string | Array<string>){
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`,
        {
            headers: {
                lang: typeof locale== "string" ? locale : 'az' ,
                'x-api-key': process.env.NEXT_PUBLIC_API_KEY!
            },
            next: { revalidate: 0 }
        }
    );
    if (!res.ok) {
        throw new Error('Failed to fetch homepage data');
    }
    const data = await res.json();
    return data.data
}