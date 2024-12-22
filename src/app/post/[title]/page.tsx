"use server";

import { Metadata } from "next";
import Details from "./home";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const title = params.title;
  if (!title) {
    return {
      title: "MidCon Tips",
      description: "MidCon Tips",
    };
  }

  return {
    title: title,
    description: title,
  };
}

export default async function Page() {
  return <Details />;
}
