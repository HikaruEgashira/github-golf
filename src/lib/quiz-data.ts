import type { Question } from "./types";

export const quizQuestions: Question[] = [
	{
		id: 1,
		question: "What's the command to create a new branch in Git?",
		character: "Branching Octocat",
		characterImage:
			"https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&q=80&w=200&h=200",
		options: [
			"git branch new-branch",
			"git checkout -b new-branch",
			"git create branch",
			"git new branch",
		],
		correctAnswer: 1,
		explanation:
			"git checkout -b new-branch creates and switches to a new branch in one command. It's a shorthand for git branch new-branch followed by git checkout new-branch.",
		explanationImage:
			"https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=1200",
	},
	{
		id: 2,
		question: "Which command shows the commit history?",
		character: "History Octocat",
		characterImage:
			"https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=200&h=200",
		options: ["git show", "git history", "git log", "git commits"],
		correctAnswer: 2,
		explanation:
			"git log shows the commit history of your repository. It displays commit hashes, authors, dates, and commit messages in reverse chronological order.",
		explanationImage:
			"https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=1200",
	},
	{
		id: 3,
		question: "How do you stage all changes for commit?",
		character: "Staging Octocat",
		characterImage:
			"https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&q=80&w=200&h=200",
		options: ["git commit -a", "git stage all", "git add .", "git stage -all"],
		correctAnswer: 2,
		explanation:
			"git add . stages all changes in the current directory and its subdirectories. The dot (.) represents the current directory and all its contents.",
		explanationImage:
			"https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=1200",
	},
	{
		id: 4,
		question: "What's the command to push to remote?",
		character: "Push Master Octocat",
		characterImage:
			"https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=200&h=200",
		options: [
			"git push origin main",
			"git send main",
			"git upload main",
			"git publish main",
		],
		correctAnswer: 0,
		explanation:
			"git push origin main pushes your local main branch to the remote repository named 'origin'. This is the standard way to upload your commits to a remote repository.",
		explanationImage:
			"https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=1200",
	},
];
