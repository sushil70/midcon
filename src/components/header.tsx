import Link from "next/link";

export default async function Header() {
  return (
    <>
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
              {["Health", "Tech", "Information", "Finance", "Lifestyle"].map(
                (category) => (
                  <li key={category}>
                    <Link
                      href={`/?category=${category}`}
                      className="hover:underline"
                    >
                      {category}
                    </Link>
                  </li>
                )
              )}
              {/* <li>
                <Link href="/privacy-policy" className="hover:underline">
                  PRIVACY POLICY
                </Link>
              </li>
              <li>
                <Link href="/tech" className="hover:underline">
                  TECH
                </Link>
              </li> */}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
