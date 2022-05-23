interface stateI {
  created?: boolean;
  valuable?: boolean;
  speed?: number;
}

interface state2 {
  created?: boolean;
  valuable?: boolean;
  speed?: number;
  high?: boolean;
}

const objA: state2 = {
  created: false,
  valuable: false,
  speed: 2,
  high: true,
};

const MAP_ONE: Map<string, string> = new Map([
  [JSON.stringify({ created: true, valuable: false }), 'dddddd'],
  [JSON.stringify({ created: false, valuable: false }), 'ccccc'],
  [JSON.stringify({ created: true, valuable: true }), 'ffffff'],
]);

function mapObjToCompare(obj: state2): string {
  return JSON.stringify({
    created: obj.created,
    valuable: obj.valuable,
  });
}

const result = MAP_ONE.get(mapObjToCompare(objA));

console.log(result);
