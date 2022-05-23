const objA = {
    created: false,
    valuable: false,
    speed: 2,
    high: true,
};
const MAP_ONE = new Map([
    [JSON.stringify({ created: true, valuable: false }), 'dddddd'],
    [JSON.stringify({ created: false, valuable: false }), 'ccccc'],
    [JSON.stringify({ created: true, valuable: true }), 'ffffff'],
]);
function mapObjToCompare(obj) {
    return JSON.stringify({
        created: obj.created,
        valuable: obj.valuable,
    });
}
const result = MAP_ONE.get(mapObjToCompare(objA));
console.log(result);
