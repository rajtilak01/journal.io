import { AlertTriangle } from "lucide-react";
import { Button } from "./ui/button";
import { useAuth } from "@/app/context/AuthContext";
import { redirect, useRouter } from "next/navigation";
import { deleteAccount } from "@/server/users.actions";

export default function DeleteSection() {
    const router = useRouter();
    const { user } = useAuth();
    async function handleDelete() {
        if (!user) return redirect('/');
        
        try {
            await deleteAccount(user.uid);
            alert("Your account has been successfully deleted.");
            router.push('/')
            // redirect('/');  
        } catch (error) {
            console.error("Error deleting account:", error);
            alert("Failed to delete account. Please try again.");
        }
    }


    return (
        <div className="flex flex-col justify-center items-center min-h-[60vh] p-4 md:p-8 rounded-2xl shadow-lg">
            <AlertTriangle className="text-red-500 w-16 h-16 mb-4" />
            <h1 className="text-3xl font-bold text-red-600 text-center">Are you sure you want to delete your account?</h1>
            <p className="text-sm md:text-base text-center text-red-500 mt-2 mb-6">
                Once deleted, all your data will be permanently lost and cannot be retrieved.
            </p>
            <Button
                variant="destructive" 
                className="w-full sm:w-1/2 md:w-1/3 py-2 text-lg"
                onClick={handleDelete}
                >
                Delete Account
            </Button>
        </div>
    );
}