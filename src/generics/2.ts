type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type CompareInput<T> = Pick<T, "name" | "position" | "color" | "weight">;

function compare<T extends AllType>(
  top: Pick<T, "name" | "color">,
  bottom: Pick<T, "position" | "weight">
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

const topObject = {
  name: "Top Object",
  color: "Red",
};

const bottomObject = {
  position: 10,
  weight: 50,
};

const result = compare(topObject, bottomObject);
console.log(result);
