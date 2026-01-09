import lume from "lume/mod.ts";
import blog from "https://deno.land/x/lume_theme_simple_blog@v0.15.6/mod.ts";

const site = lume({
    src: "./src"
});

site.copy("/index.html")
site.copy("/imashnake.css")
site.copy("/_data.yml")
site.copy("/favicon.ico")
site.copy("/static/harbor_front.jpg")
site.copy("/static/love_lock.jpg")
site.copy("/static/ocean_morning.jpg")
site.copy("/static/ocean.jpg")
site.copy("/static/rock_garden.jpg")
site.copy("/static/speed.jpg")

site.use(blog());

export default site;
