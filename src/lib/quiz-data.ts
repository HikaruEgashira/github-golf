import type { Question } from "./types";

export const quizQuestions: Question[] = [
	{
		id: 1,
		question: "よく使われる関数はどっち？",
		character: "Regex Search",
		characterImage:
			"https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&q=80&w=200&h=200",
		options: ["/fetch([^)]*)/", "/XMLHttpRequest([^)]*)/"],
		correctAnswer: 0,
		explanation:
			"XMLHttpRequestを直接使う人は少ない。`([^)]*)`で(から)までをマッチしてる",
		explanationImage: "./1_fetch.png,./1_xmlhttprequest.png",
	},
	{
		id: 2,
		question: "多いPull Requestはどっち?",
		character: "Pull Request Search",
		characterImage:
			"https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=200&h=200",
		options: ["typo in:title", "revert in:title"],
		correctAnswer: 0,
		explanation:
			"僅差でtypoが多い。Revertでは画面上から作成したカオスなPRを見つけることができる。",
		explanationImage: "./2_typo.png,./2_revert.png",
	},
	{
		id: 3,
		question: "Apiサーバーで実装されやすい機能は?",
		character: "path search",
		characterImage:
			"https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&q=80&w=200&h=200",
		options: [
			"path:api path:pdf symbol:pdf",
			"path:api path:webhook symbol:webhook",
		],
		correctAnswer: 1,
		explanation:
			"どちらもSSRFの脆弱性を狙われやすい。pathを利用して機能を探す。",
		explanationImage: "./3_pdf.png,./3_webhook.png",
	},
	{
		id: 4,
		question: "Usecase層の実行を表すメソッドとして人気なのは?",
		character: "symbol search",
		characterImage:
			"https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=200&h=200",
		options: ["symbol:usecase::run", "symbol:usecase::exec"],
		correctAnswer: 1,
		explanation:
			"圧倒的大差でexecが使われる。symbolで定義を探す。::でstruct内のメソッドを探す（言語に依存）",
		explanationImage: "./4_run.png,./4_exec.png",
	},
];
