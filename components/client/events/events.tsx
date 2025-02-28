import { HeadLine } from "@/components/global/HeadLine";
import { WidgetWrapper } from "@/components/global/WidgetWrapper";
import GlassMenu from "@/components/style/GlassMenu";
import ScrollReveal from "@/components/style/ScrollReveal";
import TextPressure from "@/components/style/TextPressure";
import { register } from "module";

//config for events
const funEvents = [
  {
    number: 1,
    text: "Rubik's Cube",
    image: "/images/cars/ferrari.png",
    posterImage: "/images/posters/rubiks_cube.jpg",
    description: "Code without seeing the screen, show your skills",
    registerButtonTitle: "Register",
    link: "/events"
  },
  {
    number: 2,
    text: "Scavenger Hunt",
    image: "/images/cars/redbull.png",
    posterImage: "/images/posters/scavengers_hunt.jpg",
    description: "Code without seeing the screen, show your skills",
    registerButtonTitle: "Register",
    link: "/events"
  },
  {
    number: 3,
    text: "Paper Dance",
    image: "/images/cars/bwt.png",
    posterImage: "/images/posters/paper_dance.jpg",
    description: "Code without seeing the screen, show your skills",
    registerButtonTitle: "Register",
    link: "/events"
  },
  {
    number: 4,
    text: "Mystery Room",
    image: "/images/cars/mclaren.png",
    posterImage: "/images/posters/mystery_room.jpg",
    description: "Code without seeing the screen, show your skills",
    registerButtonTitle: "Register",
    link: "/events"
  },
  {
    number: 5,
    text: "Digital Duel",
    image: "/images/cars/mercedes.png",
    posterImage: "/images/posters/digital_duel.jpg",
    description: "Code without seeing the screen, show your skills",
    registerButtonTitle: "Register",
    link: "/events"
  },
  {
    number: 6,
    text: "Gully Cricket",
    image: "/images/cars/williams.png",
    posterImage: "/images/posters/gully_cricket.jpg",
    description: "Code without seeing the screen, show your skills",
    registerButtonTitle: "Register",
    link: "/events"
  },
  {
    number: 7,
    text: "Destiny Duo",
    image: "/images/cars/alphatauri.png",
    posterImage: "/images/posters/destiny_duo.jpg",
    description: "Code without seeing the screen, show your skills",
    registerButtonTitle: "Register",
    link: "/events"
  },
  {
    number: 8,
    text: "Burst The Balloon",
    image: "/images/cars/alfaromeo.png",
    posterImage: "/images/posters/burst_the_balloon.jpg",
    description: "Code without seeing the screen, show your skills",
    registerButtonTitle: "Register",
    link: "/events"
  },
  {
    number: 9,
    text: "Tug Of War",
    image: "/images/cars/renault.png",
    posterImage: "/images/posters/tug_of_war.jpg",
    description: "Code without seeing the screen, show your skills",
    registerButtonTitle: "Register",
    link: "/events"
  }
]


const menuItems = [
  {
    number: 1,
    text: "Blind Code",
    image: "/images/ferrari.png",
    posterImage: "/images/ferrari.png",
    description: "Code without seeing the screen, show your skills",
    link: "/events"
  },
  {
    number: 2,
    text: "Blind Code",
    image: "/images/ferrari.png",
    posterImage: "/images/ferrari.png",
    description: "Code without seeing the screen, show your skills",
    link: "/events"
  },
  {
    number: 3,
    text: "Blind Code",
    image: "/images/ferrari.png",
    posterImage: "/images/ferrari.png",
    description: "Code without seeing the screen, show your skills",
    link: "/events"
  },
  // ... more items
];

const Events = () => (

  <WidgetWrapper>
    <HeadLine title="Events that are Funtastic" subtitle="Horizon has been a astounding festival and these events are the reason why. We've got a little something for everyone." titleClass="text-red-500 text-3xl sm:text-5xl"/>
    <TextPressure
    text="Fun!"
    flex={true}
    alpha={false}
    stroke={false}
    width={true}
    weight={true}
    italic={true}
    textColor="#ffffff"
    strokeColor="#ff0000"
    minFontSize={26}
  />

  <GlassMenu 
      items={funEvents}
    />

  <TextPressure
    text="Tech!"
    flex={true}
    alpha={false}
    stroke={false}
    width={true}
    weight={true}
    italic={true}
    textColor="#ffffff"
    strokeColor="#ff0000"
    minFontSize={26}
  />

<GlassMenu 
      items={menuItems}
    />

<TextPressure
    text="Cultural!"
    flex={true}
    alpha={false}
    stroke={false}
    width={true}
    weight={true}
    italic={true}
    textColor="#ffffff"
    strokeColor="#ff0000"
    minFontSize={26}
  />

<GlassMenu 
      items={menuItems}
    />

  <ScrollReveal
  baseOpacity={0}
  enableBlur={true}
  baseRotation={5}
  blurStrength={50}
  textClassName='text-red-300 text-center'
>
  When does a man die? When he is hit by a bullet? No! When he suffers a disease?
  No! When he ate a soup made out of a poisonous mushroom?
  No! A man dies when he is forgotten!
</ScrollReveal>

  </WidgetWrapper>
);

export default Events;
