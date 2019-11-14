#  "All The Words That I Know" Game

A Word Game . See it deployed at [wordgame.now.sh](wordgame.now.sh).

This is based on a facebook post by author-editor Nathan J. Robinson, relevant extracts below:

    In order to relax I am writing a document called All The Words I Know (In The Order I Think Of Them), in which I try to list every word I know . . . It gets harder and harder as you go on of course and realize that you've already used lots of words. I realize this may be a strange way to unwind but people do sudoku and stuff and this doesn't feel much different to me . . . . it gets harder and harder to find ones you haven't used . . . . i bet one could write a simple program that would turn duplicates red or something if one knew how to do such things.

Your mission, should you choose to accept it, is to create such a simple program. I think a simple webpage with javascript would do it.

Pitched by [@xenotropic](https://github.com/xenotropic) at [https://github.com/open-source-ideas/open-source-ideas/issues/204](https://github.com/open-source-ideas/open-source-ideas/issues/204)

Please use the latest version of Firefox, Chrome or Safari to view the app. It uses native [dynamic imports](https://developers.google.com/web/updates/2017/11/dynamic-import).

If you have done all this before:

```
npm install -g polymer-cli
git clone https://github.com/amritghimire/word-game.git
cd word-game
npm install
polymer serve
```

Otherwise: 

  1.  [Set up a development environment for Polymer projects](#setup):
        * [Install Polymer CLI prerequisites](#installprerequisites).
        * [Install Polymer CLI](#installcli).
  2.  [Clone, install and serve the `word-game` project locally](#clone).
  3.  (Optional) [Build the `word-game` project for production](#build).
  4.  (Optional) [Deploy the `word-game` project](#deploy).

<a name="setup"></a>

## Set up a development environment for Polymer projects

Before you can serve this project, you will need to install Polymer CLI
and its prerequisites.

<a name="installprerequisites"></a>

### Install Polymer CLI Prerequisites

* [Git](https://git-scm.com/download/)
* [Node.js](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/)

<a name="installcli"></a>

### Install Polymer CLI

When you've installed the prerequisites, run the following command to install the Polymer CLI globally:

```
npm install -g polymer-cli
```

<a name="clone"></a>

## Clone, install and serve the word-game project locally

To clone the project, install its dependencies, and serve locally:

```
git clone https://github.com/amritghimire/word-game.git
cd word-game
npm install
polymer serve
```

To view the app, open the `applications` link in the latest version of Chrome or Safari. For example:

```
~/word-game > polymer serve
info:    Files in this directory are available under the following URLs
      applications: http://127.0.0.1:8081
      reusable components: http://127.0.0.1:8081/components/word-game/
```

In the example above, you'd open http://127.0.0.1:8081.

<a name="build"></a>

## Build the word-game project for production

To build the `word-game` app: 

```
npm install
polymer build
```

The build is output to `build/es6-unbundled`. To serve the built app locally:

```
cd build/es6-unbundled
polymer serve
```

<a name="deploy"></a>

## Deploy the word-game project

You can deploy a built Polymer app to any web server. One way is to deploy with Firebase:

<a name="firebase"></a>

### Deploy with Firebase

To deploy the app to your own Firebase project:

1.  [Install the Firebase CLI tools](https://firebase.google.com/docs/cli/).

    ```
    npm install -g firebase-tools
    firebase login
    ```

2.  From the [Firebase console](https://console.firebase.google.com/), create a Firebase project.

3.  [Initialize Firebase in your project folder](https://firebase.google.com/docs/cli/#initializing_a_project_directory). 

    ```
    firebase init
    ```

    Complete the Firebase initialization process to set up your project for hosting. 

    If you are prompted to

    * **select Firebase CLI features**, select **Hosting**.
    * **select a default Firebase project**, select the project you created from the Firebase console.
    * **specify a `public` directory**, you can enter `build/es6-unbundled` to deploy the build configuration supplied with this sample project.
    * **configure as a single-page app**, enter `Y`. 
    * **overwrite `index.html`**, enter `N`.

4.  In a text editor, open `firebase.json` from your root project folder.

    `hosting.ignore` is a list of files and folders that Firebase will not deploy. Remove the `node_modules` folder from this list and save `firebase.json`.

    **firebase.json: Before**

    ```
    {
        "hosting": {
            "public": "build/es6-unbundled",    
            "ignore": [
            "firebase.json",
            "**/.*",
            "**/node_modules/**"
            ],
            "rewrites": [
            {
                "source": "**",
                "destination": "/index.html"
            }
            ]
        }
    }
    ```

    **firebase.json: After**

    ```
    {
        "hosting": {
            "public": "build/es6-unbundled",
            "ignore": [
            "firebase.json",
            "**/.*"
            ],
            "rewrites": [
            {
                "source": "**",
                "destination": "/index.html"
            }
            ]
        }
    }
    ```

4.  [Deploy your project](https://firebase.google.com/docs/cli/#deployment) with Firebase.

    ```
    firebase deploy
    ```
