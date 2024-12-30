

export default async function HeroSection(data: any) {
  console.log("hero", data.data);
  
  return (
    <div className="h-fit bg-[#f4f3ec] w-full p-5">
     
     <h1>{data?.data?.subheading}</h1>
    </div>
  );
}

