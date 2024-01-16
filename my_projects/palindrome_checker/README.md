# Palindrome Checker

This is a simple web application that checks whether a given input is a palindrome or not. A palindrome is a word, phrase, or sequence that reads the same backward as forward.

## User Stories

1. **Empty Input Alert:**

   - When you click on the `#check-btn` element without entering a value into the `#text-input` element, an alert will appear with the text "Please input a value."

2. **Single Letter Palindrome:**

   - When the `#text-input` element only contains the letter A and the `#check-btn` element is clicked, the `#result` element will contain the text "A is a palindrome."

3. **Palindrome Phrases:**

   - When the `#text-input` element contains a palindrome phrase like "eye" or "\_eye" or "race car," and the `#check-btn` element is clicked, the `#result` element will contain the corresponding palindrome message.

4. **Non-Palindrome Phrases:**

   - When the `#text-input` element contains a non-palindrome phrase like "not a palindrome" and the `#check-btn` element is clicked, the `#result` element will contain the text "not a palindrome is not a palindrome."

5. **Complex Phrases:**

   - When the `#text-input` element contains complex phrases with spaces, punctuation, and mixed case (e.g., "A man, a plan, a canal. Panama" or "never odd or even") and the `#check-btn` element is clicked, the `#result` element will contain the corresponding palindrome message.

6. **Custom Phrases:**
   - Users can input custom phrases, and the application will determine whether they are palindromes or not.

## File Structure

The project structure includes:

- `index.html`: HTML file containing the structure and content of the palindrome checker.
- `styles/`: Directory containing CSS files for styling.
  - `styles.css`: CSS file containing styles for the palindrome checker.
- `scripts/`: Directory containing JavaScript files for functionality.
  - `script.js`: JavaScript file containing code for palindrome checking.

## Usage

To use the palindrome checker:

1. Clone the repository: `git clone https://github.com/omarnate1/projects/tree/main/my_projects/palindrome_checker`
2. Navigate to the project directory.
3. Open the `index.html` file in a web browser.

## Contributing

Contributions to enhance the user interface, improve functionality, optimize performance, or fix bugs are welcome! Follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/new-feature`
3. Make your changes.
4. Test the changes to ensure everything works properly.
5. Commit your changes: `git commit -m 'Add new feature'`
6. Push to the branch: `git push origin feature/new-feature`
7. Create a pull request.

## Credits

- The palindrome checker design and code are created by [Nathan].
