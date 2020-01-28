window.Seed = (function () {
  const submissions = [
    {
      id: 1,
      title: '4 Corners',
      description: 'House design application for dummies.',
      url: '#',
      votes: 9,
      avatar: './public/images/avatars/daniel.jpg',
      submissionImage: './public/images/submissions/image-yellow.png',
    },
    {
      id: 2,
      title: 'Demotrashy',
      description: 'Win presidential elections by giving free coffee.',
      url: '#',
      votes: 11,
      avatar: './public/images/avatars/kristy.png',
      submissionImage: './public/images/submissions/image-rose.png',
    },
    {
      id: 3,
      title: 'Tinfoild',
      description: 'Firewall that blocks any outgoing traffic.',
      url: '#',
      votes: 5,
      avatar: './public/images/avatars/veronika.jpg',
      submissionImage: './public/images/submissions/image-steel.png',
    },
    {
      id: 4,
      title: 'Hoof or woof',
      description: 'Tinder for pets.',
      url: '#',
      votes: 29,
      avatar: './public/images/avatars/molly.png',
      submissionImage: './public/images/submissions/image-aqua.png',
    }
  ];

  return { submissions: submissions };
}());
