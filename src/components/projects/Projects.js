import React from 'react'
import Title from '../Title/Title'
import { projectOne, projectTwo, projectThree, projectFour,projectFive,projectSix } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-12 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="React TodoList"
          des="React TodoList where we can add,edit and delete todo items and implemented the clear all, select all and deselect all functionality using react."
          src={projectOne}
          github_link = "https://github.com/dineshgandla/react_todo"

        />
        <ProjectsCard
          title="Movie Search App"
          des="Movie Search Application where we can find the related movies/series based on the input provided in the search box and we can also download the poster."
          src={projectThree}
          github_link ="https://github.com/dineshgandla/movie_app"
        />
        <ProjectsCard
          title="Drinks Search App"
          des="Drinks Search Application, where we an find the searched drinks based on tthe input provided in the seach box and CocktailDB is used for API data."
          src={projectFour}
          github_link = "https://github.com/dineshgandla/drinks_app"
        />
        <ProjectsCard
        title="React News App"
        des="React News Application where the news will be displayed based on category like sports,education and we can search for any news using search box."
        src={projectTwo}
        github_link = "https://github.com/dineshgandla/news_app"
      />
        <ProjectsCard
          title="E-commerce App"
          des="The modern shopping application from where we can buy products online and implemented the filter functionality for the products and managing cart items."
          src={projectFive}
          github_link="https://github.com/dineshgandla/ecommerce"
        />
        <ProjectsCard
          title="Redux CART Implementation"
          des="Redux plays a vital role in managing state globally. Here redux is used to update the items state globally, where store has the original logic for managing state."
          src={projectSix}
          github_link="https://github.com/dineshgandla/react_redux"
        />
      </div>
    </section>
  );
}

export default Projects