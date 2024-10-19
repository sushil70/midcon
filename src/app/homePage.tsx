import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
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
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Please verify that you are human.</CardTitle>
              </CardHeader>
              <CardContent>
                <Button>Click to verify</Button>
              </CardContent>
            </Card>

            {[1, 2, 3].map((post) => (
              <Card key={post} className="mb-8">
                <CardHeader>
                  <CardTitle>
                    <Link href={`/post/${post}`} className="hover:underline">
                      Blog Post Title {post}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    This is a preview of blog post {post}. Click the title to
                    read more...
                  </p>
                  <div className="text-sm text-muted-foreground">
                    <span>ADMIN</span> / <span>MAY {30 - post}, 2024</span>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="flex justify-between items-center mt-8">
              <Button variant="outline">Previous</Button>
              <div className="flex space-x-2">
                <Button variant="outline">1</Button>
                <Button variant="outline">2</Button>
              </div>
              <Button>Next</Button>
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

      <footer className="border-t">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          Copyright © 2024 - MidCon
        </div>
      </footer>
    </div>
  );
}
