import '../styles/catbreeds.css';
import '../styles/global.css';
import siameseImage from '../assets/Siam_lilacpoint.png';
import maineCoonImage from '../assets/maine_coon.png';
import persianImage from '../assets/persian.png';
import ragdollImage from '../assets/ragdoll.png';
import britishShorthairImage from '../assets/british_shorthair.png';
import tabbyCatImage from '../assets/tabby_cat.png';
import Card from './Card';

function CatBreedsPage() {
  const catBreeds = [
    {
      imageSrc: siameseImage,
      title: 'Siamese',
      link: 'https://en.wikipedia.org/wiki/Siamese_cat',
      appearance: 'Slender body with short, fine fur and striking blue almond-shaped eyes.',
      personality: 'Vocal, affectionate, and intelligent. Enjoys human companionship.',
      habits: 'Active and playful, loves to climb and explore.',
    },
    {
      imageSrc: maineCoonImage,
      title: 'Maine Coon',
      link: 'https://en.wikipedia.org/wiki/Maine_Coon',
      appearance: 'Large muscular body with a shaggy coat and tufted ears.',
      personality: 'Gentle giants, friendly, and good with children and other pets.',
      habits: 'Enjoys being outdoors, known for their hunting skills.',
    },
    {
      imageSrc: persianImage,
      title: 'Persian',
      link: 'https://en.wikipedia.org/wiki/Persian_cat',
      appearance: 'Long, flowing coat with a round face and short muzzle.',
      personality: 'Calm and docile, prefers a quiet environment.',
      habits: 'Likes lounging and requires regular grooming due to long fur.',
    },
    {
      imageSrc: ragdollImage,
      title: 'Ragdoll',
      link: 'https://en.wikipedia.org/wiki/Ragdoll',
      appearance: 'Large, sturdy body with semi-long fur and striking blue eyes.',
      personality: 'Gentle, affectionate, and laid-back. Loves being held.',
      habits: 'Enjoys relaxing indoors and bonding with their owners.',
    },
    {
      imageSrc: britishShorthairImage,
      title: 'British Shorthair',
      link: 'https://en.wikipedia.org/wiki/British_Shorthair',
      appearance: 'Round face with chubby cheeks, dense coat, and a sturdy body.',
      personality: 'Easy-going, friendly, and independent. Great for families.',
      habits: 'Enjoys lounging but remains playful and curious.',
    },
    {
      imageSrc: tabbyCatImage,
      title: 'Tabby Cat',
      link: 'https://en.wikipedia.org/wiki/Tabby_cat',
      appearance: 'Distinctive striped coat with patterns like mackerel, classic, or spotted.',
      personality: 'Adaptable, friendly, and playful. Gets along well with other pets.',
      habits: 'Active and curious. Loves exploring and enjoys interactive toys.',
    },
  ];

  return (
    <main>
      <h2>Cat Breeds</h2>
      <div className="cards-container">
        {catBreeds.map((breed, index) => (
          <Card
            key={index}
            imageSrc={breed.imageSrc}
            title={breed.title}
            link={breed.link}
            appearance={breed.appearance}
            personality={breed.personality}
            habits={breed.habits}
          />
        ))}
      </div>
    </main>
  );
}

export default CatBreedsPage;
