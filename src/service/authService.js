import userService from './userService.js';

// Somewhere in your component or application logic
userService.signUp({
  username: String,
  password: String,
  'g-recaptcha-response': String
})
  .then(response => {
    // Handle the API response data
    console.log(response.data);
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
  });
