import Link from "next/link";
import { Button } from "../ui/button";
import { auth, signOut } from "@/auth";

const Navbar = async () => {
  const session = await auth();
  const user = session?.user;

  return (
    <nav className="flex justify-around items-center py-4 bg-gray-600 text-white">
      <Link href="/" className="text-xl font-bold">
        My Fancy Website
      </Link>

      <ul className="hidden md:flex space-x-4 list-none ">
        {!user ? (
          <>
            <li>
              <Link href="/login" className="hover:text-gray-400">
                Login
              </Link>
            </li>
            <li>
              <Link href="/register" className="hover:text-gray-400">
                Register
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="mt-2">
              <Link href="/private/dashboard" className="hover:text-gray-400">
                Dashboard
              </Link>
            </li>

            <form
              action={async () => {
                "use server";

                await signOut();
              }}
            >
              <Button type="submit" variant={"ghost"}>
                Logout
              </Button>
            </form>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
