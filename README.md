# -PLPBasicGitAssignment-
Hands-On Assignment: Basic Git And GitHub Workflow

Task 1: Repository Setup

1. GitHub Repository Creation:

  - Log in to your GitHub account.

  - Create a new repository on GitHub (let's call it "PLPBasicGitAssignment").

  - Initialize it with a README file.



Task 2: Local Setup

2. Local Folder Setup:

  - Create a new folder on your local machine : PLPBasicGitAssignment

  - Open a terminal or command prompt and navigate to the created folder.



3. Git Initialization:

  - Initialize a new Git repository in your local folder.



4. Connecting to GitHub:

  - Link your local repository to the GitHub repository you created in Task 1.

   ```

git remote add origin https://github.com/CherylRachael/-PLPBasicGitAssignment-.git

   ```




Task 3: Making Changes

5. Create a File:

  - Inside your local folder, create a new text file (e.g., `hello.txt`).

  - Add a simple text message (e.g., "Hello, Git!").



6. Committing Changes:

  - Stage the changes.

   

   git add hello.txt

   ```

  - Commit the changes.


   git commit -m "Add hello.txt with a greeting"

   ```



Task 4: Pushing to GitHub

7. Pushing to GitHub:

  - Push the committed changes to your GitHub repository.

   ```bash

   git push  origin master

   ```



Task 5: Verification

8. Verify on GitHub:

  - Visit your GitHub repository in a web browser and confirm that the `hello.txt` file and commit message are visible.




