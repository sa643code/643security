const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Miyah Myles',
    position: 'Marketing',
    photo:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
    text:
      " J'ai travaillé avec 643security et je dois dire que la palme revient à cet entreprise.Les agents sont extraordinaires. Respect des engagements, ponctuels.Bref pas de fausse note.Great success!",


  },
  {
    name: 'Fréderic Cha',
    position: 'Chargé Sécurité',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    text:

      "Il a livré la tâche exactement comme nous le voulions, faites-vous une faveur et engagez-le, vous ne serez pas déçu par le travail livré. Il ira jusqu'au bout pour s'assurer que vous êtes satisfait.  Je ne manquerai pas de retravailler avec lui !",
  },
  {
    name: 'zouwer ',
    position: 'Pole tech',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    text:
      "Ce type est un travailleur acharné. La communication a également été très bonne avec lui et il a été très réactif tout le temps, ce qui n'est pas facile à trouver de nos jours. Nous renouvellerons sans aucun doute notre collaboration avec lui.",
  },
  {
    name: 'René Sims',
    position: 'Receptionist',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    text:
      "Cet homme fait tout ce qu'il peut pour que le travail soit fait et bien fait. C'est la deuxième fois que je l'engage et je le ferai à nouveau à l'avenir.",
  },
  {
    name: 'Jonathan Gabi',
    position: 'Drh',
    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    text:
      "Je craignais qu'en raison d'un délai serré, ce projet ne puisse pas être réalisé. Mais ce gars m'a prouvé que j'avais tort : non seulement il a livré un travail exceptionnel, mais il a réussi à le livrer un jour avant la date limite. Et lorsque j'ai demandé quelques révisions, il les a faites en quelques MINUTES. J'ai hâte de retravailler avec lui et je le recommande totalement. Merci à lui !",
  },
  {
    name: 'Sasha Ho',
    position: 'Accountant',
    photo:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
    text:
      'Entreprise de premier plan. Il communique bien, travaille rapidement et produit un travail de qualité. Nous avons eu la chance de travailler avec lui !',
  },
  {
    name: 'Scall way',
    position: 'Director',
    photo: 'https://randomuser.me/api/portraits/men/97.jpg',
    text:
      "Des jeunes , talentueux , professionnels, proactif et responsable, avec une forte éthique de travail",

  },
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)
