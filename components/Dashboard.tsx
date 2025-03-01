import { apiFetch } from "@/lib/apiFetch";
import Navbar from "./Navbar";
import { cookies } from "next/headers";
import { Journal } from "@/lib/types";
import Card from "./Card";
import { redirect } from "next/navigation";

async function Dashboard() {
  // const token = (await cookies()).get("token")?.value;

  const response = await apiFetch("http://localhost:3000/api/get-journals", {
    cache: "no-cache",
    method: "GET",
    credentials: "include",
  });
  const result = await response.json();

  //todo redirect to login page if not authenticated
  if (result.error == "Not authenticated") redirect('/login')
  if(result.length == 0) redirect('/login')
  console.log(result);
  return (
    <div>
      <Navbar />
      {result.map((journal: Journal) => (
        <div key={journal.id}>
          <Card journal= {journal}/>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
