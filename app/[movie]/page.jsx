import Image from "next/image"
 
//  export const revalidate = 12;

export default async function MovieDetail({params}){
    const {movie} = params
    const imagePath ="https://image.tmdb.org/t/p/original/"

    const data =  await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`,{next :{revalidate :0}}
    )
    // const data = await prisma.posts.findmany({next:{revalidate}})
    const res = await data.json()
    return(
        <div>
            <h2 className="text-2x1">{res.title}</h2>
            <h2 className="text-lg">{res.relelease_date}</h2>
            <h2>Runtime : {res.runtime} minutes</h2>
            <h2 className="bg-green-600 inline-block my-2 py-2 px-4">{res.status}</h2>
            <Image
            className="my-12 w-full"
            src={imagePath + res.backdrop_path}
            width={1000}
            height={1000}
            priority
            />
            <p>{res.overview}</p>
        </div>
    )
}