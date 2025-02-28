import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import React from "react";
import {
    LogOut
  } from "lucide-react"
import { logout } from "@/features/auth/authSlice"
import { useDispatch } from "react-redux";
 const AlertDialogDemo = () =>{
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);

    return (
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger >
            <div className="flex"> 
                <LogOut />
          <Button variant="ghost" className="">Log out</Button>
            </div>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure wants to Logout?</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => dispatch(logout())}>
            Yes, Log out
          </AlertDialogAction>          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }


  export default AlertDialogDemo
  