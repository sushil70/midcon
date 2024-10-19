"use client";

import { useMoviesTableData } from "@/action/globalStore";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Details() {
  const params = useParams();
  const id: any = params.title;

  const { data } = useMoviesTableData();

  const [singleData, setSingleData] = useState({
    introduction: "",
    topics: [],
  });

  useEffect(() => {
    setSingleData(
      data[
        Object.keys(data).filter(
          (key) => key.replace(/ /g, "-") === id.replace(/%3A/g, ":")
        )[0]
      ]
    );
  }, [data, id]);

  console.log(
    "asafafdafasfds",
    id.replace(/%3A/g, ":"),
    Object.keys(data).filter((key) => key.replace(/ /g, "-") === id)
  );

  return (
    <>
      <div className="width-full max-w-2xl mx-auto px-4 py-16" key={id}>
        <h1 className="text-6xl pb-10 text-gray-950 font-extrabold  ">
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
    </>
  );
}
