export enum PERIOD_TABS {
  NOW = 'now',
  TODAY = 'today',
  TOMORROW = 'tomorrow',
  THREE_DAYS = 'three_days',
  TEN_DAYS = 'ten_days',
}

export const PERIOD_TABS_NAMES: Record<PERIOD_TABS, string> = {
  [PERIOD_TABS.NOW]: 'Сейчас',
  [PERIOD_TABS.TODAY]: 'Сегодня',
  [PERIOD_TABS.TOMORROW]: 'Завтра',
  [PERIOD_TABS.THREE_DAYS]: '3 дня',
  [PERIOD_TABS.TEN_DAYS]: '10 дней',
};

export const PERIOD_FORECAST_DAYS: Record<PERIOD_TABS, number> = {
  [PERIOD_TABS.NOW]: 0,
  [PERIOD_TABS.TODAY]: 0,
  [PERIOD_TABS.TOMORROW]: 0,
  [PERIOD_TABS.THREE_DAYS]: 2,
  [PERIOD_TABS.TEN_DAYS]: 9,
};