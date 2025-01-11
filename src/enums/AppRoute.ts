const AppRoute = {
  LOGIN: "/login",
  NOTES: "/notes",
  NOTES_PAGE: "/notes?page=:page",
  NOTE: "/note",
  NOTE_ID: "/note/:id",
  PROFILE: "/profile",
} as const;

export { AppRoute };
