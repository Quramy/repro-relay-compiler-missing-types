/**
 * @generated SignedSource<<3195f53227b777000953730635d4a301>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { Result } from "relay-runtime";
export type main_Query$variables = Record<PropertyKey, never>;
export type main_Query$data = {
  readonly viewer: Result<{
    readonly name: string | null | undefined;
  }, ReadonlyArray<unknown>>;
};
export type main_Query = {
  response: main_Query$data;
  variables: main_Query$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "viewer",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "main_Query",
    "selections": [
      {
        "kind": "CatchField",
        "field": (v0/*: any*/),
        "to": "RESULT",
        "path": "viewer"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "main_Query",
    "selections": [
      (v0/*: any*/)
    ]
  },
  "params": {
    "cacheID": "ecc096338f4e74b7dd1ba162e3e87cd6",
    "id": null,
    "metadata": {},
    "name": "main_Query",
    "operationKind": "query",
    "text": "query main_Query {\n  viewer {\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "b9f93944577ab6de30ef66db45aed0b3";

export default node;
