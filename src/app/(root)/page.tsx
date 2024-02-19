import Card from "@/components/Card";
import MobileSidebar from "@/components/MobileSidebar";

export default function Home() {
  return (
    <main className="flex h-full flex-col px-10 ">
      <MobileSidebar />
      <h1 className="text-gray-200 text-4xl font-semibold">
        Hey, <span className="text-cutome-line-color">Name</span>
      </h1>

      <h1 className="text-gray-200 text-4xl font-semibold">
        How&apos;s your prep for the{" "}
        <span className="text-cutome-line-color">March SAT</span>
      </h1>
      <div className="mt-10 grid justify-items-center grid-cols-1 md:grid-cols-2 gap-6 max-w-[530px]">
        <Card title={"Practice"} />
        <Card title={"Name"} />
        <Card title={"Practice"} />
        <Card title={"Practice"} />
      </div>
    </main>
  );
}
