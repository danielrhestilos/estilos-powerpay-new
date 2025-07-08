interface Settings {
  powerPayToken: string
}
interface SettingsProps {
  settings: NamedProps<{ appSettings: Settings }, {}>
}
