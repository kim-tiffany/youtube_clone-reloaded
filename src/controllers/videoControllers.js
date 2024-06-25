export const trending = (req, res) => {
    const videos = [
        {
            title: "video 1",
            rating: 4,
            comments: 5,
            createdAt: "5 minutes ago",
            views: 55,
            id: 555,
        },
        {
            title: "video 2",
            rating: 4,
            comments: 5,
            createdAt: "5 minutes ago",
            views: 55,
            id: 555,
        },
        {
            title: "video 3",
            rating: 4,
            comments: 5,
            createdAt: "5 minutes ago",
            views: 55,
            id: 555,
        },
    ];
    res.render("home", { pageTitle: "Home", videos });
};
export const see = (req, res) => res.render("watch", { pageTitle: "Watch" });
export const edit = (req, res) => res.render("edit", { pageTitle: "Edit" });

export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => res.send("Delte Video");
