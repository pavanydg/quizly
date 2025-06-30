const { PrismaClient } = require("@prisma/client");

let quizzesPrisma: any;

const quizzes = [
  {
    title: "Computer Science Basics",
    description: "A quiz about fundamental computer science concepts.",
    categoryId: "683dfcbf4cc67fd5678101ce", // Replace with the actual category ID
  },
  {
    title: "Programming Fundamentals",
    description: "Test your knowledge of basic programming concepts.",
    categoryId: "683dfcbf4cc67fd5678101ce",
  },
  {
    title: "Data Structures",
    description: "Assess your understanding of data structures.",
    categoryId: "683dfcbf4cc67fd5678101ce",
  },
  {
    title: "Physics",
    description: "Test your knowledge of physics",
    categoryId: "683dfcbf4cc67fd5678101cb",
  },
  {
    title: "Biology",
    description: "Test your knowledge of physics",
    categoryId: "683dfcbf4cc67fd5678101cb",
  },
  {
    title: "Chemistry",
    description: "Test your knowledge of physics",
    categoryId: "683dfcbf4cc67fd5678101cb",
  },
];

async function seedQuizzes() {
  quizzesPrisma = new PrismaClient();

  console.log("Seeding quizzes...");

  for (const quiz of quizzes) {
    const craetedQuiz = await quizzesPrisma.quiz.create({
      data: quiz,
    });

    console.log("Created quiz: ", `${craetedQuiz.title}`);
  }

  console.log("Seeding quizzes completed.");
}

seedQuizzes()
  .catch((e) => {
    console.log("Error seeding quizzes: ", e);
  })
  .finally(async () => {
    await quizzesPrisma.$disconnect();
  });
