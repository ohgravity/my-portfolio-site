export const posts = [
  {
    id: 1,
    date: "April 28, 2021",
    title: "100 Days of Code: Make Them Yours",
    alt: "first blog post",
    img: "https://i.imgur.com/rTgTVuL.png",
    role: "image",
    ariaLabel: "matrix code",
    body: <Post1Body />,
  },
];

function Post1Body() {
  return (
    <>
      <p>
        Hello there! Welcome to my first blog post. This one is about my
        experience thus far of learning to code (more technical posts coming
        later). So it makes sense to write about my first round of
        #100DaysOfCode. The Twitter hashtag and ethos behind it were created by
        Alex Kalloway (@ka11away). According to the official website,{" "}
        <a href="https://www.100daysofcode.com/">100daysofcode.com</a>, the
        movement was set up to encourage better coding habits. Although mainly
        popular with beginner programmers, it’s certainly not limited to that
        group. The hashtag is said to help build positive habits, but it really
        facilitates much more. In the 100 non-consecutive days (...I’ll get to
        that in a bit) I spent on the challenge, I gradually found other less
        apparent benefits along the way, like little personal growth Easter
        eggs.{" "}
      </p>
      <p>
        What exactly is 100 Days of Code, you ask? These are the two main rules:{" "}
      </p>
      <p>
        <ol>
          <li>Code for at least one hour every day for the next 100 days.</li>
          <li>
            Tweet your progress every day with the #100DaysOfCode hashtag.
          </li>
        </ol>
      </p>
      <p>
        This minimalist structure allows each learner an appropriate amount of
        space to explore its impact in a variety of ways. Not only has this
        challenge helped me form good habits, but it has also helped with:
        <ul>
          <li>networking and job searching</li>
          <li>getting over the difficulty of asking for help</li>
          <li>meeting people of a wide variety of tech and life backgrounds</li>
          <li>learning how other people THINK about programming</li>
        </ul>{" "}
        I’ll talk about each of these points as they relate to the challenge.{" "}
      </p>
      <p>
        First of all, when I started, it was abundantly clear that I was
        tweeting into a vacuum. I had about 5 Twitter followers to start with,
        so my tweet engagement amounted to 3 likes from bots dedicated to
        following the hashtag. “Hello?? Is anyone there?? Hello!!” I wanted to
        yell, with plenty of delay and reverb for good effect. In the
        apocalyptic silence that followed, it dawned on me that this so-called
        productivity enhancing hashtag was actually also a form of online
        networking. Oh.{" "}
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/BtNNn88Gxfc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <small
        style={{
          justifyContent: "center",
          display: "block",
          marginBottom: "1.5em",
        }}
      >
        You get the picture.
      </small>
      <p>
        At first, I felt self-conscious liking and commenting on other
        #100DaysOfCode tweets. I didn’t know those people, and I didn’t have a
        clue what most of them were tweeting about. It felt like walking into a
        room full of people speaking a language you don’t know, and trying to
        strike up a conversation in your own language (yes, I speak from
        experience, and I’m actually pretty good at it by now). But I soon
        realized that, much like when crashing a random cocktail party, the only
        way to get people to listen to you is to approach them first, in the
        most authentic and relatable way you can.{" "}
      </p>
      <p>
        Now I have about 250 Twitter followers. I don’t consider them an
        “audience”. I’m not performing. I consider them a learning source, and
        they help me stay more objective when considering my own progress. I’d
        like to strengthen that in the future by engaging more with others’
        tweets. There have been a few awesome individuals who really tried to
        help when I tweeted about tech problems I was having. And there are
        several conspicuous and much appreciated devs who are always sending out
        cheerful and supportive vibes, which REALLY matters a lot when you’re
        self-teaching and learning in isolation during a pandemic. And I love
        seeing how people from many places around the world are learning to
        code! Just for a few examples: I now have some inkling of what the dev
        job search situation is like in India (extremely competitive!), what
        concerns programmers have in rural North America (a lot of job
        opportunity variation over regions), and the pros and cons of working in
        Silicon Valley (yes, there seem to be some cons). Since I can read
        Japanese, I have also enjoyed hearing about how some Japanese students
        are learning and what tools they use. One day, I asked my followers for
        their thoughts on 100 Days of Code. I was met with a fairly constant
        refrain of appreciation for the community support the hashtag opens up.
        I think that we all come to feel that way, even if we didn’t at first.{" "}
      </p>
      <p>
        In short, the more I engaged with others, the more I learned, and the
        more feedback I received. A win-win. One thing I didn’t want to do, at
        the outset, was tweet anything especially personal. I still lean in this
        direction, but I gradually discovered that people who tweet something
        personal from time to time tended to have more authentic and interesting
        interactions than I did. So I guess it pays to be semi-vulnerable to a
        point. Networking on Twitter is not so scary, it seems.{" "}
      </p>
      <p>
        Another rabbit hole I explored in this challenge was the habit-forming
        mechanism itself. You are supposed to code for at least an hour every
        day and tweet about it. It has been an especially rough year, as we all
        know. There were many times when I broke my tweeting streak. A lot of
        days I had coded, but didn't think to tweet, since Twitter hadn't grown
        on me (yet? umm). At first I panicked. But then I just kept going, and
        tried to do better every time. I continued getting support from my
        awesome followers. And what was the result? My level of consistency has
        very noticeably increased since starting the challenge. I’m not
        satisfied yet, but the fact that I became stronger and better able to
        work through difficult conditions means I am raising the bar for myself
        in the future. Smart people are always telling me, “Don’t race against
        the others. Race against yourself.” So that is what I’m doing. Yes, it’s
        important to try to meet others’ expectations since no one is an island
        and we need to work together, but it is equally important to know
        yourself and work in a way that will not lead to burn-out or otherwise
        harm your well-being. I believe this mindset is the most conducive to
        long-term growth and life satisfaction.
      </p>
      <img
        src="https://i.imgur.com/pvH6nPd.jpg"
        alt="rick wallpaper message meme"
      />
      <p>
        Until this point, I have talked mainly about the psycho-social effects
        of the challenge. However, LET. IT. BE. KNOWN. that I did cover a lot of
        ground technically, including but not limited to:
        <ul>
          <li>
            Making my first project from scratch (
            <a href="https://sarasegel.net/">this site!</a>) which is a fully
            responsive React app and takes accessibility into consideration (try
            it on a screen reader!)
          </li>
          <li>
            Completing 2 full-stack apps (in this site's Projects section)
          </li>
          <li>
            Completing several other small projects with tutorial guidance
          </li>
          <li>
            Contributing CSS support on a friend’s startup (check out
            https://populist.us/ !)
          </li>
          <li>
            Exploring my musical interests with a generative music project (you
            can see some of my generative projects at my{" "}
            <a href="https://www.instagram.com/sara.segel/">instagram</a>{" "}
            account).{" "}
          </li>
          <li>
            Developing with vanilla JavaScript, React, HTML, CSS, Styled
            Components, Bootstrap, flexbox, ARIA attributes and screen reader
            testing, GatsbyJS, MongoDB, Postman, and others.
          </li>{" "}
        </ul>
        In the future, I will be writing more in-depth technical blog posts
        about what I am learning. But for now, I just can say that I am proud of
        what I’ve done in these 100 days, especially in pandemic isolation. I’ve
        become a more patient, determined, and curious programmer through
        improved consistency and insight gained from observing other programmers
        I admire. Not to mention my increased capability to ask for help, and
        the wonderful responses I often received.{" "}
      </p>
      <p>
        Web development as a career offers so much – the possibility of career
        advancement, being able to work from almost anywhere, and plenty of
        cognitive stimulation, among other benefits. I understand that
        developers’ lives aren't always rosy and there is tedious work to be
        done, but every day I’m increasing my ability to think more abstractly,
        problem-solve, and expand the virtual world I know – all from learning
        programming. I can’t verify this in a quantifiable way (yet), but I
        would say that my general problem-solving abilities in all areas of my
        life have improved as a result of learning to code. There is just a
        unique satisfaction in taking concrete actions and seeing a problem go
        away. We can’t always do this in every area of our lives, but to the
        extent that we can, it’s an amazing feeling. In the future, I’d love to
        spend more time on projects tying together my love of music and my
        passion for accessibility, with programming. But I can get interested in
        a variety of projects, especially if they work to solve interesting
        problems.{" "}
      </p>
      <p>
        For now, I think I will take a bit of a Twitter break, as I want to
        focus on other things. But at some point, I would like to start a second
        round of the 100 Days challenge. What will I change in the next round?{" "}
        <ul>
          <li>Set more concrete technical goals</li>
          <li>Get even better at time management</li>
          <li>
            Take a more holistic approach to habit formation: exercise,
            yoga/meditate, sleep hygiene
          </li>
          <li>
            Accountability: Now that I’m stronger in my habit, I’ll hold myself
            more accountable than before
          </li>
          <li>
            Reach out more intentionally to people online I want to get to know
          </li>
          <li>Try to help more beginners who ask for help </li>
          <li>
            Go for more of a teaching approach than a reporting one when I tweet
          </li>
          <li>Spread more positive vibes (we can never get enough!)</li>
        </ul>{" "}
      </p>
      <p>
        In the end, everything is what we make of it, whether that’s life itself
        or the projects and relationships contained therein. I encourage others
        to do what I did and make the challenge fit your life rather than the
        other way around. Being strict with oneself is important for growth of
        course, and I don’t want to give the impression that I am lax about
        important rules or don’t want to push myself out of my comfort zone in
        order to improve. My point is that self-improvement is not
        one-size-fits-all and shouldn’t be considered as such. I look forward to
        seeing what more I can accomplish as I continue to strengthen my life
        and programming habits. My last words to anyone reading this?
      </p>{" "}
      <p>Make the 100 Days of Code challenge YOURS. Make it work for you.</p>
    </>
  );
}
