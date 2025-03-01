import { Journal } from "@/lib/types";
import { dateConverter } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Card({ journal }: { journal: Journal }) {
  return (
    <div className="border border-gray-200 p-4 m-4 rounded-lg flex justify-between">
      <div className="">
        <p>
          Date: {dateConverter(journal.createdAt).date} Time:{" "}
          {dateConverter(journal.createdAt).time}
        </p>
        <p>{journal.content}</p>
        <p>Journal id: {journal.id}</p>
      </div>
      <Link href={`/journal/${journal.id}`}>
        <Button>View</Button>
      </Link>
    </div>
  );
}
