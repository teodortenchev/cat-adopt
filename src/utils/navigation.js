function getNavigation(isLoggedIn, appUser) {

    const authLinksUser = [
        {
            title: "My Profile",
            link: `/profile/${appUser && appUser.uid}`
        },
        {
            title: "Browse Kitties",
            link: 'all-cats'
        },
        {
            title: "My Adoptions",
            link: `/adoptions/${appUser && appUser.uid}`
        }
    ];

    //TO DO: Will complete after roles are added. 
    const authLinksAdmin = [];

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
            link: 'all-cats'
        }
    ]

    return isLoggedIn ? authLinksUser : guestLinks;
}


export default getNavigation;