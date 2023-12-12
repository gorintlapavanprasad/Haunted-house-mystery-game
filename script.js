function goToWelcomePage() {
  const gameContainer = document.getElementById('game-container');
  gameContainer.innerHTML = ""; // Clear existing content

  const welcomeImage = document.createElement('img');
  welcomeImage.id = 'story-image';
  welcomeImage.src = 'house_entrance.jpg';
  welcomeImage.alt = 'House Entrance Image';

  const welcomeText = document.createElement('div');
  welcomeText.id = 'story-text';
  welcomeText.textContent = 'Welcome to the haunted house! Choose your next destination:';

  const welcomeButtonContainer = document.createElement('div');
  welcomeButtonContainer.id = 'button-container';

  const enterLivingRoomButton = document.createElement('button');
  enterLivingRoomButton.textContent = 'Enter into the Living Room';
  enterLivingRoomButton.onclick = enterLivingRoom;

  const enterBedroomButton = document.createElement('button');
  enterBedroomButton.textContent = 'Enter into the Bedroom';
  enterBedroomButton.onclick = enterBedroom;

  welcomeButtonContainer.appendChild(enterLivingRoomButton);
  welcomeButtonContainer.appendChild(enterBedroomButton);

  gameContainer.appendChild(welcomeImage);
  gameContainer.appendChild(welcomeText);
  gameContainer.appendChild(welcomeButtonContainer);
}

function enterLivingRoom() {
  const storyText = document.getElementById('story-text');
  storyText.textContent = 'You enter the Living Room. There\'s a sense of foreboding. Two choices await.';
  updateChoices(["Inspect the Fireplace", "Explore the Dining Area"]);
}

function enterBedroom() {
  const storyText = document.getElementById('story-text');
  storyText.textContent = 'You enter the Bedroom. A wardrobe and a door to the washroom are noticeable. What will you do?';
  updateChoices(["Open the Closet", "Enter the Washroom"]);
}

function updateChoices(choices) {
  const buttonContainer = document.getElementById('button-container');
  buttonContainer.innerHTML = '';

  choices.forEach((choice, index) => {
    const button = document.createElement('button');
    button.textContent = choice;
    button.id = `choice${index + 1}`;
    button.onclick = () => eval(`${button.id}()`);
    buttonContainer.appendChild(button);
  });
}

function enterLivingRoom() {
  const gameContainer = document.getElementById('game-container');
  gameContainer.innerHTML = ""; // Clear existing content

  const livingRoomImage = document.createElement('img');
  livingRoomImage.id = 'story-image';
  livingRoomImage.src = 'living_room.jpg';
  livingRoomImage.alt = 'Living Room Image';

  const livingRoomText = document.createElement('div');
  livingRoomText.id = 'story-text';
  livingRoomText.textContent = 'You enter the Living Room. There\'s a sense of foreboding. Two choices await.';

  const livingRoomButtonContainer = document.createElement('div');
  livingRoomButtonContainer.id = 'button-container';

  const inspectFireplaceButton = document.createElement('button');
  inspectFireplaceButton.textContent = 'Inspect the Fireplace';
  inspectFireplaceButton.onclick = inspectFireplace;

  const exploreDiningAreaButton = document.createElement('button');
  exploreDiningAreaButton.textContent = 'Explore the Dining Area';
  exploreDiningAreaButton.onclick = exploreDiningArea;

  livingRoomButtonContainer.appendChild(inspectFireplaceButton);
  livingRoomButtonContainer.appendChild(exploreDiningAreaButton);

  gameContainer.appendChild(livingRoomImage);
  gameContainer.appendChild(livingRoomText);
  gameContainer.appendChild(livingRoomButtonContainer);
}

function inspectFireplace() {
  const storyText = document.getElementById('story-text');
  storyText.textContent = "The fireplace hides a hidden passage. A mysterious aura emanates from it. What's your choice?";
  updateChoices(["Enter the Passage", "Return to the Living Room"]);
}

function exploreDiningArea() {
  const storyText = document.getElementById('story-text');
  storyText.textContent = "The Dining Area seems ordinary. However, there's a trapdoor under the rug. What will you do?";
  updateChoices(["Open the Trapdoor", "Leave the Dining Area"]);
}


function enterBedroom() {
  const gameContainer = document.getElementById('game-container');
  gameContainer.innerHTML = ""; // Clear existing content

  const bedroomImage = document.createElement('img');
  bedroomImage.id = 'story-image';
  bedroomImage.src = 'bedroom.jpg';
  bedroomImage.alt = 'Bedroom Image';

  const bedroomText = document.createElement('div');
  bedroomText.id = 'story-text';
  bedroomText.textContent = "You enter the Bedroom. A wardrobe and a door to the washroom are noticeable. What will you do?";

  const bedroomButtonContainer = document.createElement('div');
  bedroomButtonContainer.id = 'button-container';

  const openClosetButton = document.createElement('button');
  openClosetButton.textContent = 'Open the Closet';
  openClosetButton.onclick = openCloset;

  const enterWashroomButton = document.createElement('button');
  enterWashroomButton.textContent = 'Enter the Washroom';
  enterWashroomButton.onclick = enterWashroom;

  bedroomButtonContainer.appendChild(openClosetButton);
  bedroomButtonContainer.appendChild(enterWashroomButton);

  gameContainer.appendChild(bedroomImage);
  gameContainer.appendChild(bedroomText);
  gameContainer.appendChild(bedroomButtonContainer);
}

function openCloset() {
  const storyText = document.getElementById('story-text');
  storyText.textContent = "As you open the closet, you find a key. It might be useful. What's your next move?";
  updateChoices(["Take the Key", "Leave the Closet"]);
}

function enterWashroom() {
  const storyText = document.getElementById('story-text');
  storyText.textContent = "The washroom is eerily quiet. Something feels off. What will you do?";
  updateChoices(["Look in the Mirror", "Leave the Washroom"]);
}


function knowMore() {
  const gameContainer = document.getElementById('game-container');
  gameContainer.innerHTML = ""; // Clear existing content

  const hauntedStoryText = document.createElement('div');
  hauntedStoryText.id = 'story-text';
  hauntedStoryText.textContent = "You delve into the haunted history of the house...\n\n" +
    "Long ago, a family lived in this house, but tragedy struck, leaving lingering spirits and unsolved mysteries. " +
    "Whispers of ghostly apparitions and strange occurrences echo through its halls. " +
    "Dare you uncover the secrets hidden within its haunted walls?";

  const returnButtonContainer = document.createElement('div');
  returnButtonContainer.id = 'button-container';

  const returnButton = document.createElement('button');
  returnButton.textContent = 'Return';
  returnButton.onclick = goToWelcomePage;

  returnButtonContainer.appendChild(returnButton);

  gameContainer.appendChild(hauntedStoryText);
  gameContainer.appendChild(returnButtonContainer);
}


// Your existing functions remain unchanged

function inspectFireplace() {
  const gameContainer = document.getElementById('game-container');
  gameContainer.innerHTML = ""; // Clear existing content

  const fireplaceImage = document.createElement('img');
  fireplaceImage.id = 'story-image';
  fireplaceImage.src = 'fireplace.jpg'; // Replace with the actual fireplace image
  fireplaceImage.alt = 'Fireplace Image with Scary Ghost';

  const fireplaceText = document.createElement('div');
  fireplaceText.id = 'story-text';
  fireplaceText.textContent = "You inspect the fireplace closely...\n\n" +
    "Suddenly, a scary ghost materializes, sending shivers down your spine.";

  const returnButtonContainer = document.createElement('div');
  returnButtonContainer.id = 'button-container';

  const returnButton = document.createElement('button');
  returnButton.textContent = 'Return to the Main Page';
  returnButton.onclick = goToWelcomePage;

  returnButtonContainer.appendChild(returnButton);

  gameContainer.appendChild(fireplaceImage);
  gameContainer.appendChild(fireplaceText);
  gameContainer.appendChild(returnButtonContainer);
}


// Your existing functions remain unchanged

function openCloset() {
  const gameContainer = document.getElementById('game-container');
  gameContainer.innerHTML = ""; // Clear existing content

  const ghostImage = document.createElement('img');
  ghostImage.id = 'story-image';
  ghostImage.src = 'ghost.jpg'; // Replace with the actual ghost image
  ghostImage.alt = 'Ghost Image';

  const ghostText = document.createElement('div');
  ghostText.id = 'story-text';
  ghostText.textContent = "As you open the closet, a ghost emerges with a spine-chilling presence. You've encountered a restless spirit!";

  const returnButtonContainer = document.createElement('div');
  returnButtonContainer.id = 'button-container';

  const returnButton = document.createElement('button');
  returnButton.textContent = 'Return to the Main Page';
  returnButton.onclick = goToWelcomePage;

  returnButtonContainer.appendChild(returnButton);

  gameContainer.appendChild(ghostImage);
  gameContainer.appendChild(ghostText);
  gameContainer.appendChild(returnButtonContainer);
}



// Your existing functions remain unchanged

function enterWashroom() {
  const gameContainer = document.getElementById('game-container');
  gameContainer.innerHTML = ""; // Clear existing content

  const ghostInWashroomImage = document.createElement('img');
  ghostInWashroomImage.id = 'story-image';
  ghostInWashroomImage.src = 'ghost_in_washroom.jpg'; // Replace with the actual image of the ghost in the washroom
  ghostInWashroomImage.alt = 'Ghost in Washroom Image';

  const ghostInWashroomText = document.createElement('div');
  ghostInWashroomText.id = 'story-text';
  ghostInWashroomText.textContent = "As you enter the washroom, a ghost appears, haunting the space with an eerie presence.";

  const returnButtonContainer = document.createElement('div');
  returnButtonContainer.id = 'button-container';

  const returnButton = document.createElement('button');
  returnButton.textContent = 'Return to the Main Page';
  returnButton.onclick = goToWelcomePage;

  returnButtonContainer.appendChild(returnButton);

  gameContainer.appendChild(ghostInWashroomImage);
  gameContainer.appendChild(ghostInWashroomText);
  gameContainer.appendChild(returnButtonContainer);
}
// Your existing functions remain unchanged

function exploreDiningArea() {
  const gameContainer = document.getElementById('game-container');
  gameContainer.innerHTML = ""; // Clear existing content

  const diningRoomImage = document.createElement('img');
  diningRoomImage.id = 'story-image';
  diningRoomImage.src = 'dining_room.jpg'; // Replace with the actual image of the dining room
  diningRoomImage.alt = 'Dining Room Image';

  const diningRoomText = document.createElement('div');
  diningRoomText.id = 'story-text';
  diningRoomText.textContent = "As you explore the dining area, you find a mysterious atmosphere lingering. Shadows dance in the corners of the room.";

  const returnButtonContainer = document.createElement('div');
  returnButtonContainer.id = 'button-container';

  const returnButton = document.createElement('button');
  returnButton.textContent = 'Return to the Main Page';
  returnButton.onclick = goToWelcomePage;

  returnButtonContainer.appendChild(returnButton);

  gameContainer.appendChild(diningRoomImage);
  gameContainer.appendChild(diningRoomText);
  gameContainer.appendChild(returnButtonContainer);
}



