# Mastering TypeScript

A structured TypeScript learning repository focused on developing a deep understanding of TypeScript and becoming comfortable building full-stack applications with **React and Next.js**.

Since I already have a solid understanding of JavaScript, this repository focuses primarily on TypeScript's type system, advanced concepts, practical patterns, and real-world application.

## Learning Approach

Each `day_*` folder represents one learning session.

Every day contains:

* `topics.md` — topics and concepts covered during that day
* `index.ts` — hands-on TypeScript practice
* Additional `.ts` files when a topic requires separate practice

The learning order follows the dependency between concepts, starting from TypeScript fundamentals and gradually moving toward advanced TypeScript, React, and Next.js.

## Project Structure

```text
mastering-typescript/
├── README.md
├── package.json
├── tsconfig.json
├── .gitignore
│
└── src/
    ├── day_0/
    │   ├── topics.md
    │   └── index.ts
    │
    ├── day_1/
    │   ├── topics.md
    │   └── index.ts
    │
    ├── day_2/
    │   ├── topics.md
    │   └── index.ts
    │
    └── ...
```

## Setup

Install the project dependencies:

```bash
npm install
```

TypeScript is configured once in the root `tsconfig.json` and applies to the entire `src/` directory.

Run the TypeScript compiler:

```bash
npx tsc
```

Run type checking without generating JavaScript:

```bash
npx tsc --noEmit
```

## How to Use This Repository

Start from `src/day_0` and move through the folders in order.

Read the day's `topics.md` first, learn the concepts, and then practice them inside `index.ts`.

The repository is intended to document the learning process, including experiments, mistakes, corrections, and exercises rather than only polished code.

## Learning Goal

By the end of this repository, I should be able to:

* Understand TypeScript deeply rather than only use basic annotations
* Work fluently with TypeScript in React
* Work confidently with TypeScript in Next.js
* Design and use types for real-world applications
* Understand advanced TypeScript patterns
* Build a complete full-stack web application using TypeScript independently
