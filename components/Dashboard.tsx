// import { apiFetch } from "@/lib/apiFetch";
// import Navbar from "./Navbar";
// import { cookies } from "next/headers";
// import { Journal } from "@/lib/types";
// import Card from "./Card";
// import { redirect } from "next/navigation";

// async function Dashboard() {
//   // const token = (await cookies()).get("token")?.value;

//   const response = await apiFetch("http://localhost:3000/api/get-journals", {
//     cache: "no-cache",
//     method: "GET",
//     credentials: "include",
//   });
//   const result = await response.json();

//   //todo redirect to login page if not authenticated
//   if (result.error == "Not authenticated") redirect('/login')
//   if(result.length == 0) redirect('/login')
//   console.log(result);
//   return (
//     <div>
//       <Navbar />
//       {result?.map((journal: Journal) => (
//         <div key={journal.id}>
//           <Card journal= {journal}/>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Dashboard;

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  BookText,
  PlusCircle,
  Search,
  Calendar,
  BookOpen,
  TrendingUp,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { apiFetch } from "@/lib/apiFetch";
import { truncateContent } from "@/lib/utils";
import { useAuth } from "@/app/context/AuthContext";

export default function Dashboard() {

  const { logout } = useAuth()
  const recentEntries = getEntry()

  async function getEntry() {
    const response = await apiFetch("http://localhost:3000/api/get-journals", {
      cache: "no-cache",
      method: "GET",
      credentials: "include",
    });
    const result = await response.json();
    return result;
    
  }

  async function handleLogout() {
    console.log("logout function called")
    await logout()
    redirect('/login')
  }

  // const response = await apiFetch("http://localhost:3000/api/get-journals", {
  //   cache: "no-cache",
  //   method: "GET",
  //   credentials: "include",
  // });
  // const recentEntries = await response.json();

  // todo redirect to login page if not authenticated
  // if (result.error == "Not authenticated") redirect('/login')
  // if(result.length == 0) redirect('/login')

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <BookText className="h-8 w-8 text-primary" />
              <span className="ml-2 text-2xl font-bold text-primary">
                journal.io
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
              <Button variant="outline" onClick={handleLogout}>Sign Out</Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Your Journal</h1>
          <Link href="/canvas">
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              New Entry
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search entries..."
                // value={searchQuery}
                // onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <nav className="space-y-2">
              <Button variant="ghost" className="w-full justify-start">
                <BookOpen className="mr-2 h-4 w-4" />
                All Entries
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Calendar className="mr-2 h-4 w-4" />
                Calendar
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <TrendingUp className="mr-2 h-4 w-4" />
                Insights
              </Button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Entries</CardTitle>
                <CardDescription>
                  Your latest journal entries and thoughts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* {recentEntries.map((entry: any) => (
                    <div
                      key={entry.id}
                      className="flex p-4 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">{entry.title}</h3>
                        <span className="text-sm text-muted-foreground">
                          {entry.date}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {truncateContent(entry.content, 100)}
                      </p>
                      <div className="flex justify-end w-full">
                        <Link href={`/journal/${entry.id}`}>
                          <Button>View</Button>
                        </Link>
                      </div>
                    </div>
                  ))} */}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Writing Streak</CardTitle>
                  <CardDescription>Your journaling consistency</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">7 days</div>
                  <p className="text-muted-foreground">
                    Keep up the great work!
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Entries</CardTitle>
                  <CardDescription>Your writing activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">12</div>
                  <p className="text-muted-foreground">entries this month</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
