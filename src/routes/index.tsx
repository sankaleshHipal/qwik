import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from '@builder.io/qwik-city';


export const useData = routeLoader$(async()=>{
  const response = await fetch(`https://api.hipal.life/v1/businesses/get/Single/64b1151f9f464445c1fbc512`);
  // if (!response.ok) {
  //   throw new Error(`HTTP error! status: ${response.status}`);
  // }
  const data = await response.json();
  console.log('Fetched data: ', data);
  return data;
})
export default component$(() => {
const data = useData();
  return (
    <>
      <highlights-container data={data}></highlights-container>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};


