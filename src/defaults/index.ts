// NOTE! +=> removing this content without cleaning them from the following files will break your code.
const MY_GITHUB_URL = process.env.MY_GITHUB_URL;

const MY_TWITTER_URL = process.env.MY_TWITTER_URL;

const nav_content = [ // data used for rendering the navbar
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Error page",
        path: "/error"
    }
];

export const render_defaults = {
    MY_GITHUB_URL,
    MY_TWITTER_URL,

    nav_content,
    title: "My Node Template",
};
