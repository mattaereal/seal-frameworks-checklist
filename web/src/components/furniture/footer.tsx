import { component$ } from "@builder.io/qwik";

export default component$(() => {

  const ghLink = 'https://github.com/securityalliance/frameworks-checklist/';
  const licenseLink = 'https://github.com/securityalliance/frameworks-checklist/blob/master/LICENSE';
  const authorLink = 'https://securityalliance.org';

  return (
  <footer class="footer footer-center px-4 py-2 mt-4 text-base-content bg-base-200 bg-opacity-25">
    <aside>
      <p>Created by the <a href={authorLink} class="link link-primary">Security Alliance</a> | View source on <a href={ghLink} class="link link-primary">GitHub</a> | Under <a href={licenseLink} class="link link-primary">MIT License</a></p>
      
      <p>Forked with love from <a href="https://digital-defense.io" class="link link-primary">digital-defense.io</a> by © <a href={authorLink} class="link link-primary">Alicia Sykes</a> 2024</p>
    </aside>
  </footer>
  );
});
