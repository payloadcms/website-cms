import { Field, GroupField } from "payload/types";
import deepMerge from "../utilities/deepMerge";

type Args = {
  name: string
  fields: Field[]
  overrides?: Partial<GroupField>
}

export const blockFields = ({ name, fields, overrides }: Args): Field => deepMerge({
  name,
  label: false,
  type: 'group',
  admin: {
    hideGutter: true,
    style: {
      margin: 0,
      padding: 0,
    }
  },
  fields,
}, overrides);