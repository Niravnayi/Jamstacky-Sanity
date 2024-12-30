export default async function CaseStudy(data: any) {
  console.log(data.data);

  return (
    <div>
      <p>{data.data.description}</p>
    </div>
  );
}
