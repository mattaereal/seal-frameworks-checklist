import { component$, useContext } from '@builder.io/qwik';
import { type DocumentHead } from "@builder.io/qwik-city";

import Hero from "~/components/furniture/hero";
import SectionLinkGrid from "~/components/psc/section-link-grid";
import Progress from "~/components/psc/progress";

import { ChecklistContext } from '~/store/checklist-context';
// Probably not needed, but keeping it here for now
// import { useChecklist } from '~/store/local-checklist-store';

export default component$(() => { 
  const checklists = useContext(ChecklistContext);
  // Probably not needed, but keeping it here for now
  // const localChecklist = useChecklist();

  return (
    <>
      <Hero />
      <Progress />
      <SectionLinkGrid sections={checklists.value} />
    </>
  );
});

export const head: DocumentHead = {
  title: "Security Frameworks Checklist",
  meta: [
    {
      name: "description",
      content: "A security checklist to help you keep track of your security frameworks.",
    },
  ],
};
