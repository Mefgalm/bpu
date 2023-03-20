const Buffer = require('buffer/').Buffer;
import pako from 'pako';

export function blueprintToJson(blueprint) {
  const buffer = new Buffer(blueprint.slice(1), 'base64');
  return JSON.parse(pako.inflate(buffer, { to: 'string' }));
}

export function jsonToBlueprint(json) {
  return "0" + Buffer.from(pako.deflate(JSON.stringify(json))).toString("base64");
}

const isObject = x => x && typeof x === 'object' && !Array.isArray(x);

function dirtyUpdate(json, key, fun) {
  if (Array.isArray(json)) {
    for (const obj of json) {
      dirtyUpdate(obj, key, fun);
    }
  } else if (isObject(json)) {
    for (const prop in json) {
      dirtyUpdate(json[prop], key, fun);
      if (prop === key) {
        fun(json[prop]);
      }
    }
  }
}

export function updateEntities(json, replaceValues) {
  function updateFun(values) {
    for (const val of values) {
      const name = val["name"];
      const replaceValue = replaceValues.get(name);
      if (replaceValue) {
        val["name"] = replaceValue;
      }
    }
  }
  const cloneJson = JSON.parse(JSON.stringify(json));
  dirtyUpdate(cloneJson, "entities", updateFun);
  dirtyUpdate(cloneJson, "entity_filters", updateFun);
  return cloneJson;
}
