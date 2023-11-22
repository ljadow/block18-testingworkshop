/* Testing Workshop
Unit Tests 

1. A function called "multiplication" that returns the product of the two input numbers.

expect multiplication(number,number) with number inputs to produce the product of number*number as a number
expect multiplication(2,4) to be 8 
expect multiplication(3,5,6) to be an error --> too many params
expect multiplication(5) to be an error --> only 1 param
expect multiplcation() to be an error --> no params
expect mulitplication(a, 4) to be an error --> NaN inputted
expect multiplication(0, any-integer) to always be 0 
expect multiplication(1, any-integer) to always be the integer
expect multiplication(any-integer,char) to produce an error 

2. A function called "concatOdds" takes two arrays of integers as arguments. It should return a single array that only contains the odd numbers, in ascending order, from both of the arrays.

expect concatOdds([1,2,4,"$"],[0,3,7,'a',6]) to result in [1,3,7] --> eliminate non-number array values
expect concatOdds([3,7,9,5,6, ,4],[5,4,3,2,2,5]) to result in [3,5,7] --> remove duplicate values
expect concatOdds([-5,-8,6,125,2],[0,-3,-16,7]) to result in [-5,-3,7,125] --> work with double and triple digit values
expect concatOdds ([],[1,5,2]) to give [1,5] --> accept an empty array
expect concatOdds ([],[]) to produce an error --> reject two empty arrays


Functional Test
3. A shopping cart checkout feature that allows a user to check out as a guest (without an account), or as a logged-in user. They should be allowed to do either, but should be asked if they want to create an account or log in if they check out as a guest.

When a user tries to check out with nothing in their cart, the checkout button should be deactivated so they cannot continue to check out process 
when a user checks out with 1 or more items in their cart, prompt them to "Check out as guest" or "Log in to checkout"
when a user selects "Log in to checkout", open the sign in page with username/email and password fields
when a user inputs a username/email and password combination and the username doesn't match a registered user's username, tell the user they don't have an account and serve them a form to fill out to make an account 
when a user inputs a username/email and password combination and the username matches a registered user's username, but the password doesn't match, prompt the user to retry entering their password
when a user tries 5 unsuccessful times to log in with the same user name and different passwords, ask the user if the site should send them an email to reset their password 
when a user inputs a username/email and password that matches a registered user's credentials, pass them on to the checkout page
when a user successfully logs in to check out, serve the user with the check out form autofilled with as much information as possible from their account 
when a user chooses to check out as a guest, prompt them with a screen asking if they want to create an account with an option to give their information or decline and continue to checkout 
when a user chooses to create an account, prompt them for their information and forward them to the checkout page with that information passed through 
when a user chooses to create an account and fills in contact information on the checkout page that matches an existing registered user, again, tell the user that you recognize that the email is associated with an account and offer to send an email to the user to reset their password so they can log in
when a user chooses not to create an account, serve them the blank checkout form 
when a user chooses not to create an account but fills in contact information on the checkout page that matches an existing registered user, tell the user that you recognize that the email is associated with an account and offer to send an email to the user to reset their password so they can log in
When a user tries to "Complete Purchase" and required form fields are filled in incorrectly or left empty, deactivate the "Complete Purchase" button and highlight fields that need to be corrected, as well as alert the user that they cannot continue without fixing their form
when a user fills in the fields with the proper inputs, activate the "Complete Purchase" button and process their order 