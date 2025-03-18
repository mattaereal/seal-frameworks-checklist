import { component$, useContextProvider, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import jsyaml from "js-yaml";

import yamlContent from "~/assets/checklist.yml?raw";
import Navbar from "~/components/furniture/nav";
import Footer from "~/components/furniture/footer";
import { ChecklistContext } from "~/store/checklist-context";
import type { Sections } from "~/types/PSC";

export const useChecklists = routeLoader$(async () => {
  return jsyaml.load(yamlContent) as Sections;
});

export default component$(() => {
  const checklists = useChecklists();
  
  // Provide the checklist data to all child components
  useContextProvider(ChecklistContext, checklists);
  
  return (
    <>
      <Navbar />
      <main>
        <Slot />
      </main>
      <Footer />
    </>
  );
});
