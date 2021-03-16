# Hackathon Global

## Part 1

### How did you plan out the structure and design of it? How did decide on the tools you've used?

The design of the UI was done using Figma. I wanted to created an app that was minimalist yet highly scalable. I decided to stick with the traditional side navbar + dashboard style, similar to the designed used for the Attendee Dashboard for Hack the North 2020++.

I chose to use React for its simplicity and flexibility. 

I found that the pros outweighed the cons when it came to using TypeScript over JavaScript. I value having structure in my code with the use of types and interfaces.

When thinking about how to implement a login system, I decided to use Context API as a way to store the current user data and have it be accesible throughout the app. There were several scalability considerations I made when implementing context. Although the context was really only needed to store the user data for this project, I kept the structure of the context as general as possible, leaving it open for adding more states in the future (i.e. UI theming/preferences). In my `context` directory, I seperated my files into `types`, `actions`, and `reducers` so that the concerns of each major state in the context (i.e. user state) can be seperated.

### Did you encounter any problems? And if so, how did you solve them?

#### Routing on GitHub Pages

I ran into some issues with routing after deploying my app to GitHub Pages. I initially had my routes wrapped in a `BrowserRouter `, however upon reading the `react-router-dom` docs, I realized that GitHub Pages doesn’t support routers that use the HTML5 `pushState` history API. So the issue was that when GitHub Pages saw a route like `http://janakitti.github.io/hackathon-global/events`, it returned a `404` since `/events` was not a valid route. The solution was to switch to using routing with hashes, using the `HashRouter`. 

### Are there any areas of your code that you're particularly proud of or want to point out?

#### Context Structure

Although somewhat tedious, I thought that my efforts into generalizing the structure of my context payed off. While seperating the user state, actions, and reducers from the main context file may have been more than enough for the purposes of keeping track of the user, I think it makes it so much easier for future developers to scale the app and easily add more states.

###

#### UI Design

I had a really great time coming up with the design for the app. I'm pretty happy with the overall design language and style consistency. Since the core functionality of the app is to display events, I thought that having each of the event types (workshop, activity, tech-talk) be colour-coded would be a visually appealing and functional way to stylize UI elements.

I drew some inspiration from the Hack the North branding and the Attendee Dashboard with the Hackathon Global Inc. logo and the little creature at the bottom of the page to remind you to drink water!