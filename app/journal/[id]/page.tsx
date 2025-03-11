import { apiFetch } from "@/lib/apiFetch";
import { notFound, redirect } from "next/navigation";
import parse from "html-react-parser";
import Navbar from "@/components/Navbar";

export default async function Journal({ params }: { params: any }) {
  const { id } = params;
  const response = await apiFetch(
    `http://localhost:3000/api/get-journal-byId?id=${id}`
  );

  if (!response.ok) {
    return redirect("/login");
  }
  const data = await response.json();

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-1 overflow-auto p-4 md:p-6 border-solid">
        <p className="prose lg:prose-lg">{parse(data.data.content)}</p>
        </div>
      <div>
      </div>
    </div>
  );
}
