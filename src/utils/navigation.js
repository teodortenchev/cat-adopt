function getNavigation(isLoggedIn, isAdmin, appUser) {

    const authLinksUser = [
        {
            title: `Hello, ${appUser && appUser.displayName}`,
            link: `/profile/${appUser && appUser.uid}`
        },
        {
            title: "Browse Kitties",
            link: '/cats/all'
        },
        {
            title: "My Adoptions",
            link: `/adoptions/${appUser && appUser.uid}`
        }
    ];

    //TO DO: Will complete after roles are added. 
    const authLinksAdmin = [
        {
            title: "Browse Kitties",
            link: '/cats/all'
        },
        {
            title: "Add Cat",
            link: '/cats/add'
        },
        {
            title: "Adoption Requests",
            link: `/requests/`
        },
        {
            title: `Hello, ${appUser.displayName} (admin)`,
            link: `/profile/${appUser.uid}`
        }
    ];

    const guestLinks = [
        {
            title: "Sign In",
            link: "/login"
        },
        {
            title: "Sign Up",
            link: "/register"
        },
        {
            title: "Browse Kitties",
            link: '/cats/all'
        }
    ]

    if (isAdmin) {
        return authLinksAdmin;
    }
    return isLoggedIn ? authLinksUser : guestLinks;
}


export default getNavigation;