'use client';

const REGISTRATION_SECTION_ID = 'registration-section';
const NAVBAR_OFFSET = 96;

export function scrollToRegistrationSection() {
  const section = document.getElementById(REGISTRATION_SECTION_ID);

  if (!section) {
    return false;
  }

  const top = section.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;

  window.scrollTo({
    top,
    behavior: 'smooth',
  });

  return true;
}

export function getRegistrationHash() {
  return `#${REGISTRATION_SECTION_ID}`;
}
