# Assignment - Basic Layout

**Due: Thu Sep 19, 11:59pm PT** 

## Goal

You will fill in the matching stylesheet for the provided HTML so that the rendered page matches the provided mockup image (differences due to browser window size are expected - your page should work for a wide range of desktop window sizes, but is not expected to work at mobile sizes yet).

## Submission Instructions

* Start from the up-to-date main branch (`git checkout main; git pull origin main`)
    - Make sure you switch to main first!  
    - If you get an error message when switching, do NOT just continue with later commands!
* Create a feature branch named 'basic-layout' (`git checkout -b basic-layout`)
* Add the necessary file in this directory (Hint: or in a subdirectory) to have the required features
* Add, commit, and push the branch to github
    - You pick the commit message, but it should summarize your work in this commit
    - Remember that your commit message is for the whole repo, not just this assignment.  If your change is specific to this assignment, mention that in the message.
    - Do NOT use "Adds MYNAME", that was the commit message for assignment 1 only
    - The push should be to this feature branch name (`git push origin basic-layout`) 
* Create a PR to merge to main
* Be sure to include the TA(s) and myself as Reviewer(s)

## Special Notes

- As mentioned in class, NORMALLY you will want your CSS selectors to be based on class names
    - Because you can't modify the HTML, that's not much of an option this time
    - This is intentional - This assignment is practicing creating and understanding selectors
    - But be sure to understand that what you do for this assignment will often be UNDESIRABLE for future assignments and real-world work
- Of particular note: Be sure to add padding/margins as needed to match the reference images
    - These show the highlight colors and behaviors, as well as behavior at different sizes
    - Most common mistake is to add a background color but no padding/margins, leaving the text feeling very cramped
    - Another common issue is failing to get the padding to work with the `<a>` elements.  Remember that `<a>` elements are `display: inline;` by default, and that limits how padding/margin/etc can impact the text flow as shown in class.
        - Notice the cursor to click is active over the entire area with a background color!

## Requirements

- Do NOT modify the html file
- A trick is that you can put a border on just one side: `border-bottom: 1px solid black;` or `border-right: 1px solid black;`
- The left-side menu is set to 20% of the page width - at different window sizes it will be different sizes
- The colors used are all named colors: black, plum, rebeccapurple, and pink. 
- You must view the file using `npx serve` (run in THIS directory, the one containing this README) and by visiting `http://localhost:3000/homepage.html` in the browser
    - If you use File->Open in your browser, the page will fail to load the styles.  This is intentional to force you to get used to using a web server (like `npx serve` as shown in class) to actually serve your files
    - Notice the `homepage.html` in the url above - that matches the filename
- The links in the page are not going to work if you try to follow them - that's fine, they are not part of the assignment

## Grading Rubric

Note: The assignment is to show your understanding of the material from class.  If you don't do that, you can lose points, even it "it works".  Do NOT copy or generate your work (see "do-not-copy-work.md" at the root of this repo).

This assignment is graded on a number of categories, each graded on the below scale:
- Missing (0)
- Needs Improvement (1)
- Good (2)
- Excellent (3)

This means a single mistake might cost you 0 points or more than 1 point, depending on how much that mistake changes your demonstration of the skills from class.

The categories for this assignment are:
- Submission
    - Does PR follow submission expectations?  (contains only change from assignment, correct branch name, good commit message(s), reviewers assigned)
- Overall Requirements
    - Does the project meet the goal?
    - Are general requirements met (anything not covered by "Matching Appearance")?
    - Were all restrictions obeyed?
        - In particular, do not change the HTML!
    - Were all requirements met in ways that showed understanding of the class material?
- Matching Appearance
    - Does your page match the layout and colors of the reference image?
    - Do the links show the hover colors and behaviors?
    - Do the color and clickable areas for links match the reference image?
        - Including the areas they cover and don't cover when hovered?
        - For both top menu links and sidenav links?
    - Does the page content react to smaller viewport size as the reference image does?
- Overall HTML Quality
    - Are required elements present, and all elements used correctly?
    - Are elements used with correct and appropriate semantics when available?
    - Are attributes and values used as taught and with required syntax?
    - Are elements indented when appropriate and consistently?
- Overall CSS Quality
    - Is all CSS loaded from separate CSS files?
    - Are CSS class names semantic?
    - Are CSS class names kebab-case or BEM style?
    - Are CSS classes preferred for selectors? (situational)
    - Are CSS properties consistently indented in their blocks, with space after the :?
    - Is the CSS applied wisely per class guidelines? (Not creating a page that only works for certain fixed screen sizes, etc)?

