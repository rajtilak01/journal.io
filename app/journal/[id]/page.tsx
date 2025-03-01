import { apiFetch } from "@/lib/apiFetch";
import { notFound } from "next/navigation";

export default async function Journal({ params }: {params: any}) {
    const { id } = await params;
    const response = await apiFetch(`http://localhost:3000/api/get-journal-byId?id=${id}`);

    if (!response.ok) {
        return notFound(); 
    }
    const data = await response.json();
    
    return (
        <div>
            <h1>Journal Page</h1>
            <p>Journal ID: {data.data.id}</p>
            <h2>Journal content: {data.data.content}</h2>
        </div>
    );
}
