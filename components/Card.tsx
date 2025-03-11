import { Journal } from "@/lib/types";
import { dateConverter, truncateContent } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Card({ journal }: { journal: Journal }) {
 

  return (
    <div className="border border-gray-200 p-4 m-4 rounded-lg flex justify-between items-center">
      <div className="w-3/4">
        <p className="text-gray-500 text-sm">
          Date: {dateConverter(journal.createdAt).date} | Time:{" "}
          {dateConverter(journal.createdAt).time}
        </p>
        <p>{truncateContent(journal.content, 100)}</p> 
        <p className="text-xs text-gray-400">Journal ID: {journal.id}</p>
      </div>
      <Link href={`/journal/${journal.id}`}>
        <Button>View</Button>
      </Link>
    </div>
  );
}
