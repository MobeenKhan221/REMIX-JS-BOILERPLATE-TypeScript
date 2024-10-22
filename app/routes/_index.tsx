/* eslint-disable react/no-unescaped-entities */
import type { MetaFunction } from "@remix-run/node";
import { Box, Typography, Container } from "@mui/material";
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
      </Box>

      <Box
        maxWidth="100%"
        sx={{
          padding: "0px 20px",
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
      </Box>
    </>
  );
}
