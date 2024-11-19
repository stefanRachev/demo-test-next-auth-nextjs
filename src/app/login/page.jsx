import { login } from "@/action/user";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IconBrandGithub } from "@tabler/icons-react";
import { IconBrandGoogle } from "@tabler/icons-react";
import Link from "next/link";


const Login = () => {
  return (
    <div className="mt-10 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white border border-[#121212] dark:bg-neutral-900">
      <form className="my-8" action={login}>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          placeholder="example@domain.com"
          type="email"
          name="email"
          className="w-full"
        ></Input>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          placeholder="example@domain.com"
          type="password"
          name="password"
          className="w-full"
        ></Input>

        <Button className="mt-4 w-full">Login &rarr;</Button>

        <p>
          Don't have account? <Link href="/register">Register</Link>
        </p>
      </form>

      <section className="flex space-x-4">
        <form action="">
          <Button className="flex items-center space-x-2 bg-gray-200 text-black hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
            <IconBrandGithub className="h-6 w-6" />
            <span className="text-sm">Github</span>
          </Button>
        </form>

        <form action="">
          <Button className="flex items-center space-x-2 bg-gray-200 text-black hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
            <IconBrandGoogle className="h-6 w-6" />
            <span className="text-sm">Google</span>
          </Button>
        </form>
      </section>
    </div>
  );
};

export default Login;
