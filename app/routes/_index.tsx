/* eslint-disable react/no-unescaped-entities */
import type { MetaFunction } from "@remix-run/node";
import { Box, Typography, Container } from "@mui/material";
import FolderStructure from "../../public/assets/image.png";
import { Link } from "@remix-run/react";
export const meta: MetaFunction = () => {
  return [
    { title: "Remix js BoilerPlate | TypeScript" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <div className="mian-div">
        <div className="">
          <header className="">
            <h1 className="">
              Welcome to <span className="sr-only">Remix BoilerPlate</span>
            </h1>
          </header>
          <nav className="">
            <p className="">What&apos;s next?</p>
            <ul>
              {resources.map(({ href, text, icon }) => (
                <li key={href}>
                  <a className="" href={href} target="_blank" rel="noreferrer">
                    {icon}
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {" "}
          <h1>Routes</h1>
          <Link to="/home">
            {" "}
            <li
              style={{
                listStyle: "none",
                marginLeft: "10px",
                cursor: "pointer",
              }}
            >
              Home
            </li>
          </Link>
          <Link to="/about">
            <li
              style={{
                listStyle: "none",
                marginLeft: "10px",
                cursor: "pointer",
              }}
            >
              About
            </li>
          </Link>
        </div>
      </div>
      <Box width={"100%"} display={"flex"} justifyContent={"center"}>
        <Typography>
          Hello this is Material ui . If your Material Ui does&apos;nt work
          properly in Your Projetc then run this command to your Project
          Terminal
          <Typography color="red" display={"flex"} justifyContent={"center"}>
            <Typography>Command:&nbsp;&nbsp;</Typography>yarn upgrade
            react@canary
          </Typography>
        </Typography>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Typography
          lineHeight={"60px"}
          fontSize={"20px"}
          fontWeight={"600"}
          sx={{ textDecoration: "underline" }}
        >
          Folder Structure
        </Typography>
        <img src={FolderStructure} alt="" />
      </Box>

      <Container
        maxWidth="100%"
        sx={{
          padding: "20px 0",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Project Structure Overview
        </Typography>
        <Typography variant="h6">app/:</Typography>
        <Typography paragraph>
          This is where most of your application code will reside.
        </Typography>

        <Typography variant="h6">components/:</Typography>
        <Typography paragraph>
          Contains reusable UI components, such as buttons, modals, headers,
          etc.
        </Typography>

        <Typography variant="h6">routes/:</Typography>
        <Typography paragraph>
          Contains route files. Each file corresponds to a route in your
          application. For example, <code>index.tsx</code> corresponds to the
          root URL (/), and you can create additional files like{" "}
          <code>about.tsx</code> for an "About" page.
        </Typography>

        <Typography variant="h6">styles/:</Typography>
        <Typography paragraph>
          Contains your global styles, including Tailwind CSS imports. The{" "}
          <code>styles.css</code> file is where you’ll import Tailwind
          directives.
        </Typography>

        <Typography variant="h6">theme.ts:</Typography>
        <Typography paragraph>
          Contains the Material-UI theme configuration.
        </Typography>

        <Typography variant="h6">root.tsx:</Typography>
        <Typography paragraph>
          The root layout for your app. This file will set up the basic
          structure of your app and wrap it in the ThemeProvider.
        </Typography>

        <Typography variant="h6">utils/:</Typography>
        <Typography paragraph>
          Contains utility functions, such as an Axios instance for making API
          requests.
        </Typography>

        <Typography variant="h6">context/:</Typography>
        <Typography paragraph>
          (optional) Contains context providers if you're using React Context
          for state management.
        </Typography>

        <Typography variant="h6">public/:</Typography>
        <Typography paragraph>
          This folder contains static assets such as images and fonts. Files in
          this folder are served at the root level (e.g.,{" "}
          <code>public/favicon.ico</code> will be accessible at /favicon.ico).
        </Typography>

        <Typography variant="h6">package.json:</Typography>
        <Typography paragraph>
          The file that contains metadata about the project, including
          dependencies and scripts.
        </Typography>

        <Typography variant="h6">postcss.config.js:</Typography>
        <Typography paragraph>Configuration for PostCSS.</Typography>

        <Typography variant="h6">remix.config.js:</Typography>
        <Typography paragraph>Configuration file for Remix.</Typography>

        <Typography variant="h6">tailwind.config.js:</Typography>
        <Typography paragraph>Configuration file for Tailwind CSS.</Typography>

        <Typography variant="h6">tsconfig.json:</Typography>
        <Typography paragraph>Configuration for TypeScript.</Typography>

        <Typography variant="h6">vite.config.ts:</Typography>
        <Typography paragraph>Configuration for Vite.</Typography>

        <Typography variant="h6">yarn.lock:</Typography>
        <Typography paragraph>
          The lock file for Yarn to ensure consistent installations.
        </Typography>
      </Container>
    </>
  );
}

const resources = [
  {
    href: "https://github.com/falconitconsultant",
    text: "Github Account",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path
          d="M8.51851 12.0741L7.92592 18L15.6296 9.7037L11.4815 7.33333L12.0741 2L4.37036 10.2963L8.51851 12.0741Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },

  {
    href: "https://remix.run/docs",
    text: "Remix Docs",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path
          d="M9.99981 10.0751V9.99992M17.4688 17.4688C15.889 19.0485 11.2645 16.9853 7.13958 12.8604C3.01467 8.73546 0.951405 4.11091 2.53116 2.53116C4.11091 0.951405 8.73546 3.01467 12.8604 7.13958C16.9853 11.2645 19.0485 15.889 17.4688 17.4688ZM2.53132 17.4688C0.951566 15.8891 3.01483 11.2645 7.13974 7.13963C11.2647 3.01471 15.8892 0.951453 17.469 2.53121C19.0487 4.11096 16.9854 8.73551 12.8605 12.8604C8.73562 16.9853 4.11107 19.0486 2.53132 17.4688Z"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];
