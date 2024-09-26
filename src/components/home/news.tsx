import { title } from "process"

export default function BarceNews() {


    const data = [
        {'id': 1, image: 'https://www.fcbarcelona.com/photo-resources/2024/05/26/ff93c330-4bcb-48cc-b1f0-36060195a227/2024-05-26_SEVILLAvsFCB_142.JPG?width=640&height=400', title: 'Eric Gacia, Curbarci, and Fermin going for gold'},
        {'id': 2, image: 'https://www.fcbarcelona.com/photo-resources/2024/08/05/5d95900d-9a95-49d5-9807-891817fd61fb/_MGA3173.jpg?width=640&height=400', title: 'Ture Enter finall stretch'},
        {'id': 3, image: 'https://www.fcbarcelona.com/photo-resources/2024/08/05/6c7974fc-a975-4d77-82d5-dad89d710843/Q3_Barc-a_Kitchen_3200x2000_LL.png?width=640&height=400', title: 'Barce Kitchen, the first blaugrana home delivery food services'},
        {'id': 4, image: 'https://www.fcbarcelona.com/photo-resources/2024/08/05/4714e0a3-16c7-4d74-adcc-98bf6198f231/2024-08-05_REVISIONSMEDIQUESPRIMEREQUIP_25.JPG?width=640&height=400', title: 'Yamal, Pedri, and Ferran back Ciutat at Esportiva'},
        {'id': 5, image: 'https://www.fcbarcelona.com/photo-resources/2024/08/05/df15071d-d737-4f37-8139-cf50f48c68f9/Premi-Cant-125-Aniversari.jpg?width=640&height=400', title: 'Winner of the 125th Anerversary song Contast'},
        {'id': 6, image: 'https://www.fcbarcelona.com/photo-resources/2024/08/05/55a22bb8-38dc-405c-8f02-62e1796438c4/South-Bronx-United.JPG?width=640&height=400', title: 'Joan Laporta visite Barce Foundation project in South Bronx'},
        {'id': 7, image: 'https://www.fcbarcelona.com/photo-resources/2024/08/04/f24ace6d-56a8-4906-9b62-930459de3ebf/_MGA7306.jpg?width=640&height=400', title: 'Relive the four El Classico win'},
        {'id': 8, image: 'https://www.fcbarcelona.com/photo-resources/2024/08/03/697cfa09-3cc7-45ce-af07-96ddc20c5eee/_GP18710.jpg?width=640&height=400', title: 'Relive the four El Classico win'}
    ]


    return (
        <div className="bg-gray-300" style={{height: 'auto', paddingTop: '30px', margin: '10px'}}>
            <h1 className="w-100 text-center font-bold text-4xl mt-5 mb-5 p-5">BARCE NEWS</h1>
            <div className="w-full relative grid grid-column-4 grid-rows-2 grid-flow-col justify-center gap-3 p-6">
                {data.map((item)=>{
                    return (
                        <a href="/news">
                        <div className="transform cursor-pointer h-64 bg-indigo-400 transition duration-500 hover:scale-105 flex flex-col justify-center items-start" style={{width: '300px'}}>
                            <img src={item.image} width={300} className="h-40" alt="" />
                            <div className="h-40" style={{background: 'white', width: '100%'}}>
                                <h1 className="text-center m-3 font-bold">{item.title}</h1>
                            </div> 
                        </div>
                        </a>
                    )
                })};
            </div>
        </div>
    )
}