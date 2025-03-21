export default function Home() {
  return (
    <main class="trim-width">
      <article class="welcome">
        <h1>
          <span>Hello,</span>
          <span class="intro">I'm Sarah</span>
          <span>and I'm an Interface Engineer from Ohio.</span>
        </h1>

        <p id="contacts">You can find me on the following sites:</p>

        <ul role="list" aria-labelledby="contacts" class="social-links">
          <li>
            <a href="https://codepen.io/zarahzachz" class="social">CodePen</a>
          </li>
          <li>
            <a href="https://github.com/zarahzachz" class="social">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/sarahsachs/" class="social">
              LinkedIn
            </a>
          </li>
        </ul>
      </article>
    </main>
  );
}
