module.exports =
{
  purge:
  [
    './src/**/*.{html,scss,ts}',
    './src/styles.scss',
  ],
  darkMode: false,
  theme:
  {
    backgroundColor:
    {
      primary : "#49143F",
      secondary : "#AD3465",
      tertiary : "#D38C39",
      neutral : "#F7F7F7"
    },
    borderColor:
    {
      primary : "#49143F",
      secondary : "#AD3465",
      tertiary : "#D38C39",
      neutral : "#F7F7F7"
    },
    textColor:
    {
      primary : "#49143F",
      secondary : "#AD3465",
      tertiary : "#D38C39",
      neutral : "#F7F7F7"
    }
  },
  variants:
  {
    extend:
    {
      fontWeight: ["hover"],
      letterSpacing: ["hover"]
    },
  },
  plugins: [],
}