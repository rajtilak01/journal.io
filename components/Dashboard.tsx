import  { apiFetch } from "@/lib/apiClient";
import Navbar from "./Navbar";
import { cookies } from "next/headers";

async function Dashboard() {
  const token = (await cookies()).get("token")?.value;

  const response = await apiFetch("http://localhost:3000/api/get-journals", {
    cache: "no-cache",
    method: "GET",
    credentials: "include",
  });
  const result = await response.json();

  //todo redirect to login page if not authenticated
  if (result.error == "Not authenticated") return <h1>{result.error}</h1>;

  console.log(result);
  return (
    <div>
      <Navbar />
      Printing journals with token from cookies: {token || "No token found"}
    </div>
  );
}

export default Dashboard;
