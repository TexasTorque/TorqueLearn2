const git = {
    how_to_clone: [
        "<p>A TexasTorque Repository is structured very specifically. Here is a high-level overview of important directories and files in a repo.</p>",

        "<pre>",
        "<p>├── build.gradle</p>",
        "<p>├── gradle</p>",
        "<p>├── gradlew</p>",
        "<p>├── gradlew.bat</p>",
        "<p>├── settings.gradle</p>",
        "<p>├── src</p>",
        "<p>│   └── main</p>",
        "<p>│       <p>├── deploy</p>",
        "<p>│       └── java</p>",
        "<p>│           └── org</p>",
        "<p>│                   └── texastorque</p>",
        "<p>│                       ├── Main.java</p>",
        "<p>│                       ├── Robot.java</p>",
        "<p>│                       ├── constants</p>",
        "<p>│                       ├── inputs</p>",
        "<p>│                       ├── subsystems</p>",
        "<p>│                       ├── torquelib    <- Git Submodule</p>",
        "<p>│                       └── util         <- Git Submodule</p>",
        "<p>└── vendordeps</p>",
        "<p>    ├── Phoenix.json</p>",
        "<p>    ├── REVRobotics.json</p>",
        "<p>    ├── WPILibNewCommands.json</p>",
        "<p>    └── WPILibOldCommands.json</p>",
        "</pre>",

        "<p>Our repositories rely on two libraries, TorqueLib and Util. They are both Git Submodules, which are essentially repositories in a repository.</p>",

        "<p>Before cloning a repository, you must be signed in to your GitHub account on the TexasTorque GitHub organization. When the option becomes available, you also should have a directory (folder) of all your TexasTorque projects.</p>",

        "<p>To clone the repo, you must use the command line palette function called \"**Git: Clone (recursive)**\" and type in the URL of the GitHub repository you are cloning.</p>",

        "<p>When the option becomes available, in the bottom right, select OPEN.</p>",

        "<p>If you have done everything correctly, your source control tab should look like this:</p>",

        "<img class='image' src=\"/imgs/correctsourcecontrol.png\" alt=\"source control repo\">",
    ],
    vscode_git: [
        "<p>Pushing and pulling from GitHub is one of the many reasons that Torque is such a great, organized team. Through the use of uploading code to share and archive, it becomes especially helpful to rookies like you and I (or even some senior programmers) to be able to reference older code to see how things should be set up, initialized, utilized, organized effectively, etc. It would be highly recommended for you to not only read through all of these documents to learn how to use GitHub efficiently, but to further research into more efficient or interesting ways to save time and energy.</p>",

        "<h3>Cloning Repositories</h3>",

        "<p>The first thing that you need to do if you want to directly use GitHub pushing and pulling with VSCode is to copy the URL of the repository that you want to clone. Then, use the Ctrl+Shift+P (or Cmd+Shift+P) and then ensure that there is the > symbol in the popup text frame.</p>",

        "<p>Next, type Git and you should see the option for Git Clone (Recursive). Click on this and then paste in the URL of your desired repository.</p>",

        "<p>*Note: If you do accidentally clone the repository without doing it recursively, then you will likely get errors from random classes/packages (submodules) not being imported. To fix this issue, you can open a terminal in VSCode and type \"git update --init --recursive\". This should solve your error.*</p>",

        "<h3>Pulling and Pushing Code</h3>",

        "<p>If you have cloned a repo and are working on it with multiple people, then it is possible that someone else has been working on the same repository and pushed new changes to it. If this does happen, then it is important that you first pull the repository and merge it with your code to see if any errors or important discrepancies have occurred.</p>",

        "<p>To do this, go to the Source Control tab on the left toolbar in VS Code and click on the three dots in the top right of the Source Control title. Click Stash, and then Stash. Next, you will likely be prompted to add a stash message, so type something summarizing what changes you made. Stashing your changes is important because if you just push or pull without stashing, you might realize that you need to undo the push/pull and if you have your changes stashed, then it is possible to go back to your code before the push/pull.</p>",

        "<p>Next, you will need to stage your changes. Click on the three dots in the top right of the title bar, click on Changes, and then Stage All Changes. This is essentially the first step of three to pushing code to git. After this, you can click on the message window beneath the Source Control title bar and type in a short, informative message (which can be the same as your stash message) and then you can do either Ctrl+Enter or Cmd+Enter for PC and Mac users respectively. After this, all you have to do is once again click on the three dots, and then click push!</p>",
    ],
    git_introduction: [
        "<h3>Git</h3>",
        
        "Git is a version-control utility used for syncing code between multiple programmers _statefully_ (Requiring the state, or current condition of two or more synced items, to be similar). As a member of Texas Torque, you will be using Git to interact with the <a href='https://github.com/TexasTorque'>Texas Torque codebase</a> which is hosted on <i>GitHub</i>.</p>",
        
        "<h3>Installation</h3>",
        
        "<p><b>Linux:</b> Linux builds come with Git,</p>",
        
        "<p><b>OSX:</b> OSX comes with Git,<p/>",
        
        "<p><b>Windows:</b> Download and install <a href='https://git-scm.com/download/win'>Git for Windows</a>. After installing, you can open up the Git CLI by searching for it in the Windows menu.</p>",
        
        "<h3>Cloning a Repository</h3>",
        
        "<p>In order to begin working on a project, you must first clone a repository. Think of cloning as downloading the files but with Git giving you extra capabilities. To initiate a clone, go to the directory you want the folder to be placed.</p>",
        
        "<p>`cd path/to/directory`,</p>",
        
        "<p>Then initiate the clone using `git clone <url>`,</p>",
        
        "<p>`git clone --recursive https://github.com/TexasTorque/2020NewPeople`,</p>",
        
        "<p>The files will be downloaded into a folder sharing the same name as the repository.</p>",
        
        "<h3>Using Branches</h3>",
        
        "<p>Unless otherwise told, you should be using `branches` while editing the code. Branches, like tree branches, separate the code from production and allow other teammates to check your code before `merging` (accepting) it.</p>",
        
        "<p>To create a new branch, use the following command,</p>",
        
        "<p>`git branch <name>`,</p>",
        
        "<p>Then you can `checkout` the branch using,</p>",
        
        "<p>`git checkout <name>`,</p>",
        
        "<p>All changes you make will then be on the `<name>` branch.</p>",
        
        "<h3>Making Changes</h3>",
        
        "<p>Git tracks all changes that you create in your code automatically. When you are ready to propose a new change to the code for everyone else, you must first `stage` it. To do so, you will want to add the file(s) you changed.</p>",
        
        "<p>To see the files you have edited, you can use the `git status` command,</p>",
        
        "<p>`git status`,</p>",
        
        "<p>To add a file to the stage you can use `git add <filename>`, such as,</p>",
        
        "<p>`git add Main.java`,</p>",
        
        "<h3>Committing Changes</h3>",
        
        "<p>Once you have added all the files you wish, you can then `commit` the changes to be produced. Like a relationship, only commit once you are ready to push the files; if you mess up, use <a src='https://dangitgit.com/en'>this</a> resource.</p>",
        
        "<p>The command follows the following syntax,</p>",
        
        "<p>`git commit -m 'Message describing what you did'`,</p>",
        
        "<h3>Pushing Changes</h3>",
        
        "<p>When you are ready to send your changes to the rest of the team you may `push` your changes. This moves the code you committed from your local computer to the cloud where others can see. Always confirm that your code builds properly `before` pushing your code. Please note you may commit multiple times before deciding to push your changes.</p>",
        
        "<p>The command uses the following syntax,</p>",
        
        "<p>`git push origin <branch>`,</p>",
        
        "<p>If you are working directly on `master` (the default) then `<branch>` is master. Otherwise, use the branch name that you checked out.</p>",
        
        "<h3>Pulling Changes</h3>",
        
        "<p>If you have a repository already cloned, you can download the latest changes with `git pull`.</p>",
        
        "<p>The syntax is,</p>",
        
        "<p>`git pull origin BRANCH`,</p>",
        
        "<p>If you are working directly on `master` (the default) then `BRANCH` is master. Otherwise, use the branch name that you checked out.</p>",
        
        "<p>*Note: Before starting a new branch, always checkout master and pull from it. Otherwise, you will run into issues.*</p>",
        
        "<h3>Merging Code</h3>",
        
        "<p>Occasionally you will run into the problem of merging your code on your local machine. This occurs when you are trying to push your changes to a branch, but someone has already made changes that you don't have.</p>",
        
        "<p>In order to solve this, `git pull` the branch in question.</p>",
        
        "<p>This will open up a text editor you can use to create a merge message. Simply arrow key to the bottom, type in a quick message, and then hit the letter `q`.</p>",
        
        "<p>Once complete, you will be allowed to push your code.</p>",
        
        "<h3>Pulling Submodules</h3>",
        
        "<p>You can initially pull the code of submodules using the following,</p>",
        
        "<p>`git submodule update --init --recursive`,</p>",
        
        "<h3>Updating Submodules</h3>",
        
        "<p>You can update submodules using the following,</p>",
        
        "<p>`git submodule update --remote --merge`,</p>",
    ]
}