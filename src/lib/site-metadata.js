export const SITE_NAME = "MediQueue";

export const PAGE_TITLES = {
  home: "Home",
  tutors: "Browse Tutors",
  addTutor: "Add Tutor",
  myTutors: "My Tutors",
  bookedSessions: "My Booked Sessions",
  signIn: "Sign In",
  signUp: "Sign Up",
  notFound: "Page Not Found",
};

export function createPageMetadata(title) {
  return { title };
}
