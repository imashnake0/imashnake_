import lume from "lume/mod.ts";

const site = lume({
    src: "./src"
});

site.copy("index.html")
site.copy("Animite.html")

export default site;
