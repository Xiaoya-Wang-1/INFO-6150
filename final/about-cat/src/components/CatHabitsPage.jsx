import '../styles/cathabits.css';
import '../styles/global.css';

import catImage1 from '../assets/cat-image-1.png';
import catImage2 from '../assets/cat-image-2.png';
import catImage3 from '../assets/cat-image-3.png';
import catImage4 from '../assets/cat-image-4.png';
import catImage5 from '../assets/cat-image-5.png';
import catImage6 from '../assets/cat-image-6.png';
import catImage7 from '../assets/cat-image-7.png';

function CatHabitsPage() {
  return (
    <main>
      <h2>Introduction to Cat Habits</h2>
      <p>
        Cats are fascinating creatures with a rich history of companionship alongside humans. Their unique habits and behaviors have evolved to suit both their wild instincts and domestic lifestyles. Understanding these habits not only deepens the bond between you and your feline friend but also ensures a harmonious living environment.
      </p>

      <div className="cat-section">
        <img src={catImage1} alt="A Lovely Cat Image" className="cat-image left" />
        <div className="content">
          <h3>1. Common Cat Behaviors</h3>
          <p>
            Cats exhibit a wide range of behaviors that reflect their instincts and personalities. Understanding these behaviors can help you better cater to their needs and interpret their actions:
          </p>
          <ul>
            <li><b>Kneading:</b> Often referred to as "making biscuits," cats knead with their paws as a sign of comfort, contentment, or to mark their territory with scent glands located in their paws.</li>
            <li><b>Purring:</b> A soothing sound that typically indicates happiness, relaxation, or self-soothing during stress or discomfort.</li>
            <li><b>Grooming:</b> Cats spend a significant amount of time grooming to maintain their coat, regulate body temperature, and reduce stress. Over-grooming can sometimes signal anxiety or health issues.</li>
            <li><b>Hunting Instincts:</b> Even domesticated cats retain strong hunting instincts, often seen in their play behavior, stalking, and pouncing on toys or small objects.</li>
            <li><b>Territorial Marking:</b> Cats may spray or rub against objects to mark their territory, ensuring their space is recognized by other animals.</li>
          </ul>
          <p>
            Recognizing and respecting these behaviors can lead to a more harmonious relationship with your cat.
          </p>
        </div>
      </div>

      <div className="cat-section">
        <div className="content">
          <h3>2. Dietary Preferences</h3>
          <p>
            As obligate carnivores, cats require a diet rich in animal-based proteins to thrive. Proper nutrition is essential for their overall health, energy levels, and longevity.
          </p>
          <h4>Essential Nutrients</h4>
          <ul>
            <li><b>Protein:</b> Vital for muscle maintenance and overall growth.</li>
            <li><b>Taurine:</b> An essential amino acid crucial for heart and eye health.</li>
            <li><b>Arachidonic Acid:</b> A fatty acid necessary for skin health and inflammation regulation.</li>
            <li><b>Vitamins and Minerals:</b> Important for various bodily functions, including bone health and immune support.</li>
          </ul>
          <h4>Feeding Tips</h4>
          <ul>
            <li>Provide high-quality wet or dry cat food that meets AAFCO standards.</li>
            <li>Establish a consistent feeding schedule to regulate digestion and prevent obesity.</li>
            <li>Ensure fresh water is available at all times to keep your cat hydrated.</li>
            <li>Avoid free-feeding dry food to better monitor your cat’s intake and maintain a healthy weight.</li>
          </ul>
          <p>
            <strong>Foods to Avoid:</strong> Chocolate, onions, garlic, grapes, raisins, and dairy products like milk can be harmful to cats. Always consult your veterinarian before introducing new foods into your cat's diet.
          </p>
        </div>
        <img src={catImage2} alt="A Lovely Cat Image" className="cat-image right" />
      </div>

      <section className="cat-section">
        <img src={catImage3} alt="A Cat Playing" className="cat-image left" />
        <div className="content">
          <h3>3. Favorite Toys and Activities</h3>
          <p>
            Playtime is essential for a cat’s physical and mental well-being. Engaging in regular play sessions helps prevent boredom, reduces stress, and stimulates their natural instincts.
          </p>
          <ul>
            <li><b>Feather Wands and Laser Pointers:</b> Encourage chasing and pouncing, mimicking hunting behavior.</li>
            <li><b>Interactive Puzzle Feeders:</b> Challenge your cat’s problem-solving skills and provide mental stimulation.</li>
            <li><b>Scratching Posts and Climbing Trees:</b> Satisfy their instinct to scratch and climb, promoting healthy claws and providing exercise.</li>
            <li><b>Catnip Toys:</b> Many cats enjoy the stimulating effects of catnip, leading to playful and energetic behavior.</li>
            <li><b>Balls and Mousies:</b> Simple toys that can be batted around, chased, and carried, keeping your cat entertained for hours.</li>
          </ul>
          <p>
            Rotate toys regularly to maintain your cat’s interest and introduce new activities to keep them engaged.
          </p>
        </div>
      </section>

      <div className="cat-section">
        <div className="content">
          <h3>4. Keeping Your Cat Happy and Healthy</h3>
          <p>
            A happy and healthy cat requires a balanced environment that caters to their physical, mental, and emotional needs. Here are some key areas to focus on:
          </p>
          <ul>
            <li><b>Balanced Diet:</b> As discussed, providing the right nutrition is foundational to your cat’s health.</li>
            <li><b>Regular Exercise:</b> Encourage physical activity through play and environmental enrichment to maintain a healthy weight and prevent obesity.</li>
            <li><b>Routine Vet Checkups:</b> Schedule annual veterinary visits to monitor your cat’s health, vaccinations, and dental care.</li>
            <li><b>Clean Litter Box:</b> Maintain a clean litter box in a quiet, accessible area to encourage consistent use and prevent accidents.</li>
            <li><b>Comfortable Living Spaces:</b> Provide a mix of perches, cozy beds, and hiding spots to allow your cat to rest and observe their environment.</li>
            <li><b>Grooming:</b> Regular brushing helps reduce shedding, prevent matting, and minimizes hairballs.</li>
          </ul>
          <p>
            Additionally, maintaining a safe indoor environment protects your cat from outdoor hazards and contributes to their overall well-being.
          </p>
        </div>
        <img src={catImage4} alt="A Cat Relaxing" className="cat-image right" />
      </div>

      <div className="cat-section">
        <img src={catImage5} alt="A Cat in a Safe Space" className="cat-image left" />
        <div className="content">
          <h3>5. Reducing Stress</h3>
          <p>
            Cats are sensitive animals that can easily become stressed by changes in their environment or routine. Minimizing stress is crucial for their health and happiness.
          </p>
          <ul>
            <li><b>Consistent Routine:</b> Stick to regular feeding, playtime, and bedtime schedules to provide a sense of security.</li>
            <li><b>Gradual Introductions:</b> When introducing new pets or people, do so slowly to prevent overwhelming your cat.</li>
            <li><b>Safe Hiding Spots:</b> Ensure your cat has access to quiet areas where they can retreat and relax when feeling anxious.</li>
            <li><b>Aromatherapy:</b> Use feline-friendly essential oils like lavender to create a calming environment (consult your vet before use).</li>
            <li><b>Environmental Enrichment:</b> Provide stimulating activities and toys to keep your cat engaged and reduce boredom-related stress.</li>
          </ul>
          <p>
            Recognizing signs of stress, such as excessive grooming, hiding, or changes in appetite, allows you to address potential issues promptly.
          </p>
        </div>
      </div>

      <div className="cat-section">
        <div className="content">
          <h3>6. Tips for Interaction</h3>
          <p>
            Building a strong bond with your cat involves understanding their unique cues and fostering positive interactions. Here are some effective strategies:
          </p>
          <ul>
            <li><b>Respect Their Space:</b> Allow your cat to approach you on their terms. Forcing interaction can lead to fear or aggression.</li>
            <li><b>Learn Their Body Language:</b> Pay attention to signs like a flicking tail, flattened ears, or dilated pupils to gauge your cat’s mood and comfort level.</li>
            <li><b>Engage in Interactive Play:</b> Use toys that mimic prey to satisfy their hunting instincts and provide physical exercise.</li>
            <li><b>Positive Reinforcement:</b> Reward desired behaviors with treats, praise, or affection to encourage repeat actions.</li>
            <li><b>Gentle Grooming:</b> Regular brushing can be a bonding activity, especially for cats that enjoy being groomed.</li>
            <li><b>Provide Vertical Spaces:</b> Cats love to observe their surroundings from higher vantage points. Installing shelves or cat trees can enhance their environment.</li>
          </ul>
          <p>
            Patience and consistency are key. Over time, these interactions will help build trust and deepen your relationship with your cat.
          </p>
        </div>
        <img src={catImage6} alt="A Cat Interacting" className="cat-image right" />
      </div>

      <div className="cat-section">
        <img src={catImage7} alt="A Cat Communicating" className="cat-image left" />
        <div className="content">
          <h3>7. Understanding Cat Communication</h3>
          <p>
            Cats communicate through a combination of vocalizations, body language, and scent signals. Understanding these methods can enhance your ability to respond to your cat’s needs effectively.
          </p>
          <ul>
            <li><b>Vocalizations:</b> From meows and purrs to hisses and growls, each sound conveys different emotions or messages.</li>
            <li><b>Body Language:</b> Tail position, ear orientation, and overall posture can indicate whether a cat is relaxed, anxious, or agitated.</li>
            <li><b>Scent Marking:</b> Rubbing against objects or people deposits pheromones, marking territory and signaling familiarity.</li>
            <li><b>Eye Contact:</b> Slow blinking is a sign of trust and affection, often referred to as a "cat kiss."</li>
          </ul>
          <p>
            By paying close attention to these communication signals, you can better understand your cat’s needs and strengthen your bond.
          </p>
        </div>
      </div>

      <div className="question-section">
        <p>
        By observing and respecting your cat’s habits and preferences, you can create a strong bond and ensure a happy, healthy life together. Remember that each cat is unique, and taking the time to understand their individual needs will lead to a fulfilling relationship for both of you.
        </p>
        <div className="questions">
          <h3>Frequently Asked Questions</h3>
          <p>
            <ul>
              <li><b>How often should I groom my cat?</b>
                <p>While short-haired cats may only need brushing once a week, long-haired breeds might require daily grooming to prevent matting.</p>
              </li>
              <li><b>Is it okay to declaw my cat?</b>
                <p>Declawing is generally discouraged as it can lead to behavioral issues and physical problems. Alternative solutions like regular nail trimming and providing scratching posts are recommended.</p>
              </li>
              <li><b>How can I help my cat lose weight?</b>
                <p>Consult your veterinarian to establish a proper diet plan, increase physical activity through play, and monitor their weight regularly.</p>
              </li>
              <li><b>What should I do if my cat is hiding excessively?</b>
                <p>Excessive hiding can be a sign of stress, illness, or fear. It's important to consult with a veterinarian to rule out any health issues and address environmental stressors.</p>
              </li>
              </ul>
            </p>
          </div>
      </div>
    </main>
  );
}

export default CatHabitsPage;
