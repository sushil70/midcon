"use client";
import { useMoviesTableData, useRedirectData } from "@/action/globalStore";
import { decryptData } from "@/app/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Details() {
  const intervalRef = useRef<any>();
  const route = useRouter();
  const params = useParams();
  const id: any = params.title;
  const searchParam = useSearchParams();
  const searchId = searchParam.get("id");

  const { setRedirectData, redirectData } = useRedirectData();

  const { data }: { data: { [key: string]: any } } = useMoviesTableData();

  const [singleData, setSingleData] = useState({
    introduction: "",
    topics: [],
    images: [],
  });
  const [countdown, setCountdown] = useState<any>(10);

  useEffect(() => {
    setRedirectData("");
    setSuggestedData(
      Object.keys(data)
        .sort(() => 0.5 - Math.random()) // Shuffle array
        .slice(0, 4)
    );
  }, []);

  useEffect(() => {
    setSingleData(
      data[
        Object.keys(data).filter(
          (key) => key.replace(/ /g, "-") === id.replace(/%3A/g, ":")
        )[0]
      ]
    );
  }, [data, id]);

  useEffect(() => {
    const redirect = async () => {
      if (searchId) {
        console.log("searchId", searchId, searchId.split("."));
        const data = await decryptData(
          searchId.split(".")[0],
          searchId.split(".")[1]
        );
        console.log("data", data);
        setRedirectData(data);
        route.push(window.location.pathname);
      }
    };

    redirect();
  }, [searchId]);

  const [suggestedData, setSuggestedData] = useState<string[]>([]);

  useEffect(() => {
    if (countdown <= 0) {
      clearInterval(intervalRef.current);
    }
  }, [countdown]);

  return (
    <>
      <div className="flex ">
        <div className="w-2/3">
          {redirectData && countdown === 10 ? (
            <div>
              Please Click On Continue Button to Verify Yourself !
              <Button
                onClick={() => {
                  intervalRef.current = setInterval(() => {
                    setCountdown(
                      (startCountdown: number) => startCountdown - 1
                    );
                  }, 1000); // every 1 second
                }}
              >
                Click to Continue
              </Button>
            </div>
          ) : redirectData && countdown !== 0 ? (
            <div>Generating Link ! Please Wait... {countdown}</div>
          ) : redirectData && countdown === 0 ? (
            <Link
              href="https://www.cpmrevenuegate.com/vwrnu7j3i?key=88b640274ca08379c1400d8b92be5d92"
              onClick={() => {
                window.open(redirectData, "_blank");
              }}
            >
              Get Link
            </Link>
          ) : (
            ""
          )}
          <div className="w-2/3 m-auto  ">
            <Image
              src={singleData?.images[0]}
              alt={
                Object.keys(data).filter(
                  (key) => key.replace(/ /g, "-") === id.replace(/%3A/g, ":")
                )[0]
              }
              width={1500}
              height={800}
              object-fit="fill"
            />
          </div>
          <div className="width-full max-w-2xl mx-auto px-4 py-16" key={id}>
            <h1 className="text-4xl pb-10 text-gray-950 font-extrabold  ">
              {
                Object.keys(data).filter(
                  (key) => key.replace(/ /g, "-") === id.replace(/%3A/g, ":")
                )[0]
              }
            </h1>
            <div className="text-lg text-gray-700 mb-6">
              {singleData?.introduction}
            </div>
            {singleData?.topics.map((topic: any, topicIdx: number) => (
              <div key={topicIdx} className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {topic.title}
                </h2>
                {topic.content.map((content: any, contentIdx: number) => (
                  <div key={contentIdx} className="mb-4">
                    {content.subtitle && (
                      <h3 className="text-xl font-medium text-gray-800 mb-2">
                        {content.subtitle}
                      </h3>
                    )}
                    {content.text && (
                      <p className="text-gray-700 mb-2">{content.text}</p>
                    )}
                    {content.list && (
                      <ul className="list-disc pl-5 space-y-1">
                        {content.list.map((item: any, itemIdx: number) => (
                          <li key={itemIdx} className="text-gray-700">
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="flex justify-between mx-24 mb-12">
            {Object.keys(data).findIndex(
              (key) => key.replace(/ /g, "-") === id.replace(/%3A/g, ":")
            ) > 0 && (
              <Link
                className="w-1/2 mx-2 p-2 hover:bg-zinc-300"
                href={`/post/${encodeURIComponent(
                  Object.keys(data)[
                    Object.keys(data).findIndex(
                      (key) =>
                        key.replace(/ /g, "-") === id.replace(/%3A/g, ":")
                    ) - 1
                  ].replace(/ /g, "-")
                )}`}
              >
                <div className="text-sm text-gray-700">Previous Topic</div>
                {
                  Object.keys(data)[
                    Object.keys(data).findIndex(
                      (key) =>
                        key.replace(/ /g, "-") === id.replace(/%3A/g, ":")
                    ) - 1
                  ]
                }
                <div className="text-xs text-gray-700">
                  {Object.values(data)[
                    Object.keys(data).findIndex(
                      (key) =>
                        key.replace(/ /g, "-") === id.replace(/%3A/g, ":")
                    ) - 1
                  ]?.introduction?.slice(0, 100)}
                </div>
              </Link>
            )}
            {Object.keys(data).length - 1 >
              Object.keys(data).findIndex(
                (key) => key.replace(/ /g, "-") === id.replace(/%3A/g, ":")
              ) && (
              <Link
                className="w-1/2 mx-2 p-2 hover:bg-zinc-300"
                href={`/post/${encodeURIComponent(
                  Object.keys(data)[
                    Object.keys(data).findIndex(
                      (key) =>
                        key.replace(/ /g, "-") === id.replace(/%3A/g, ":")
                    ) + 1
                  ].replace(/ /g, "-")
                )}`}
              >
                <div className="text-sm text-gray-700">Next Topic</div>
                {
                  Object.keys(data)[
                    Object.keys(data).findIndex(
                      (key) =>
                        key.replace(/ /g, "-") === id.replace(/%3A/g, ":")
                    ) + 1
                  ]
                }
                <div className="text-xs text-gray-700">
                  {Object.values(data)[
                    Object.keys(data).findIndex(
                      (key) =>
                        key.replace(/ /g, "-") === id.replace(/%3A/g, ":")
                    ) + 1
                  ]?.introduction?.slice(0, 100) ?? ""}
                </div>
              </Link>
            )}
          </div>
        </div>
        <aside className="w-[370px]">
          {/* <Card>
            <CardHeader>
              <CardTitle>Search</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="flex space-x-2">
                <Input
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <Button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    const filteredDataTemp: any = {};
                    Object.keys(data).map((post) => {
                      if (post.toLowerCase().includes(search.toLowerCase())) {
                        filteredDataTemp[post] = data[post];
                      }
                    });
                    setFilteredData(filteredDataTemp);
                  }}
                >
                  Search
                </Button>
              </form>
            </CardContent>
          </Card> */}

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Suggested</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {suggestedData.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={`/post/${encodeURIComponent(
                        item.replace(/ /g, "-")
                      )}`}
                      className="block hover:underline text-lg font-semibold"
                    >
                      {item}
                    </Link>
                    <div className="text-sm text-muted-foreground mb-10">
                      {data[item]?.introduction?.slice(0, 100)}...
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </aside>
      </div>
    </>
  );
}
