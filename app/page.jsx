import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";
import Landing from "@/components/home/landing";
import Unauthorized from "@/components/home/unauthorized";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
      <>
          {
              session !== null ? (
                  <Landing/>
              ) : (
                  <Unauthorized/>
              )}
      </>
  );
}
