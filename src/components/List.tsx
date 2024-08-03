import { foodList } from "../data";
import { useState } from "react";

function List() {
  const [index, setIndex] = useState(0);
  const hasPrev = index > 0;
  const hasNext = index < foodList.length - 1;

  const handleClick = () => {
    if (hasNext) setIndex(index + 1);
  };
  const previousHandleClick = () => {
    if (hasPrev) setIndex(index - 1);
  };
  const food = foodList[index];
  return (
    <div className="mt-20 animate-fade animate-once animate-ease-linear animate-normal animate-fill-both  ">
      <div className="card lg:card-side shadow-xl w-[50%] min-w-[300px]  m-auto  bg-[#dcc6da]  border-2 border-[#dcc6da] ">
        <figure className="lg:w-[50%] w-[100%] m-auto">
          <img src={food.image} className=" w-[100%]  p-1" alt="Album" />
        </figure>
        <div className="card-body">
          <div className="card-actions lg:justify-end justify-center ">
            <button className="btn " onClick={previousHandleClick}>
              Anterior
            </button>
            <button className="btn " onClick={handleClick}>
              Siguiente
            </button>
          </div>
          <h2 className="card-title text-3xl font-serif">{food.title}</h2>
          <p className="text-2xl font-serif ">{food.description}</p>
          <h3 className="font-serif">Ingredientes Utilizados:</h3>
          <ul className="font-serif">
            {food.ingredients.map((f, key) => (
              <li id={key}>-{f}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default List;
