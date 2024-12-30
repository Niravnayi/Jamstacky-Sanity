import { createClient } from "next-sanity";

const client = createClient({
  projectId: "sjfifgfn",
  dataset: "production",
  useCdn: true,
});

export default client;
