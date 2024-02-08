import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger, MyMenubar,
} from "@/components/ui/menubar"
import { signOut } from "firebase/auth";
import Link from "next/link";

export function SignoutModel() {
    return (
        <MyMenubar>
            <MenubarMenu>
                <MenubarTrigger>Menu</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        <Link href={'/profile'} >Profile</Link>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                        <signOut/>
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </MyMenubar>
    )
}
