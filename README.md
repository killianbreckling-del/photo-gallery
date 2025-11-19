<!DOCTYPE html>
<html>
<head>
  <title>Gradient Text</title>
  <style>
    /*
     * A CSS rule for the h1 and p tags to apply the gradient.
     * We've added "display: inline-block;" for broader browser compatibility.
     */
    .gradient-text {
      text-align: center;
      background: linear-gradient(to right, green, lightblue, white);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      -webkit-text-fill-color: transparent;
      display: inline-block; /* Fix: This is needed for background-clip to work correctly */
      font-size: 3em;      /* Added: A larger font-size to make the gradient visible */
    }

    /*
     * We've also created a separate rule for the paragraph tag for clarity,
     * using a different class name to avoid overriding the h1 style.
     */
    .gradient-paragraph {
      text-align: center;
      background: linear-gradient(to right, pink, red, yellow);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      -webkit-text-fill-color: transparent;
      display: inline-block; /* Fix: This is also needed for paragraphs */
    }

    body {
      background-color: orange;
      text-align: center; /* Center the text containers on the page */
    }
  </style>
</head>
<body>

  <h1 class="gradient-text">hello!</h1>

  <p class="gradient-paragraph">
    this is a base, well not a base, but you can use it as a base for a photography site! i was going to keep this repository private because the code and is kind of sloppy because im new to coding, and ai atleast wrote a third of it, so theres a lot of random comments in certain places. but i figured that most people would fix it up theirselves so im making it public... if you do use this as a template just note it does have images and stuff because im going to use this for a photography site im building so if you do use this i ask you remove my images i have in it or videos. thankyou and enjoy. (you can just remix the code for your own images and videos and just change the h1 and p tags to put in your own stuff, obviously. i just wanted to note that)
  </p>

</body>
</html>
