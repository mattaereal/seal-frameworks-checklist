import { component$ } from "@builder.io/qwik";

import Icon from "~/components/core/icon";

export default component$(() => {
  return (
    <div class="hero mb-8 mx-auto xl:max-w-7xl max-w-6xl w-full xl:px-10">
      <div class="hero-content text-center bg-front shadow-sm lg:rounded-xl w-full">
        <div class="max-w-4xl w-full flex flex-col place-items-center px-6">
          <h1 class="text-5xl font-bold mb-2">Security Frameworks Checklist</h1>
          <h2 class="text-2xl font-bold mb-4">by the Security Alliance</h2>
          <p class="subtitle pb-8 max-w-3xl">Track your progress implementing security controls across multiple frameworks. These frameworks provide a structured approach to securing your organization, with controls organized by maturity level and security domain.</p>
          <div class="flex flex-col items-center mt-2">
            <Icon class="mb-4" icon="seal" width={140} height={140} />
            <p class="text-sm italic">Helping organizations build security capabilities systematically</p>
          </div>
        </div>
      </div>
    </div>
  );
});
