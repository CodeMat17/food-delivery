import Featured from "@/components/Featured";
import Offers from "@/components/Offers";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <main className='min-h-screen'>
      {/* #A4193D dark red */}
      {/* #FFDFB9 red/white */}
      <Slider />
      <Featured />
      <Offers />
    </main>
  );
}
