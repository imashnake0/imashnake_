import lume from "lume/mod.ts";

const site = lume({
    src: "./src"
});

site.copy("/index.html")
site.copy("/imashnake.css")
site.copy("/favicon.ico")
site.copy("/static/harbor_front.jpg")
site.copy("/static/love_lock.jpg")
site.copy("/static/ocean_morning.jpg")
site.copy("/static/ocean.jpg")
site.copy("/static/rock_garden.jpg")
site.copy("/static/speed.jpg")

export default site;
