import { PERIOD_TABS } from "src/constants/periodTabs";

export const getTabFromRoutePath = (path: string) => path.replace('/', '') as PERIOD_TABS;
export const getRoutePathByTab = (tab: PERIOD_TABS) => `/${tab}`;