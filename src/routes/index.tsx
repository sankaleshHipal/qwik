import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { data } from '../data';

export default component$(() => {

  // const store = useStore({
  //   data: data
  // });
  return (
    <>
      <hero-section data={JSON.stringify(data)}></hero-section>
      <hero-section data={JSON.stringify(data)}></hero-section>
      <hero-section data={JSON.stringify(data)}></hero-section>
      <hero-section data={JSON.stringify(data)}></hero-section>
      <hero-section data={JSON.stringify(data)}></hero-section>
      <hero-section data={JSON.stringify(data)}></hero-section>
      <hero-section data={JSON.stringify(data)}></hero-section>
      <hero-section data={JSON.stringify(data)}></hero-section>
      <hero-section data={JSON.stringify(data)}></hero-section>
      <hero-section data={JSON.stringify(data)}></hero-section>

      <popup-element></popup-element>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
