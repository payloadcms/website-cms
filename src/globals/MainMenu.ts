import { GlobalConfig } from "payload/types";
import link from "../fields/link";

export const MainMenu: GlobalConfig = {
  slug: 'main-menu',
  fields: [
    {
      name: 'navItems',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
      ]
    }
  ]
}