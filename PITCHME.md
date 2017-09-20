<h2>Modern Web Development with Javascript</h2>
<h6> The Fundamentals </h6>

---

<h3>Overview</h3>
<p style="font-size:.7em;margin-top:-10px;color:darkgrey;">What is so special about javascript? It isn't even a programming language, right?</p>

+++

<h3>Part 1: The Javascript Landscape</h3>
<p style="font-size:.7em;margin-top:-10px;color:darkgrey;"><b>It is the fastest growing language today; some key things to know...</b></p>
<ul style="margin-top:20px;font-size:.9em;">
  <li>What is the current state of the language? </li>
  <li>Node and NPM explained. </li>
</ul>

+++

<h3>Part 2: Let's build an app in Javascript</h3>
<p style="font-size:.7em;margin-top:-10px;color:darkgrey;">Considerations include the development experience and environment, the technologies involved and how to deploy.</p>
<ul style="margin-top:20px;font-size:.9em;">
  <li>Environment Setup: How do we get started developing apps?</li>
  <li>There is a package for that; make components in javascript work together.</li>
  <li>The app is ready; how can we deploy it?</li>
</ul>

---

<h3>PART 1: Javascript Discussion</h3>

---

<h3>Where is Javascript now?</h3>
<p style="font-size:.7em;margin-top:-10px;color:darkgrey;">Is Javascript the same as ECMAScript the same as ES5 or ES6?</p>
<ul style="margin-top:20px;font-size:.9em;">
  <li>W3C and stagnant JS updates</li>
  <li>ECMA driven by Vendor implementations</li>
  <li>Consistent and frequent language updates</li>
</ul>

+++

<h3>W3C and Javascript</h3>
<ul style="margin-top:20px;font-size:.9em;">
  <li>World Wide Web Consortium</li>
  <li>Meets yearly</li>
  <li>Adapts only complete implementations</li>
</ul>

+++

<h3>ECMA</h3>
<ul style="margin-top:20px;font-size:.9em;">
  <li>European Computers Manufacturing Association</li>
  <li>W3C divided; ECMA backed by Vendors</li>
  <li>Supports an iterative approach to improving and upgrading Javascript</li>
  <li>W3C accepts criteria after the fact</li>
</ul>

---

<h3>Open Source javascript</h3>
<p style="font-size:.7em;margin-top:-10px;color:darkgrey;">With great power...</p>
<ul style="margin-top:20px;font-size:.9em;">
  <li>Node / NPM overview</li>
  <li>The toolbox mindset</li>
  <li>Limiting overexposure</li>
</ul>

+++

<h3>What is Node? Why is it so popular?</h3>
<ul style="margin-top:20px;font-size:.9em;">
  <li>Ryan Dahl - V8 Engine - Event driven</li>
  <li>The NPM registry (package management)</li>
  <li>Speed and reliability; OS agnostic</li>
  <li>Huge community</li>
</ul>

+++

<h3>You don't need to know about every package; just research the tools you need.</h3>
<ul style="margin-top:20px;font-size:.9em;">
  <li>Node is a robust but very basic OS.</li>
  <li>Find well supported packages to solve common problems.</li>
  <li>Mircro-architect; break concerns into smaller chunks of work.</li>
</ul>

+++

<h3>NPM packages</h3>
<p style="font-size:.7em;margin-top:-10px;color:darkgrey;">Types of common packages.</p>
<ul style="margin-top:20px;font-size:.9em;">
  <li>template packages</li>
  <li>data management packages</li>
  <li>linting / testing tools</li>
  <li>build / deploy tools</li>
</ul>

+++

<h3>It can be overwhelming; pace yourself.</h3>
<ul style="margin-top:20px;font-size:.9em;">
  <li>Utilize the fantastic educational resources available.</li>
  <li>Keep it simple. Do some basic helloWorld or other intro projects.</li>
  <li>Try creating your own project template or generator once you have a setup you like.</li>
</ul>

---

<h3>PART 2: Building an App</h3>
 
---

<h3>Environment Setup</h3>
<p style="font-size:.7em;margin-top:-10px;color:darkgrey;">Getting started.</p>
<ul style="margin-top:20px;font-size:.9em;">
  <li>create-react-app w/ Webpack & Babel</li>
  <li>React</li>
  <li>Redux</li>
</ul>

+++

<h3>Build packages</h3>
<ul style="margin-top:20px;font-size:.9em;">
  <li>create-react-app is an opinionated project generator</li>
  <li>Webpack is used behind the scenes to do a variety of build / dev tasks</li>
  <li>Babel is a transpiler allowing developers to use the latest JS versions</li>
  <li>highly composable / reusable</li>
</ul>

+++

<h3>React</h3>
<p style="font-size:.7em;margin-top:-10px;color:darkgrey;">A library for building user interfaces.</p>
<ul style="margin-top:20px;font-size:.9em;">
  <li>Virtual DOM</li>
  <li>JSX</li>
  <li>simple lifecycle</li>
  <li>highly composable / reusable</li>
</ul>

+++

<h3>Redux</h3>
<p style="font-size:.7em;margin-top:-10px;color:darkgrey;">A FLUX-ish library for managing application state.</p>
<ul style="margin-top:20px;font-size:.9em;">
  <li>Store</li>
  <li>Actions</li>
  <li>Reducers</li>
  <li>one way data flow</li>
</ul>

---

<h3>Deploying Static Websites / PWA's</h3>
<p style="font-size:.7em;margin-top:-10px;color:darkgrey;">Building for the future.</p>
<ul style="margin-top:20px;font-size:.9em;">
  <li>How to serve the files</li>
  <li>Hosting options</li>
</ul>

+++

<h3>Serving the build</h3>
<ul style="margin-top:20px;font-size:.9em;">
  <li>What kind of files do we have for serving?</li>
  <li>Optimizing production code</li>
</ul>

+++

<h3>How to host</h3>
<ul style="margin-top:20px;font-size:.9em;">
  <li>Serve the files traditionally on your own</li>
  <li>Use a simpe AWS S3 bucket / back it with CloudFront if you like</li>
  <li>Deploy to any number of static site hosting services </li>
</ul>

---

<h3>Resources</h3>
<ul style="margin-top:20px;font-size:.9em;">
  <li><a href="https://nodejs.org/en/" target="_blank">Node</a></li>
  <li><a href="https://facebook.github.io/react/" target="_blank">React Docs</a></li>
  <li><a href="http://redux.js.org/" target="_blank">Redux Docs</a></li>
  <li><a href="https://egghead.io/courses/getting-started-with-redux" target="_blank">Redux Tutorial Series (by the author)</a></li>
  <li><a href="https://nodeschool.io/" target="_blank">nodeschool.io</a></li>
  <li><a href="https://github.com/facebookincubator/create-react-app" target="_blank">create-react-app</a></li>
  <li><a href="https://zeit.co/now" target="_blank">now</a></li>
  <li><a href="https://github.com" target="_blank">GitHub</a></li>
  <li><a href="https://developers.google.com/web/tools/lighthouse/" target="_blank">Lighthouse</a></li>
</ul>