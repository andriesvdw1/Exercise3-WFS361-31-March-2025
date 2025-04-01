
# Exercise 1: Show User Role Description
## Objective:
### Use an object to determine the message shown based on the user's role.
Data:
const roleDescriptions = {
admin: "You have full access.",
editor: "You can edit content.",
viewer: "You can view content only.",
};
Create a UserRole component that takes a role prop and shows the correct description from the object. If the role is not found, show "Unknown role"
Exercise 2: Feature Access Matrix
✓ Objective:
Check if a user has access to a feature based on their plan using a decision object.
Data:
const accessMatrix = {
basic: {
dashboard: true,
analytics: false,
},
premium: {
dashboard: true,
analytics: true,
},
};
Task:
Create a FeatureAccess component that takes plan and feature props and displays:
✔"Feature is available."
X "Upgrade your plan to access this feature."
● "Invalid plan or feature." if the key is missing
/ Exercise 3: Language Switcher
✓ Objective:
Display translated text using a language code and an object lookup.
jsx
Data:
Copy
Edit
const translations {
en: { greeting: "Hello", farewell: "Goodbye" },
es: { greeting: "Hola", farewell: "Adiós" },
fr: { greeting: "Bonjour", farewell: "Au revoir" },
Task:
Create a Translator component with props: lang and type (either "greeting" or "farewell"). Display the correct translation or show "Translation not available."