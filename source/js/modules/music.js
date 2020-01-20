import {shuffle} from "./util";

const crimean = [
  {
    artist: `48 часов`,
    name: `Есть-что-то-важнее`,
    image: `./logo/48.jpg`,
    src: `./music/48.mp3`,
    genre: `punk-rock`
  },
  {
    artist: `Step By Step`,
    name: `Из-за-баб`,
    image: `./logo/sbs.jpg`,
    src: `./music/sbs.mp3`,
    genre: `pop-punk`
  },
  {
    artist: `Dirty Trio`,
    name: `В-лако-красочных-туфлях`,
    image: `./logo/dt.jpg`,
    src: `./music/dt.mp3`,
    genre: `Спид-рок`
  },
  {
    artist: `Park 17`,
    name: `Милая-девочка`,
    image: `./logo/p17.jpg`,
    src: `./music/p17.mp3`,
    genre: `ukulele-indi`
  },
  {
    artist: `Вне правил`,
    name: `В-каждом-из-нас`,
    image: `./logo/vp.jpg`,
    src: `./music/vp.mp3`,
    genre: `grunge-punk`
  },
  {
    artist: `МНДРГР`,
    name: `Дыхание-вселенной`,
    image: `./logo/mndrgr.jpg`,
    src: `./music/mndrgr.mp3`,
    genre: `ЮБК-панк`
  },
  {
    artist: `Эдi`,
    name: `Грифон`,
    image: `./logo/edi.jpg`,
    src: `./music/edi.mp3`,
    genre: `инди-поп`
  },
  {
    artist: `Море ясности`,
    name: `Беспокойство`,
    image: `./logo/mya.jpg`,
    src: `./music/mya.mp3`,
    genre: `post-punk`
  },
  {
    artist: `Роберто счастлив`,
    name: `Вакуум`,
    image: `./logo/rs.jpg`,
    src: `./music/rs.mp3`,
    genre: `indie`
  },
  {
    artist: `Акульт`,
    name: `Революция-сознания`,
    image: `./logo/acult.jpg`,
    src: `./music/acult.mp3`,
    genre: `hip-hop`
  },
];

export default shuffle(crimean);
