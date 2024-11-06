import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="max-w-screen-2xl mx-auto p-4 py-6">
        <Link href="/">SpopStarWorld</Link>
      </header>
      <main className="max-w-screen-2xl mx-auto p-4">
        <section className="mt-8">
          <div className="flex">
            <div className="w-2/5">
              <h2 className="text-5xl text-gray-800 py-10">KOREA Star</h2>
            </div>
            <div className="w-3/5 border-t border-black py-10">
              <p className="text-gray-500 pb-10">
                Discover essential Starbucks locations worldwide with detailed
                insights on must-visit spots, parking availability, and
                amenities. Our platform guides coffee lovers to unique Starbucks
                experiences in various cities. Get ready to explore everything
                you need to know about your favorite Starbucks destinations!
              </p>
              <p className="text-gray-500">
                Stay informed with the latest updates on Starbucks store
                features, including seasonal specials and unique menu items.
                Find detailed maps, customer reviews, and tips for the best
                coffee experience. Whether you’re a casual visitor or a
                dedicated fan, our site is your ultimate guide to all things
                Starbucks!
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="w-2/5">
              <h2 className="text-5xl text-gray-800 py-10">Clients</h2>
            </div>
            <div className="w-3/5 border-t border-black py-10">
              <ul className="text-gray-500 leading-7">
                <li>Seoul</li>
                <li>Busan</li>
                <li>Daegu</li>
                <li>Incheon</li>
                <li>Gwangju</li>
                <li>Daejeon</li>
                <li>Ulsan</li>
                <li>Sejong Special Self-Governing City</li>
                <li>Gyeonggi-do</li>
                <li>Gangwon-do</li>
                <li>Chungcheongbuk-do</li>
                <li>Chungcheongnam-do</li>
                <li>Jeollabuk-do</li>
                <li>Jeollanam-do</li>
                <li>Gyeongsangbuk-do</li>
                <li>Gyeongsangnam-do</li>
                <li>Jeju Special Self-Governing Province</li>
              </ul>
            </div>
          </div>

          <div className="flex">
            <div className="w-2/5">
              <h2 className="text-5xl text-gray-800 py-10">Location</h2>
            </div>
            <div className="w-3/5 border-t border-black py-10">
              <ul className="text-gray-500 leading-7">
                <li></li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
