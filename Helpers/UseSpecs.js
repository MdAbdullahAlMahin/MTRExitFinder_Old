const specs = {
  stations: ["kennedytown", 'tseungkwano'],
  kennedytown: {
    exits: ["A", "B", "C"],
    type_of_exits: {
      A: ["Elevator", "Escalator", "Stairs"],
      B: ["Elevator", "Escalator", "Stairs"],
      C: ["Escalator", "Stairs"],
    },
  },
  tseungkwano: {
    exits: ["A", "B", "C"],
    type_of_exits: {
      A: ["Exit"],
      B: ["Exit"],
      C: ["Exit"],
    },
  },
};

const useSpecs = (station) => {
  if (specs[station] !== null || typeof specs[station] !== undefined) {
    return specs[station];
  } else {
    return null;
  }
};

const stationExists = (station) => {
  if (specs.stations.some((e) => e === station)) {
    return true;
  } else {
    return false;
  }
};

const containsExit = (station, exit) => {
  if (specs[station].exits.some((e) => e === exit)) {
    return true;
  } else {
    return false;
  }
};

const containsTypeOfExit = (station, exit, type_of_exit) => {
  if (specs[station].type_of_exit[exit].some((e) => e.Name === type_of_exit)) {
    return true;
  } else {
    return false;
  }
};

export { useSpecs, stationExists, containsTypeOfExit, containsExit };
