export function useMap(station, stepSize) {
  return map[station](stepSize);
}

const map = {
  kennedytown: returnKennedyTownRoutes,
};

function returnKennedyTownRoutes(stepSize) {
  const routes = {
    A: {
      Escalator: [
        `go these steps ${14 / stepSize}`,
        `go these steps ${15 / stepSize}`,
        `go these steps ${16 / stepSize}`,
      ],
      Places: ["Chi Sun", "Shun Hing"],
    },
  };
  return routes;
}
