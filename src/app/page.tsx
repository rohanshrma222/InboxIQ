import { SignIn, SignInButton } from "@clerk/nextjs";
import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { Button } from "~/components/ui/button";
import LinkAccountButton from "~/components/ui/link-account-button";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
    return(
      <div>
          
        <LinkAccountButton />
      </div>
      
)}
