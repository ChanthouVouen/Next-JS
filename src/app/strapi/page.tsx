import axios from 'axios';

async function getStrapiDate(path: string){
    const baseUrl = "http://localhost:1337";
    try {
        const response = await axios(baseUrl+path);
        return response.data;
      } catch (error) {
        console.error('Error retrieving data:', error);
        throw new Error('Could not get data');
      }
}



export default async function strape(){
    const strapiData = await getStrapiDate('/api/home-page');
    console.log(strapiData);

    return (
        <main>
            <h1>Strape Page</h1>
        </main>
    )
}