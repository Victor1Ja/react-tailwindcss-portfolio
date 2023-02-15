// import { Octokit } from 'octokit';
import jsonData from './data.json';
export default async function getData() {
  console.log(jsonData);
  const {
    projects,
    skills,
    about,
    contact,
    navBar,
    workExperience,
    testimonials,
    certifications
  } = jsonData;

  return { projects, skills, about, testimonials, contact, navBar };
}
