// Write your code in this file!
const currentUser = 'Pedro';
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
//!const excitedWelcomeMessage = `WELCOME TO FLATBOOK, ${currentUser}!`;
const excitedWelcomeMessage = welcomeMessage.toUpperCase();
const shortGreeting = `Welcome, ${currentUser.slice(0,1)}!`