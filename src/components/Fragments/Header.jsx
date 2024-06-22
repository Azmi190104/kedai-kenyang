import Button from "../Elements/Button";
import Input from "../Elements/Input/Input";
import Notification from "../Elements/Notification";
import Profile from "../Elements/Profile";


export default function Header(){
    return(
        <>
            <form action="" className="flex h-10 bg-slate-200 mx-auto rounded-md gap-2">
                    <Input type="text" placeholder="search"/>
                    <Button type="search"/>
            </form>
                {/* <section className="profile flex gap-3">
                    <Notification />
                    <Profile/>
                </section> */}
        </>
    )
}