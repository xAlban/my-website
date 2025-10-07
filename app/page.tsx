import { Button } from "@/components/ui/button";
import { MdOutlineDoubleArrow } from "react-icons/md";

export default function Home() {
  return (
    <div className="">
      <Button>Click me</Button>
      <div className="font-bold">Test Bold</div>
      <div>Test normal</div>
      <div className="font-extrabold">Test extra bold</div>
      <div className=" h-md w-full flex flex-row flex-wrap">
        <div className="min-w-200 bg-green-100"></div>
        <MdOutlineDoubleArrow />
      </div>

    </div>
  );
}
