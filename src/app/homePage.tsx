"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";
import { useMoviesTableData } from "@/action/globalStore";

export default function HomePage() {
  const { data, setPage, page } = useMoviesTableData();
  const skip = 5;
  return (
    <div className="flex flex-col min-h-screen">
      {/* <header className="border-b">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            MidCon Tips
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="hover:underline">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:underline">
                  PRIVACY POLICY
                </Link>
              </li>
              <li>
                <Link href="/tech" className="hover:underline">
                  TECH
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header> */}

      <main className="flex-grow container mx-auto px-4 py-8 w-2/3">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            {Object.keys(data)
              .slice((page - 1) * skip, (page - 1) * skip + skip)
              .map((post) => (
                <Card key={post} className="mb-8">
                  <CardHeader>
                    <CardTitle>
                      <Link
                        href={`/post/${encodeURIComponent(
                          post.replace(/ /g, "-")
                        )}`}
                        className="hover:underline"
                      >
                        {post}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {data[post].introduction}
                    </p>
                    {/* <div className="text-sm text-muted-foreground">
                    <span>ADMIN</span> / <span>MAY {30 }, 2024</span>
                  </div> */}
                  </CardContent>
                </Card>
              ))}

            <div className="flex justify-between items-center mt-8">
              <Button
                variant="outline"
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
              >
                Previous
              </Button>
              <div className="flex space-x-2">
                {Array.from({
                  length: Math.ceil((Object.keys(data).length || 0) / 5),
                }).map((item: any, i) => (
                  <>
                    <Button
                      variant={page === i + 1 ? "default" : "outline"}
                      key={i}
                      onClick={() => setPage(i + 1)}
                    >
                      {i + 1}
                    </Button>
                  </>
                ))}
              </div>
              <Button
                variant="outline"
                disabled={
                  page === Math.ceil((Object.keys(data).length || 0) / 5)
                }
                onClick={() => setPage(page + 1)}
              >
                Next
              </Button>
            </div>
          </div>

          <aside className="md:w-1/3">
            <Card>
              <CardHeader>
                <CardTitle>Search</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="flex space-x-2">
                  <Input placeholder="Search..." />
                  <Button type="submit">Search</Button>
                </form>
              </CardContent>
            </Card>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link href="/category/tech" className="hover:underline">
                      tech
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/category/uncategorized"
                      className="hover:underline"
                    >
                      Uncategorized
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>
    </div>
  );
}
