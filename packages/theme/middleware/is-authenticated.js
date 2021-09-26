export default async ({ app, $vsf }) => {
  try {
    await $vsf.$vendure.api.getMe();
  } catch (error) {
    if (error) app.context.redirect('/');
  }
};
