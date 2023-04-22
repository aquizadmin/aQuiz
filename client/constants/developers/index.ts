interface ISocialLinks {
  instagram: string
  linkedin: string
  github: string
}

interface IDevelopers {
  name: string
  lastname: string
  description: string
  image: string
  profession: string
  socialLinks: ISocialLinks
}

const developers: IDevelopers[] = [
  {
    name: 'Armida ',
    lastname: 'Rehanyan',
    description: "I'm Front End developer with 2 years experience. \nI like to create interesting WebSites and design them by myself.",
    image: '/images/pages/about/Armida.jpg',
    profession: 'Front End Developer',
    socialLinks: {
      instagram: '',
      linkedin: 'https://www.linkedin.com/in/armida-rehanyan-33ba9723b/',
      github: 'https://github.com/ArmidaRehanyan',
    }
  },
  {
    name: 'Yura ',
    lastname: 'Tadevosyan',
    description: "I'm Front End developer with 2 years experience. \nI like all new and interesting about Front End.",
    image: '/images/pages/about/Yura.jpg',
    profession: 'Front End Developer',
    socialLinks: {
      instagram: '',
      linkedin: 'https://www.linkedin.com/in/yura-tadevosyan-577665205/',
      github: 'https://github.com/YuraTadevosyan',
    }
  },
  {
    name: 'Artur ',
    lastname: 'Khachatryan',
    description: "I'm Back End developer with 2 years experience. \nI like to do all for helping Front End devs life.",
    image: '/images/pages/about/Artur.jpg',
    profession: 'Back End Developer',
    socialLinks: {
      instagram: '',
      linkedin: 'https://www.linkedin.com/in/artur-khachatryan-167940205/',
      github: 'https://github.com/ArturKhachatryan0',
    }
  },
 ]

export default developers;