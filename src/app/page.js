import Image from "next/image";
export default function Home() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-4">
        <Image
          src="/images/TYCHI_LOGO.png"
          alt="TYCHI Logo"
          width={180} 
          height={180} 
          className="mx-auto mb-4"
        />
      </div>
    </section>
  );
}
