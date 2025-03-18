import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';

import { intro, contributing, license } from './about-content';
import { marked } from "marked";

export default component$(() => {

  const parseMarkdown = (text: string | undefined): string => {
    return marked.parse(text || '', { async: false }) as string || '';
  };

  // Resources for contributors and sponsors have been removed


  return (
    <div class="m-4 md:mx-16">
      <article class="bg-back p-8 mx-auto max-w-[1200px] m-8 rounded-lg shadow-md">
        <h2 class="text-3xl mb-2">About the Security Checklist</h2>
        {intro.map((paragraph, index) => (
          <p class="mb-2" key={index}>{paragraph}</p>
        ))}        
      </article>
      <div class="divider"></div>

      <article class="bg-back p-8 mx-auto max-w-[1200px] m-8 rounded-lg shadow-md">
        <h2 class="text-3xl mb-2">Contributing</h2>
        {contributing.map((paragraph, index) => (
          <p class="mb-2" key={index} dangerouslySetInnerHTML={parseMarkdown(paragraph)}></p>
        ))}        
      </article>
      <div class="divider"></div>

      <article class="bg-back p-8 mx-auto max-w-[1200px] m-8 rounded-lg shadow-md">
        <h2 class="text-3xl mb-2">Acknowledgments</h2>
        <p>the red guild | Security Frameworks Initiative Lead</p>
        <p>robert @ skylock | Security Frameworks Initiative Contributor</p>
        <p>alicia sykes | Creator of the personal security checklist</p>
      </article>

      <div class="divider"></div>

      <article class="bg-back p-8 mx-auto max-w-[1200px] m-8 rounded-lg shadow-md">
        <h2 class="text-3xl mb-2">License</h2>
        <p>
          This project is split-licensed, with the checklist content (located
          in <a class="link" href="https://github.com/security-alliance/frameworks-checklist/blob/HEAD/security-frameworks-checklist.yml">
            <code>security-frameworks-checklist.yml</code>
          </a>) being licensed
          under <b><a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a></b>.
          And everything else (including all the code), licensed
          under <b>MIT</b>.
        </p>
        <pre class="bg-front whitespace-break-spaces rounded text-xs my-2 mx-auto p-2">
          {license}
        </pre>
        <details class="collapse">
          <summary class="collapse-title">
            <h3 class="mt-2">What does this means for you?</h3>
          </summary>
          <div class="collapse-content">
            <p class="mb-2">
              This means that for everything (except the checklist YAML file), you have almost unlimited freedom to
              use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of this software.
              All that we ask is that you include the original copyright notice and permission notice in any copies of the software
            </p>
            <p class="mb-2">
              And for the security-list content you can share and adapt this content as long as you give appropriate credit,
              don't use it for commercial purposes, and distribute your contributions under the same license.
            </p>
          </div>
        </details>

      </article>

    </div>
  );
});

export const head: DocumentHead = {
  title: "About | Security Frameworks Checklist",
  meta: [
    {
      name: "description",
      content: "This project aims to give you practical guidance on how to improve your digital security, and protect your privacy online",
    },
  ],
};
