# GitHub User Activity CLI

A simple command-line interface to fetch and display a GitHub user's recent activity. This tool is built for developers who want a quick way to check a user's latest public events directly from their terminal.

## Features
- Fetch User Activity: Retrieve a list of recent public events for any GitHub user.
- Clear Display: Presents activity in an easy-to-read, formatted list.
- User-Friendly Errors: Provides clear feedback for invalid usernames or API issues.
- Lightweight: A simple and fast tool with minimal dependencies.

## Prerequisites

To run this application, you must have Node.js installed on your system.

## Installation
1. Clone the repository:
```
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
```
2. Ensure Node.js is installed

## Usage
1. Run the application from your terminal:
```
    node index.js
```
2. Enter the GitHub username when prompted:
The application will ask you to Enter GitHub Username:. Type in the username and press Enter.
The CLI will then display a list of the user's recent public activities, such as pushes, stars, and forks.

Example Output:
```
Enter GitHub Username: octocat
Starred octocat/Hello-World
Pushed 1 commits to octocat/Hello-World
```