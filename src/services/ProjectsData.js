const Technologies = {
    "JAVA": "Java",
    "JAVA_FX": "Java Fx",
    "JAVASCRIPT": "Javascript",
    "PHP": "Php",
    "LARAVEL": "Laravel",
    "SYMPHONY": "Symphony",
    "TYPESCRIPT": "Typescript",
    "REACT": "React Js",
    "NEXT": "Next Js",
    "VITE": "Vite Js",
    "TAILWIND": "Tailwind CSS",
    "FIREBASE": "Firebase",
    "VERCEL": "Vercel",
}

export const getLangageColor = (langage) => {
    switch (langage) {
        case Technologies.JAVA:
            return "bg-red-400";

        case Technologies.JAVA_FX:
            return "bg-orange-400";

        case Technologies.JAVASCRIPT:
            return "bg-yellow-400"

        case Technologies.PHP:
            return "bg-purple-400";

        case Technologies.LARAVEL:
            return "bg-red-600";

        case Technologies.SYMPHONY:
            return "bg-slate-200";

        case Technologies.TYPESCRIPT:
            return "bg-sky-400";

        case Technologies.REACT:
            return "bg-blue-500";

        case Technologies.NEXT:
            return "bg-neutral-900 text-slate-200"

        case Technologies.VITE:
            return "bg-indigo-800";

        case Technologies.TAILWIND:
            return "bg-cyan-500";

        case Technologies.FIREBASE:
            return "bg-orange-600";

        case Technologies.VERCEL:
            return "bg-zinc-900 text-gray-200";

        default:
            return "bg-slate-500";
    }
}

export const mastermind = [
    Technologies.JAVA, Technologies.JAVA_FX
]

export const spotifree = [
    Technologies.PHP, Technologies.TAILWIND
]

export const UHC_Run = [
    Technologies.JAVA
]

export const Portfolio = [
    Technologies.VITE, Technologies.JAVASCRIPT, Technologies.REACT,
    Technologies.TAILWIND
]