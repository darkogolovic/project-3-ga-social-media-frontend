<div id="top">

<div align="center">

# (CIRCLE) PROJECT-3-GA-SOCIAL-MEDIA-FRONTEND

<em>Empowering Connections and Inspiring Conversations</em>

<em>Built with the tools and technologies:</em>

<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
<img src="https://img.shields.io/badge/npm-CB3837.svg?style=flat&logo=npm&logoColor=white" alt="npm">
<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat&logo=PostCSS&logoColor=white" alt="PostCSS">
<img src="https://img.shields.io/badge/.ENV-ECD53F.svg?style=flat&logo=dotenv&logoColor=black" alt=".ENV">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
<br>
<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
<img src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=Vite&logoColor=white" alt="Vite">
<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=flat&logo=Axios&logoColor=white" alt="Axios">
<img src="https://img.shields.io/badge/Socket-C93CD7.svg?style=flat&logo=Socket&logoColor=white" alt="Socket">
<img src="https://img.shields.io/badge/React%20Router-CA4245.svg?style=flat&logo=React-Router&logoColor=white" alt="React%20Router">

</div>
<br>

---

## Table of Contents

- [Overview](#overview)
- [Links](#links)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
- [Features](#features)
- [Project Structure](#project-structure)
  - [Project Index](#project-index)
- [Future Enhancement](#future-enhancement-plan)

---

## Overview

(CIRCLE) Project-3-ga-social-media-frontend is a modern React-based frontend scaffold designed for building scalable social media applications with real-time features. It offers a robust, maintainable architecture optimized for rapid development and seamless user interactions.

**Why CIRCLE?**

This project provides a comprehensive foundation for developing interactive, real-time social platforms using React, Vite, and Tailwind CSS. The core features include:

- 🛠️ **🚀 Fast Development:** Utilizes Vite for lightning-fast builds and hot module replacement, enabling rapid iteration.
- 🔒 **🛡️ Secure API Communication:** Configured Axios instance ensures secure, consistent backend interactions.
- 💬 **🎯 Real-Time Messaging:** Built-in hooks and services facilitate instant chat and conversation management.
- 🎨 **🖌️ Customizable Styling:** Tailwind CSS configuration supports cohesive, extendable UI design.
- 🔄 **📊 Modular Data Handling:** React Query hooks streamline fetching, caching, and updating user, post, and message data.
- 🧩 **Flexible Architecture:** Clear separation of concerns with dedicated services, hooks, and components for scalable development.

## Links

- **🚀 Deployed API:** [Insert Heroku/Fly.io/Render Link Here]
- **💻 Backend Repository:** [project-3-ga-social-media-backend](https://github.com/darkogolovic/project-3-ga-social-media-backend)

---

## Features

|     | Component         | Details                                                                                                                                                                                                                                                                             |
| :-- | :---------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ⚙️  | **Architecture**  | <ul><li>Single Page Application (SPA) built with React</li><li>Uses React Router for client-side routing</li><li>State management via React Query and Context API</li></ul>                                                                                                         |
| 🔩  | **Code Quality**  | <ul><li>ESLint with React Hooks and React Refresh plugins for linting and hot reloading</li><li>Consistent code style enforced via ESLint and Prettier (implied)</li></ul>                                                                                                          |
| 📄  | **Documentation** | <ul><li>Basic README with project overview</li></ul>                                                                                                                                                                                                                                |
| 🔌  | **Integrations**  | <ul><li>Axios for API calls</li><li>Socket.io-client for real-time features</li><li>Tailwind CSS for styling</li><li>Vite as build tool</li><li>React Hot Toast for notifications</li><li>React Router DOM for routing</li><li> React Query for data fetching and caching</li></ul> |
| 🧩  | **Modularity**    | <ul><li>Component-based architecture with reusable React components</li><li>Separation of concerns between UI, API, and state management</li></ul>                                                                                                                                  |
| ⚡️ | **Performance**   | <ul><li>Vite provides fast hot module replacement and build times</li><li>Code splitting via dynamic imports (implied)</li></ul>                                                                                                                                                    |
| 🛡️  | **Security**      | <ul><li>Environment variables via dotenv</li><li>Secure API calls with Axios</li><li>Potential sanitization not explicitly detailed</li></ul>                                                                                                                                       |
| 📦  | **Dependencies**  | <ul><li>Core dependencies: React, React DOM, React Router, Tailwind CSS, Axios, TanStack React Query, Socket.io-client</li><li>Dev dependencies: ESLint, Vite, Tailwind CSS, React Hot Toast</li></ul>                                                                              |

---

## Frontend Project Structure

```sh
└── project-3-ga-social-media-frontend/
    ├── README.md
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── src
    │   ├── App.jsx
    │   ├── assets
    │   ├── components
    │   ├── hooks
    │   ├── index.css
    │   ├── lib
    │   ├── main.jsx
    │   ├── pages
    │   ├── router.jsx
    │   └── services
    ├── tailwind.config.js
    └── vite.config.js
```

---

### Project Index

<details open>
	<summary><b><code>PROJECT-3-GA-SOCIAL-MEDIA-FRONTEND/</code></b></summary>
	<!-- __root__ Submodule -->
	<details>
		<summary><b>__root__</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ __root__</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/aleksa1008/project-3-ga-social-media-frontend/blob/master/README.md'>README.md</a></b></td>
					<td style='padding: 8px;'>- Provides a streamlined setup for developing React applications with Vite, enabling hot module replacement and ESLint integration<br>- It facilitates rapid development and code quality enforcement while offering options for plugin selection and future enhancements like React Compiler support<br>- This foundation ensures efficient, maintainable React projects within a modern build environment.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/aleksa1008/project-3-ga-social-media-frontend/blob/master/tailwind.config.js'>tailwind.config.js</a></b></td>
					<td style='padding: 8px;'>- Defines the Tailwind CSS configuration to specify which files are scanned for class names, enabling optimized styling and ensuring consistent design across the project<br>- It establishes the framework for customizing and extending the default theme, supporting a cohesive and maintainable visual style within the overall application architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/aleksa1008/project-3-ga-social-media-frontend/blob/master/eslint.config.js'>eslint.config.js</a></b></td>
					<td style='padding: 8px;'>- Defines ESLint configuration to enforce coding standards and best practices across JavaScript and JSX files within the project<br>- It integrates recommended rules, React hooks, and Vite-specific settings, ensuring code quality, consistency, and compatibility with modern JavaScript features throughout the codebase.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/aleksa1008/project-3-ga-social-media-frontend/blob/master/package.json'>package.json</a></b></td>
					<td style='padding: 8px;'>- Defines project metadata, dependencies, and scripts for a React-based web application utilizing modern tools like Vite, React Router, and TanStack Query<br>- Serves as the foundational configuration that orchestrates development, build, and dependency management, ensuring a streamlined workflow for a real-time, interactive user interface<br>- Facilitates efficient setup and consistent environment across development and production.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/aleksa1008/project-3-ga-social-media-frontend/blob/master/vite.config.js'>vite.config.js</a></b></td>
					<td style='padding: 8px;'>- Configures the development environment for a React application using Vite, streamlining the build process and enabling fast, efficient development workflows<br>- It integrates React-specific tooling to optimize module handling and hot-reloading, ensuring a smooth developer experience while maintaining a lightweight and flexible project architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/aleksa1008/project-3-ga-social-media-frontend/blob/master/index.html'>index.html</a></b></td>
					<td style='padding: 8px;'>- Sets up the foundational HTML structure for the web application, establishing the document type, metadata, and visual elements<br>- It designates the root container for rendering dynamic content and links to the main JavaScript module responsible for initializing the applications interactive features within the overall project architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/aleksa1008/project-3-ga-social-media-frontend/blob/master/postcss.config.js'>postcss.config.js</a></b></td>
					<td style='padding: 8px;'>- Configures PostCSS to integrate Tailwind CSS and Autoprefixer, streamlining the processing of CSS files within the project<br>- Ensures consistent styling and cross-browser compatibility across the entire codebase by automating vendor prefixing and utility-first CSS features, supporting a cohesive and maintainable frontend architecture.</td>
				</tr>
			</table>
		</blockquote>
	</details>
	<!-- src Submodule -->
	<details>
		<summary><b>src</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ src</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/aleksa1008/project-3-ga-social-media-frontend/blob/master/src/router.jsx'>router.jsx</a></b></td>
					<td style='padding: 8px;'>- Defines the applications client-side routing structure, orchestrating navigation between authentication and main content areas<br>- It maps URL paths to corresponding components, enabling seamless transitions across pages such as sign-in, profile, feed, messaging, and post creation, thereby establishing the foundational navigation flow within the overall architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/aleksa1008/project-3-ga-social-media-frontend/blob/master/src/main.jsx'>main.jsx</a></b></td>
					<td style='padding: 8px;'>- Sets up the applications core rendering process by integrating Reacts strict mode, routing, and state management<br>- It initializes the React root, configures global query handling with React Query, and incorporates development tools and user notifications<br>- This file orchestrates the foundational structure that enables seamless navigation, data fetching, and user interactions across the entire codebase.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/aleksa1008/project-3-ga-social-media-frontend/blob/master/src/App.jsx'>App.jsx</a></b></td>
					<td style='padding: 8px;'>- Defines the main application component, serving as the entry point for the user interface<br>- It currently renders nothing, indicating a placeholder or initial setup stage within the overall project architecture<br>- This component establishes the foundational structure for future UI development and integration within the broader codebase.</td>
				</tr>
			</table>
			<!-- hooks Submodule -->
			<details>
				<summary><b>hooks</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src.hooks</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/aleksa1008/project-3-ga-social-media-frontend/blob/master/src/hooks/useOpenConversation.js'>useOpenConversation.js</a></b></td>
							<td style='padding: 8px;'>- Facilitates opening or creating a conversation between users by attempting to locate an existing chat and creating a new one if necessary<br>- Integrates with the conversation service to manage conversation data, supporting seamless user interactions within the messaging architecture of the application<br>- Enhances real-time communication flow by ensuring conversations are readily accessible.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/aleksa1008/project-3-ga-social-media-frontend/blob/master/src/hooks/usePosts.js'>usePosts.js</a></b></td>
							<td style='padding: 8px;'>- Provides React Query hooks for managing posts and comments, enabling seamless data fetching, creation, updating, deletion, and user interactions like liking posts<br>- Integrates with postService to ensure data consistency across the application, supporting infinite scrolling and real-time updates within the overall architecture focused on user-generated content management.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/aleksa1008/project-3-ga-social-media-frontend/blob/master/src/hooks/useUsers.js'>useUsers.js</a></b></td>
							<td style='padding: 8px;'>- Provides React hooks for fetching user data, enabling seamless integration of user information into components<br>- Facilitates retrieval of all users or individual user details through efficient queries, supporting dynamic data management within the applications architecture<br>- Enhances user-related data handling by abstracting API interactions, promoting code reuse, and maintaining a clean separation of concerns across the codebase.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/aleksa1008/project-3-ga-social-media-frontend/blob/master/src/hooks/useCurrentUser.js'>useCurrentUser.js</a></b></td>
							<td style='padding: 8px;'>- Provides a React hook for fetching and managing the current users authentication state within the application<br>- It integrates with the overall user management system to ensure consistent access to user data across components, supporting seamless user experience and state synchronization in the applications architecture.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/aleksa1008/project-3-ga-social-media-frontend/blob/master/src/hooks/useMessages.js'>useMessages.js</a></b></td>
							<td style='padding: 8px;'>- Provides React hooks for managing message data within the application, enabling seamless retrieval and updating of conversation messages<br>- Integrates with the messaging service to fetch messages based on conversation ID and facilitates sending new messages while ensuring the message list stays current through automatic cache invalidation<br>- Supports real-time communication flow within the overall architecture.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/aleksa1008/project-3-ga-social-media-frontend/blob/master/src/hooks/useMyPosts.js'>useMyPosts.js</a></b></td>
							<td style='padding: 8px;'>- Provides a custom hook to fetch and manage a users posts within the application<br>- Integrates with React Query to handle data retrieval, caching, and state management, ensuring efficient and reactive access to user-specific post data<br>- This enhances the overall architecture by centralizing post-fetching logic and promoting reusability across components.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/aleksa1008/project-3-ga-social-media-frontend/blob/master/src/hooks/useConversations.js'>useConversations.js</a></b></td>
							<td style='padding: 8px;'>- Provides hooks for managing conversation data within the application, enabling seamless retrieval of user-specific conversations and individual conversation details<br>- These abstractions facilitate efficient data fetching and state management, integrating with the overall architecture to support real-time communication features and enhance user experience.</td>
						</tr>
					</table>
				</blockquote>
			</details>
			<!-- components Submodule -->
			<details>
				<summary><b>components</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src.components</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/aleksa1008/project-3-ga-social-media-frontend/blob/master/src/components/AppLayout.jsx'>AppLayout.jsx</a></b></td>
							<td style='padding: 8px;'>- Defines the primary layout component for authenticated sections within the application, facilitating nested routing and consistent UI structure<br>- Serves as a foundational element in the overall architecture, ensuring that protected routes render within a unified layout framework, thereby supporting seamless navigation and user experience across the apps core areas.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/aleksa1008/project-3-ga-social-media-frontend/blob/master/src/components/Welcome.jsx'>Welcome.jsx</a></b></td>
							<td style='padding: 8px;'>- Provides a dynamic welcome interface that guides users between registration and login flows<br>- It displays tailored messaging and visuals based on the current route, facilitating seamless navigation and enhancing user onboarding within the applications authentication architecture.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/aleksa1008/project-3-ga-social-media-frontend/blob/master/src/components/MainLayout.jsx'>MainLayout.jsx</a></b></td>
							<td style='padding: 8px;'>- Defines the primary layout structure for the application by rendering nested route content alongside a persistent navigation bar<br>- Facilitates seamless user navigation and consistent interface presentation across different pages within the React routing architecture<br>- Ensures that the main content dynamically updates based on routing while maintaining access to navigation controls.</td>
						</tr>
					</table>
					<!-- usersList Submodule -->
					<details>
						<summary><b>usersList</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.components.usersList</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/aleksa1008/project-3-ga-social-media-frontend/blob/master/src/components/usersList/usersList.jsx'>usersList.jsx</a></b></td>
									<td style='padding: 8px;'>- Displays a list of users excluding the current user, enabling initiation of new conversations by selecting a user<br>- Facilitates seamless navigation to messaging interfaces by creating or retrieving conversations, thereby supporting real-time communication within the applications architecture<br>- Enhances user interaction flow and connectivity across the platform.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- conversationList Submodule -->
					<details>
						<summary><b>conversationList</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.components.conversationList</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/aleksa1008/project-3-ga-social-media-frontend/blob/master/src/components/conversationList/ConversationList.jsx'>ConversationList.jsx</a></b></td>
									<td style='padding: 8px;'>- Displays a list of user conversations, enabling navigation to detailed message views<br>- Integrates user data and conversation context to present relevant chat threads, facilitating seamless interaction within the messaging architecture<br>- Serves as a core component for user engagement, supporting real-time communication flow in the applications conversation management system.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- NavBar Submodule -->
					<details>
						<summary><b>NavBar</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.components.NavBar</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/aleksa1008/project-3-ga-social-media-frontend/blob/master/src/components/NavBar/navBar.jsx'>navBar.jsx</a></b></td>
									<td style='padding: 8px;'>- Provides a fixed, bottom-centered navigation bar facilitating seamless access to core sections such as feed, conversations, post creation, and user profile<br>- Enhances user experience through intuitive icons and interactive hover effects, supporting smooth navigation within the applications overall architecture<br>- This component is essential for maintaining consistent, accessible site-wide navigation across the user interface.</td>
								</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<!-- services Submodule -->
			<details>
				<summary><b>services</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src.services</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/aleksa1008/project-3-ga-social-media-frontend/blob/master/src/services/authService.js'>authService.js</a></b></td>
							<td style='padding: 8px;'>- Provides core authentication functionalities within the application, enabling user registration, verification, login, and profile retrieval<br>- Facilitates seamless interaction with backend authentication endpoints, supporting user onboarding and session management<br>- Integrates into the overall architecture to ensure secure access control and user identity handling across the system.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/aleksa1008/project-3-ga-social-media-frontend/blob/master/src/services/userService.js'>userService.js</a></b></td>
							<td style='padding: 8px;'>- Provides core user data retrieval functionalities within the service layer, enabling seamless access to user information from the backend API<br>- Facilitates fetching all users or individual user details, supporting higher-level application features such as user management, profile display, and administrative operations, thereby integrating backend data with frontend components in a structured and maintainable manner.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/aleksa1008/project-3-ga-social-media-frontend/blob/master/src/services/conversationService.js'>conversationService.js</a></b></td>
							<td style='padding: 8px;'>- Facilitates core conversation management within the application by enabling creation, retrieval, and search of conversations between users<br>- Integrates with backend APIs to handle conversation data, supporting features like initiating new chats, fetching user-specific conversations, and finding existing conversations between participants<br>- Serves as a crucial service layer for maintaining seamless communication workflows across the platform.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/aleksa1008/project-3-ga-social-media-frontend/blob/master/src/services/postService.js'>postService.js</a></b></td>
							<td style='padding: 8px;'>- Provides an abstraction layer for managing blog posts and related interactions within the application<br>- Facilitates fetching, creating, updating, deleting, and liking posts, as well as handling comments<br>- Integrates seamlessly with backend APIs to support core content management functionalities, enabling a dynamic and interactive user experience across the platform.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/aleksa1008/project-3-ga-social-media-frontend/blob/master/src/services/messagesService.js'>messagesService.js</a></b></td>
							<td style='padding: 8px;'>- Facilitates communication within the application by providing functions to send and retrieve messages associated with specific conversations<br>- It acts as an abstraction layer over API interactions, enabling seamless message exchange and data fetching, thereby supporting real-time messaging features and conversation management within the overall system architecture.</td>
						</tr>
					</table>
				</blockquote>
			</details>
			<!-- lib Submodule -->
			<details>
				<summary><b>lib</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src.lib</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/aleksa1008/project-3-ga-social-media-frontend/blob/master/src/lib/axios.js'>axios.js</a></b></td>
							<td style='padding: 8px;'>- Facilitates seamless communication with the backend server by configuring an Axios instance that manages request URLs and automatically attaches authentication tokens<br>- It ensures secure access to protected routes while allowing public endpoints to remain accessible<br>- This setup centralizes API interactions, supporting consistent and secure data exchange across the applications architecture.</td>
						</tr>
					</table>
				</blockquote>
			</details>
			<!-- pages Submodule -->
			<details>
				<summary><b>pages</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src.pages</b></code>
					<!-- sign-up Submodule -->
					<details>
						<summary><b>sign-up</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.pages.sign-up</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/aleksa1008/project-3-ga-social-media-frontend/blob/master/src/pages/sign-up/sign-up.jsx'>sign-up.jsx</a></b></td>
									<td style='padding: 8px;'>- Facilitates user registration by capturing input data, validating password confirmation, and initiating account creation through an API call<br>- Manages form state, provides real-time feedback via notifications, and navigates users to email verification upon successful sign-up<br>- Integrates seamlessly into the authentication flow within the applications architecture, supporting onboarding and user account management.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- profile Submodule -->
					<details>
						<summary><b>profile</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.pages.profile</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/aleksa1008/project-3-ga-social-media-frontend/blob/master/src/pages/profile/profile.jsx'>profile.jsx</a></b></td>
									<td style='padding: 8px;'>- Provides a user profile interface displaying personal details, avatar, and account creation date, alongside a summary of user posts<br>- Facilitates profile viewing and editing, offering a visual overview of user activity within the application<br>- Integrates seamlessly into the broader architecture by connecting user data and posts, supporting personalized user experiences.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- verify Submodule -->
					<details>
						<summary><b>verify</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.pages.verify</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/aleksa1008/project-3-ga-social-media-frontend/blob/master/src/pages/verify/Verify.jsx'>Verify.jsx</a></b></td>
									<td style='padding: 8px;'>- Facilitates email verification by capturing user input for a 6-digit code, validating it through an API call, and providing real-time feedback<br>- Integrates seamlessly within the authentication flow, ensuring users confirm their email addresses before accessing protected areas of the application<br>- Enhances security and user experience by streamlining the verification process within the overall architecture.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- edit Submodule -->
					<details>
						<summary><b>edit</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.pages.edit</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/aleksa1008/project-3-ga-social-media-frontend/blob/master/src/pages/edit/EditProfile.jsx'>EditProfile.jsx</a></b></td>
									<td style='padding: 8px;'>- Facilitates user profile management by enabling profile picture updates and password changes within the application<br>- Integrates user input handling, image upload and removal, and form validation to ensure secure and seamless profile modifications<br>- Serves as a core component for user personalization and account security within the overall architecture.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- createPost Submodule -->
					<details>
						<summary><b>createPost</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.pages.createPost</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/aleksa1008/project-3-ga-social-media-frontend/blob/master/src/pages/createPost/CreatePost.jsx'>CreatePost.jsx</a></b></td>
									<td style='padding: 8px;'>- Facilitates user-generated content creation by providing an interface for composing posts with optional images and captions<br>- Integrates image upload, preview, and removal functionalities, while managing form submission to create or update posts within the platform<br>- Ensures a seamless user experience for sharing thoughts, supporting dynamic content input, and handling post submission workflows.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- messages Submodule -->
					<details>
						<summary><b>messages</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.pages.messages</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/aleksa1008/project-3-ga-social-media-frontend/blob/master/src/pages/messages/messages.jsx'>messages.jsx</a></b></td>
									<td style='padding: 8px;'>- Facilitates real-time messaging within a conversation context by displaying messages, handling user input, and updating the interface dynamically<br>- Integrates socket connections for live message exchange, ensures automatic scrolling, and manages message state, contributing to a seamless chat experience in the applications architecture.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- conversation Submodule -->
					<details>
						<summary><b>conversation</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.pages.conversation</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/aleksa1008/project-3-ga-social-media-frontend/blob/master/src/pages/conversation/Conversations.jsx'>Conversations.jsx</a></b></td>
									<td style='padding: 8px;'>- Facilitates user interactions within the conversation interface by managing conversation selection, creation, and message display<br>- Integrates user lists and conversation history to enable seamless communication flow, supporting real-time messaging and dynamic conversation management within the applications architecture.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- sign-in Submodule -->
					<details>
						<summary><b>sign-in</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.pages.sign-in</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/aleksa1008/project-3-ga-social-media-frontend/blob/master/src/pages/sign-in/sign-in.jsx'>sign-in.jsx</a></b></td>
									<td style='padding: 8px;'>- Handles user authentication by providing a sign-in interface that captures credentials, manages login requests via API, and navigates users upon success<br>- Integrates form state management, loading indicators, and user feedback to facilitate secure access to the applications main feed, forming a critical entry point within the overall architecture.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- feed Submodule -->
					<details>
						<summary><b>feed</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.pages.feed</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/aleksa1008/project-3-ga-social-media-frontend/blob/master/src/pages/feed/FeedPage.jsx'>FeedPage.jsx</a></b></td>
									<td style='padding: 8px;'>- Provides a dynamic social feed interface enabling users to browse, like, and comment on posts within their circle<br>- Implements infinite scrolling for seamless content loading, displays user profiles, and manages comment interactions through modal overlays<br>- Facilitates real-time engagement and profile management, forming the core user interaction layer of the application’s architecture.</td>
								</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---

## Getting Started

### Prerequisites

This project requires the following dependencies:

- **Programming Language:** JavaScript
- **Package Manager:** Npm

### Installation

Build project-3-ga-social-media-frontend from the source and install dependencies:

1. **Clone the repository:**

   ```sh
   ❯ git clone https://github.com/darkogolovic/project-3-ga-social-media-frontend
   ```

2. **Navigate to the project directory:**

   ```sh
   ❯ cd project-3-ga-social-media-frontend
   ```

3. **Install the dependencies:**

   ```sh
   ❯ npm install
   ```

### Usage

Run the project with:

```sh
npm run dev
```

---


# Future Enhancement Plan

| Feature            | Purpose                               |
| ------------------ | ------------------------------------- |
| User Profiles      | Establish identity & view posts       |
| Follow System      | Enable networking & personalized feed |
| Visibility Control | Allow privacy & sharing control       |
| Filtered Feed      | Personalized content stream           |
| Group Chats        | Facilitate group discussion           |

---

<div align="left"><a href="#top">⬆ Return</a></div>

---
