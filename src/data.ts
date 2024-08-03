import alfajor1 from "./img/alfajor1.png";
interface FoodItem {
  title: string;
  description: string;
  image: string;
  ingredients: Array<string>;
}
export const foodList: FoodItem[] = [
  {
    title: "Alfajor de Chocolate",
    description: "Alfajores de Chocolate rellenos con manjar.",
    ingredients: ["Mantequilla", "Azucar Flor", "Harina", "Cacao", "Manjar"],
    image: alfajor1,
  },
  {
    title: "??",
    description: "??",
    ingredients: [],
    image: "",
  },
];
