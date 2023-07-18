"use strict";

new TypeIt(".home__title--strong", {
  speed: 100,
  loop: true,
  startDelay: 900,
})
  .move(-18, { delay: 100 })
  .type("Amazing ")
  .pause("1000")
  .move(null, { to: "END" })
  .delete()
  .go();
