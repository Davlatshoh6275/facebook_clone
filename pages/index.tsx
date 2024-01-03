import Head from "next/head";
import Header from "@/components/Header";
import { getSession } from "next-auth/react";
import LogIn from '@/components/LogIn'
export default function Home({ session }: any) {
  if (!session) return <LogIn />;

  return (
    <div>
      <Head>
        <title>Facebook</title>
      </Head>

      <Header />
    </div>
  );
}

export async function getServerSideProps(context: any) {
  // Get the user
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
