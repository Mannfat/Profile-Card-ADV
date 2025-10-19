import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center px-6 -mt-12 pb-6 bg-white rounded-lg shadow-lg m-auto mt-24 w-130">
      <img src="/Pogi.jpg" alt="Pogi" className="w-24 h-24 rounded-full m-auto mt-5" />
      <h2 className="font-mono font-semibold mt-4 text-black">Ryque Valen Doromal</h2>
      <p className="font-mono text-gray-600 mb-4">Pupunta ng Luzon para makita si LUZON GIRL.</p>
      <p className="font-mono text-purple-600 mb-4">My Social Media Accounts</p>
      <div className="flex gap-4">
        <a
          href="https://www.facebook.com/ryque.doromal.98/"
          className="font-mono text-black hover:underline hover:text-blue-600"
        >
          Facebook
        </a>
        <a
          href="https://www.instagram.com/rikee3e/"
          className="font-mono text-black hover:underline hover:text-pink-500"
        >
          Instagram
        </a>
      </div>
    </div>
  );
}