// src/frontend/src/data/roleExtrasIndex.ts
// Aggregates all roleExtras data into a single lookup object
import { roleExtrasData1 } from "./roleExtrasData1";
import { roleExtrasData2 } from "./roleExtrasData2";
import { roleExtrasData3 } from "./roleExtrasData3";

export const allRoleExtras = {
  ...roleExtrasData1,
  ...roleExtrasData2,
  ...roleExtrasData3,
};
