import { useState, useRef, useEffect } from 'react';
import '../styles/catnews.css';
import '../styles/global.css';

import catImage1 from '../assets/rescue-cat-finds-forever-home.jpg';
import catImage2 from '../assets/shadow-community-hero.jpg';
import catImage3 from '../assets/luna-forever-home.jpg';
import catImage4 from '../assets/cat-therapy-seniors.jpg';
import catImage5 from '../assets/mittens-leap-record.jpg';
import catImage6 from '../assets/picasso-art-collection.jpg';

function CatNewsPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subscribe: false,
  });
  const [errors, setErrors] = useState({});
  const [subscriptionSuccess, setSubscriptionSuccess] = useState(false);

  // Use useRef to get a reference to the dialog element
  const dialogRef = useRef(null);

  // Show the dialog when isDialogOpen changes to true
  useEffect(() => {
    if (isDialogOpen && dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, [isDialogOpen]);

  const openDialog = () => {
    setIsDialogOpen(true);
    setSubscriptionSuccess(false);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    if (dialogRef.current) {
      dialogRef.current.close();
    }
    setSubscriptionSuccess(false);
    setFormData({
      name: '',
      email: '',
      subscribe: false,
    });
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.email) newErrors.email = 'Email is required.';
    const emailRegex = /\S+@\S+\.\S+/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      setSubscriptionSuccess(true);
    }
  };

  return (
    <main>
      <h2>Interesting Cat News</h2>
      <p>
        Stay updated with the latest news about cats. From heartwarming stories to amazing facts,
        our news section brings you the best of the feline world.
      </p>
      <div className="news-container">
        {/* 1. Cat Saves Family from Fire */}
        <div className="cat-news">
          <div className="news-content">
            <h3>Cat Alerts Family to Fire, Saving Their Lives</h3>
            <p>
              In a heroic act, a cat named Daisy alerted her owners to a fire in their home by
              persistently meowing and scratching at the bedroom door early Sunday morning. The
              family was able to evacuate safely before the fire could cause significant damage.
              Firefighters confirmed that Daisy's actions were crucial in preventing a potential
              tragedy.
            </p>
            <div className="bottom-content">
              <img
                src={catImage1}
                alt="Daisy the cat saving the family"
              />
              <p className="article-date">Published on: September 12, 2023</p>
              <p className="article-source">
                Source:{' '}
                <a
                  href="https://www.khou.com/article/news/local/cat-saves-family-from-fire/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  KHOU News
                </a>
              </p>
            </div>
          </div>
          <button onClick={openDialog}>Subscribe for News Updates</button>
        </div>

        {/* 2. Local Cat Becomes Community Hero */}
        <div className="cat-news">
          <div className="news-content">
            <h3>Shadow the Cat Recognized as Community Hero</h3>
            <p>
              Shadow, a stray cat known for his nightly patrols around the Elmwood neighborhood, has
              been hailed as a community hero. Residents report that Shadow has deterred several
              prowlers and provided comfort to those feeling unsafe. His vigilant presence has
              fostered a stronger sense of security within the community.
            </p>
            <div className="bottom-content">
              <img
                src={catImage2}
                alt="Shadow the community hero cat"
              />
              <p className="article-date">Published on: August 30, 2023</p>
              <p className="article-source">
                Source:{' '}
                <a
                  href="https://www.nbcnews.com/news/local/shadow-cat-community-hero-rcna957"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NBC News
                </a>
              </p>
            </div>
          </div>
          <button onClick={openDialog}>Subscribe for News Updates</button>
        </div>

        {/* 3. Rescue Cat Finds Forever Home */}
        <div className="cat-news">
          <div className="news-content">
            <h3>Rescue Cat "Luna" Finds Loving Forever Home</h3>
            <p>
              After weeks of searching, Luna, a playful rescue cat, has finally found her forever
              home. The local animal shelter staff praised Luna for her friendly demeanor and
              adaptability, making her a favorite among potential adopters. Her new family is excited
              to welcome her and provide a loving environment.
            </p>
            <div className="bottom-content">
              <img
                src={catImage3}
                alt="Luna the rescue cat with her new family"
              />
              <p className="article-date">Published on: July 20, 2023</p>
              <p className="article-source">
                Source:{' '}
                <a
                  href="https://www.humanesociety.org/news/rescue-cat-finds-forever-home"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Humane Society
                </a>
              </p>
            </div>
          </div>
          <button onClick={openDialog}>Subscribe for News Updates</button>
        </div>

        {/* 4. Cat Therapy Program Aids Seniors */}
        <div className="cat-news">
          <div className="news-content">
            <h3>Therapy Cats Bring Joy to Senior Residents</h3>
            <p>
              The Brightville Animal Shelter has launched a new cat therapy program aimed at
              improving the mental well-being of elderly residents in local nursing homes. Certified
              therapy cats visit facilities weekly, providing companionship and comfort.
              Participants have reported increased happiness and reduced feelings of loneliness since
              the program's inception.
            </p>
            <div className="bottom-content">
              <img
                src={catImage4}
                alt="Therapy cats interacting with seniors"
              />
              <p className="article-date">Published on: June 15, 2023</p>
              <p className="article-source">
                Source:{' '}
                <a
                  href="https://www.foxnews.com/lifestyle/cat-therapy-program-aids-seniors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fox News
                </a>
              </p>
            </div>
          </div>
          <button onClick={openDialog}>Subscribe for News Updates</button>
        </div>

        {/* 5. Record-Breaking Cat Leap */}
        <div className="cat-news">
          <div className="news-content">
            <h3>Mittens the Cat Sets New Jumping Record</h3>
            <p>
              Mittens, a domestic cat from Oregon, has set a new world record by leaping 7 feet in a
              single jump during a local pet competition. The feat was captured on video and has
              since gone viral, showcasing Mittens' incredible agility. The International Cat
              Federation is set to recognize Mittens' achievement officially next month.
            </p>
            <div className="bottom-content">
              <img
                src={catImage5}
                alt="Mittens the cat performing the record leap"
              />
              <p className="article-date">Published on: May 22, 2023</p>
              <p className="article-source">
                Source:{' '}
                <a
                  href="https://www.cnn.com/2023/05/22/us/mittens-cat-jump-record-trnd/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CNN
                </a>
              </p>
            </div>
          </div>
          <button onClick={openDialog}>Subscribe for News Updates</button>
        </div>

        {/* 6. Famous Cat Artist Releases New Collection */}
        <div className="cat-news">
          <div className="news-content">
            <h3>Picasso the Cat Unveils New Paw-Painted Art Collection</h3>
            <p>
              Picasso, a celebrated feline artist known for his unique paw-painted masterpieces, has
              released his latest collection titled "Whiskered Dreams." The collection features a
              variety of vibrant landscapes and abstract designs, attracting art enthusiasts and
              collectors alike. A portion of the proceeds will be donated to local animal shelters.
            </p>
            <div className="bottom-content">
              <img
                src={catImage6}
                alt={'Picasso the cat\'s latest art collection'}
              />
              <p className="article-date">Published on: April 10, 2023</p>
              <p className="article-source">
                Source:{' '}
                <a
                  href="https://www.artnews.com/art-news/news/picasso-cat-art-collection-1234645678/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ArtNews
                </a>
              </p>
            </div>
          </div>
          <button onClick={openDialog}>Subscribe for News Updates</button>
        </div>
      </div>

      {isDialogOpen && (
        <dialog id="subscription-dialog" className="subscription-dialog" ref={dialogRef}>
          {subscriptionSuccess ? (
            <div className="subscription-success">
              <p className="success-message" role="status" aria-live="polite">
                Subscription Successful!
              </p>
              <button type="button" onClick={closeDialog}>
                Close
              </button>
            </div>
          ) : (
            <form method="dialog" onSubmit={handleSubmit} noValidate>
              <h3>News Subscription</h3>
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                {errors.name && <span className="error">{errors.name}</span>}
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
              <div>
                <label htmlFor="subscribe">
                  <input
                    type="checkbox"
                    id="subscribe"
                    checked={formData.subscribe}
                    onChange={(e) =>
                      setFormData({ ...formData, subscribe: e.target.checked })
                    }
                  />
                  Accept Subscription
                </label>
              </div>
              <div className="dialog-buttons">
                <button type="submit">Submit</button>
                <button type="button" onClick={closeDialog}>
                  Cancel
                </button>
              </div>
            </form>
          )}
        </dialog>
      )}
    </main>
  );
}

export default CatNewsPage;
